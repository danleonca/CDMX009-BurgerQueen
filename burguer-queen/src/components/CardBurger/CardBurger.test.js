import React from "react"
import {render, fireEvent, waitForElement, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CardBurger from "./CardBurger"

test("render the component ", () => {
  let { getByTestId } = render(<CardBurger />)
  let card = getByTestId("cardOrden")
  expect(card).toBeInTheDocument()
})

test("render the menu", async () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <CardBurger
        element="Hamburguesa Simple"
        options={["Carne de Res", "Carne de Pollo", "Vegetariana"]}/>
    </BrowserRouter>)
  let button = document.getElementById("dropdown-basic-button")
  fireEvent.click(button)
  await waitForElement(() => getByTestId("0"))
  expect(screen.getByText("Vegetariana")).toBeInTheDocument(true)
 
})