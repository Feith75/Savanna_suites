import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const chefs = await prisma.chefProfile.findMany({
      where: {
        status: 'APPROVED',
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    })

    return NextResponse.json(chefs)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch chefs' }, { status: 500 })
  }
}
