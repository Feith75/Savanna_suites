import { NextResponse } from 'next/server'
import { apiConfig } from '@/lib/api-config'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64File = buffer.toString('base64')

    const cloudinaryResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${apiConfig.cloudinary.cloudName}/image/upload`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          file: `data:${file.type};base64,${base64File}`,
          upload_preset: 'luxury_bnb',
          api_key: apiConfig.cloudinary.apiKey,
        }),
      }
    )

    const data = await cloudinaryResponse.json()
    
    return NextResponse.json({ url: data.secure_url })
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
