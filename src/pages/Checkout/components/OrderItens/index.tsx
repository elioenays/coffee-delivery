import { useContext } from 'react'
import { Title } from '../../../../utils/styles/styles'
import CoffeeCard from '../CoffeeCard'
import TotalItens from '../TotalItens'
import {
  OrderItensContainer,
  OrderItensBox,
  ConfirmOrder,
  CofeeContainer,
} from './styles'
import { CartContext } from '../../../../contexts/CartContext'

export default function OrderItens() {
  const { itensInCart } = useContext(CartContext)

  return (
    <OrderItensContainer>
      <Title>Cafés selecionados</Title>

      <OrderItensBox>
        {itensInCart.map((item) => (
          <CofeeContainer key={item.id.toString()}>
            <CoffeeCard
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
            <hr />
          </CofeeContainer>
        ))}

        <TotalItens />
        <ConfirmOrder>CONFIRMAR PEDIDO</ConfirmOrder>
      </OrderItensBox>
    </OrderItensContainer>
  )
}
