import { Title } from '../../../../utils/styles/styles'
import CoffeeCard from '../CoffeeCard'
import TotalItens from '../TotalItens'
import { OrderItensContainer, OrderItensBox, ConfirmOrder } from './styles'

export default function OrderItens() {
  return (
    <OrderItensContainer>
      <Title>Cafés selecionados</Title>

      <OrderItensBox>
        <CoffeeCard />
        <hr />
        <CoffeeCard />
        <hr />
        <TotalItens />
        <ConfirmOrder>CONFIRMAR PEDIDO</ConfirmOrder>
      </OrderItensBox>
    </OrderItensContainer>
  )
}
