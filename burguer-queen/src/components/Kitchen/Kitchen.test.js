import React from 'react'
import { BrowserRouter, } from "react-router-dom"
import "@testing-library/jest-dom/extend-expect"
import { render, waitForElement } from '@testing-library/react'

import Kitchen from './Kitchen'

import { showTables2 } from '../../controllers'

test('test Function showTables2', async () => {
  const cb = (result) => {
    console.log(result)
  }
  let imagen = showTables2(cb)
  expect(typeof (imagen)).toEqual("function")

})

it("displays initial clients", async () => {
  const { getByTestId } = render(<BrowserRouter>  <Kitchen /> </BrowserRouter>)
  let todos = getByTestId("allOrders")
  expect(todos.children.length).toBe(0)
  await waitForElement(() => getByTestId('orden0'))
  todos = getByTestId("allOrders")
  expect(todos.children.length > 0).toBe(true)

})

