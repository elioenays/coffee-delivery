import Adress from '../Address'
import Payment from '../Payment'
import { OrderDetailsContainer, Title } from './styles'

export default function OrderDetails() {
  return (
    <OrderDetailsContainer>
      <Title>Complete seu pedido</Title>
      <Adress />
      <Payment />
    </OrderDetailsContainer>
  )
}
