import { NewConversion } from './entities'
import { CONVERT_QUEUE, convertQueue } from './queues'

const initiateConversion = async (newConversion: NewConversion) => {
  await convertQueue.add(CONVERT_QUEUE, newConversion)
}

export const service = {
  initiateConversion,
}
