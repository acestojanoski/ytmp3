import { NextRequest, NextResponse } from 'next/server'
import { ConvertRequest, ConvertResponse } from './contracts'
import { ErrorResponse } from '@/common/contracts'
import { service } from './service'

export const convertHandler = async (req: NextRequest) => {
  const body = (await req.json()) as ConvertRequest

  if (!body?.urls) {
    return NextResponse.json<ErrorResponse>({
      message: 'Bad request.',
    })
  }

  await service.initiateConversion(body)

  return NextResponse.json<ConvertResponse>({
    status: 'Initiated',
  })
}
