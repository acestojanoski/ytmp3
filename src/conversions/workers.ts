import { Worker } from 'bullmq'
import { conversionsQueue } from './queues'
import { ioRedis } from '@/common/redis/connection'

export const conversionsWorker = new Worker(
  conversionsQueue.name,
  async (job) => {
    if (job.name === conversionsQueue.jobs.createConversion) {
      console.log('I got the job.')
    }

    console.log('Unknown job.')
  },
  { connection: ioRedis },
)
