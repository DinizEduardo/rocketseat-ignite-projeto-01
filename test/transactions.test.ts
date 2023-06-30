import request from 'supertest'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'
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

  test('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'Nova transação',
        amount: 5000,
        type: 'credit',
      })

    const cookies = createTransactionResponse.get('Set-Cookie')

    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'Nova transação',
        amount: 5000,
      }),
    ])
  })
})

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})
