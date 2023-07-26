import OrderDetails from './components/OrderDetails'
import OrderItens from './components/OrderItens'
import { CheckoutContainer } from './styles'

export default function Checkout() {
  return (
    <CheckoutContainer>
      <OrderDetails />
      <OrderItens />
    </CheckoutContainer>
  )
}
