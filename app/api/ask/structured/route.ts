import Perplexity from '@perplexity-ai/perplexity_ai'
import { NextRequest, NextResponse } from 'next/server'

export const maxDuration = 60

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type'
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders
  })
}

const client = new Perplexity()

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization')

  if (!authHeader || authHeader !== process.env.AUTH_SECRET) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401, headers: corsHeaders }
    )
  }

  const body = await request.json()
  const { content, schema, system, model } = body

  if (!content) {
    return NextResponse.json(
      { error: 'Content parameter is required' },
      { status: 400, headers: corsHeaders }
    )
  }

  if (!schema) {
    return NextResponse.json(
      { error: 'Schema parameter is required' },
      { status: 400, headers: corsHeaders }
    )
  }

  const messages = []
  if (system) {
    messages.push({
      role: 'system' as const,
      content: system
    })
  }
  messages.push({
    role: 'user' as const,
    content: content
  })

  const result = await client.chat.completions.create({
    messages,
    model: model ?? 'sonar-pro',
    response_format: {
      type: 'json_schema',
      json_schema: {
        schema: schema
      }
    }
  })

  try {
    const messageContent = result.choices[0].message.content

    if (typeof messageContent !== 'string') {
      return NextResponse.json(
        { error: 'Unexpected response format: content is not a string' },
        { status: 500, headers: corsHeaders }
      )
    }
    const response = JSON.parse(messageContent)

    return NextResponse.json(response, { status: 200, headers: corsHeaders })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to parse response', details: error },
      { status: 500, headers: corsHeaders }
    )
  }
}
