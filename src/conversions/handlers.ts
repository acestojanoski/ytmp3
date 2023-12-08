import { NextRequest, NextResponse } from 'next/server'
import { CreateConversionRequest, CreateConversionResponse } from './contracts'
import { ErrorResponse } from '@/common/contracts'
import { service } from './service'

export const createConversion = async (req: NextRequest) => {
  const body = (await req.json()) as CreateConversionRequest

  if (!body?.urls) {
    return NextResponse.json<ErrorResponse>({
      message: 'Bad request.',
    })
  }

  const id = await service.createConversion(body)

  return NextResponse.json<CreateConversionResponse>({
    id,
    status: 'Initiated',
  })
}
