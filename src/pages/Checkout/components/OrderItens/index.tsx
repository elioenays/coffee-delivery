import { Title } from '../../../../utils/styles/styles'
import CoffeeCard from '../CoffeeCard'
import { OrderItensContainer, OrderItensBox } from './styles'

export default function OrderItens() {
  return (
    <OrderItensContainer>
      <Title>Cafés selecionados</Title>

      <OrderItensBox>
        <CoffeeCard />
        <hr />
        <CoffeeCard />
        <hr />
      </OrderItensBox>
    </OrderItensContainer>
  )
}
