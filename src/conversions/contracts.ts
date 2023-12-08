export type CreateConversionRequest = {
  urls: string[]
}

export type CreateConversionResponse = {
  id: string
  status: 'Initiated'
}
