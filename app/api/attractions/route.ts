import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    const attractions = await prisma.attraction.findMany({
      where: category ? { category } : {},
    })

    return NextResponse.json(attractions)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch attractions' }, { status: 500 })
  }
}
