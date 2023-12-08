import { Worker } from 'bullmq'
import { CONVERT_QUEUE } from './queues'
import { ioRedis } from '@/common/redis/connection'

export const convertWorker = new Worker(
  CONVERT_QUEUE,
  async (job) => {
    console.log('Got the job.')
  },
  { connection: ioRedis },
)
