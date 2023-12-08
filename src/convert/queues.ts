import { ioRedis } from '@/common/redis/connection'
import { Queue } from 'bullmq'

export const CONVERT_QUEUE = 'convert'

export const convertQueue = new Queue(CONVERT_QUEUE, { connection: ioRedis })
