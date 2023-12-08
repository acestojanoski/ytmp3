import IORedis from 'ioredis'

if (!process.env.REDIS_URL) {
  throw new Error('No redis URL found.')
}

export const ioRedis = new IORedis(process.env.REDIS_URL)
