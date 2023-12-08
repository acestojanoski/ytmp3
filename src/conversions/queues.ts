import { ioRedis } from '@/common/redis/connection'
import { Queue } from 'bullmq'

export const conversionsQueue = (() => {
  const name = 'conversions'

  return {
    name,
    queue: new Queue(name, { connection: ioRedis }),
    jobs: {
      createConversion: 'createConversion',
    },
  }
})()
