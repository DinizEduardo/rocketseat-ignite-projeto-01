import { expect, test } from 'vitest'

test('o usuario consegue criar uma nova transação', () => {
  // fazer a chamada http para criar uma nova trnasação

  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
