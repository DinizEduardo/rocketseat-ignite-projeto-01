import request from 'supertest'
import { afterAll, beforeAll, describe, test } from 'vitest'
import { app } from '../src/app'

describe('Transactions Routes', () => {
  test('user can create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'Nova transação',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })
})

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})
