//react-hooks/exhaustive-deps
import React from "react"
import { Container } from "react-bootstrap"
import { withRouter } from 'react-router-dom'

import Meals from "../Meals/Meals"
import Ready from "../Ready/Ready"
import LogOut from "../LogOut/LogOut"
import ButtonReturn from "../ButtonReturn/ButtonReturn"

import { showTables2, edit, userLog } from "../../controllers"

import "./kitchen.css"

const Kitchen = ({ history }) => {
  const [table, setTable] = React.useState([])
  React.useEffect(() => {
    const checkUser = () => {
      if (userLog()) {
        return userLog
      } else {
        history.push('/')
      }
    }
    checkUser()

    const cb = (result) => {
      setTable(result)
    }

    const unsubscribe = showTables2(cb)
    return () => {
      unsubscribe()
    }

  }, [history])

  const changeState = async (item) => {
    try {
      const resul = await edit(item.id, "Preparando")
      return resul
    } catch (error) {
      return error
    }
  }

  return (
    <Container>

      <div className="btnFix">
        <LogOut />
        <ButtonReturn ruta="/roles" btnStyles="btn return" text="Regresar" />
      </div>

      <h1 className="text-white mt-5"> Ordenes por preparar </h1>
      <div id="cardOrders" data-testid="allOrders">
        {table.map((item, index) => (
          <div id="oneOrder" data-testid={"orden" + index} key={item.id}>
            {item.status === "En cocina" && (
              <Meals
                date={item.date}
                client={item.client}
                number={item.number}
                status={item.status}
                // eslint-disable-next-line react-hooks/exhaustive-deps
                ids={item.id} />
            )}

            {item.status === "En cocina" && (
              <button
                className="btn kitchenButtons inKitchen"
                onClick={() => changeState(item)}>
                Preparar
              </button>
            )}
  
            {item.status === "Preparando" && (
              <Meals
                date={item.date}
                client={item.client}
                number={item.number}
                status={item.status}
                ids={item.id} />
            )}

            {
              item.status === "Preparando" && <Ready numbers={item} />
            }

          </div>
        ))}
      </div>
    </Container>
  )
}

export default withRouter(Kitchen)