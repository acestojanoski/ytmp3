import { NewConversion } from './entities'
import { conversionsQueue } from './queues'
import { v4 as uuid } from 'uuid'

const createConversion = async (newConversion: NewConversion) => {
  const id = uuid()
  await conversionsQueue.queue.add(conversionsQueue.jobs.createConversion, { ...newConversion, id })

  return id
}

export const service = {
  createConversion,
}
