import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')

  if (!authHeader || authHeader !== 'branfostify') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const searchParams = request.nextUrl.searchParams
  const search = searchParams.get('search')
  const type = searchParams.get('type') || 'track'

  if (!search) {
    return NextResponse.json(
      { error: 'Search parameter is required' },
      { status: 400 }
    )
  }

  try {
    // Get Spotify access token
    const tokenResponse = await fetch(
      'https://accounts.spotify.com/api/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
        },
        body: 'grant_type=client_credentials'
      }
    )

    if (!tokenResponse.ok) {
      throw new Error('Failed to get Spotify token')
    }

    const tokenData = await tokenResponse.json()

    // Search Spotify
    const searchResponse = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(search)}&type=${type}&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`
        }
      }
    )

    if (!searchResponse.ok) {
      throw new Error('Failed to search Spotify')
    }

    const searchData = await searchResponse.json()

    // Format results based on type
    let results = {}
    if (type === 'album') {
      results = {
        albums: searchData.albums.items.map((album: any) => ({
          id: album.id,
          name: album.name,
          artists: album.artists.map((artist: any) => artist.name),
          release_date: album.release_date,
          total_tracks: album.total_tracks,
          images: album.images,
          external_urls: album.external_urls
        }))
      }
    } else if (type === 'artist') {
      results = {
        artists: searchData.artists.items.map((artist: any) => ({
          id: artist.id,
          name: artist.name,
          genres: artist.genres,
          popularity: artist.popularity,
          images: artist.images,
          external_urls: artist.external_urls
        }))
      }
    } else {
      results = {
        tracks: searchData.tracks.items.map((track: any) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist: any) => artist.name),
          album: track.album.name,
          preview_url: track.preview_url,
          external_urls: track.external_urls
        }))
      }
    }

    return NextResponse.json({
      result: 'success',
      ...results
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to search Spotify' },
      { status: 500 }
    )
  }
}
