import { v4 as uuidV4 } from 'uuid'

interface RequestHeaders {
  'x-correlation-id': string
  authorization: string
}

const createRequestHeaders = (token: string | null): RequestHeaders => {
  return {
    'x-correlation-id': uuidV4(),
    authorization: `Bearer ${token}`,
  }
}

export { createRequestHeaders }
