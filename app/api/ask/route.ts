import Perplexity from '@perplexity-ai/perplexity_ai'
import { NextRequest, NextResponse } from 'next/server'

const corsHeaders = {
  'Access-Control-Allow-Origin': 'app://obsidian.md',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, content-type'
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
  const search = body.search

  if (!search) {
    return NextResponse.json(
      { error: 'Search parameter is required' },
      { status: 400, headers: corsHeaders }
    )
  }

  const result = await client.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: search
      }
    ],
    model: 'sonar-pro'
  })

  return NextResponse.json(
    { data: result },
    { status: 200, headers: corsHeaders }
  )
}
