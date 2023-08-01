import { useContext } from 'react'
import { Title } from '../../../../utils/styles/styles'
import CoffeeCard from '../CoffeeCard'
import TotalItens from '../TotalItens'
import { OrderItensContainer, OrderItensBox, ConfirmOrder } from './styles'
import { CartContext } from '../../../../contexts/CartContext'

export default function OrderItens() {
  const { itensInCart } = useContext(CartContext)

  return (
    <OrderItensContainer>
      <Title>Cafés selecionados</Title>

      <OrderItensBox>
        {itensInCart.map((item) => (
          <>
            <CoffeeCard
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
            />
            <hr />
          </>
        ))}

        <TotalItens />
        <ConfirmOrder>CONFIRMAR PEDIDO</ConfirmOrder>
      </OrderItensBox>
    </OrderItensContainer>
  )
}
