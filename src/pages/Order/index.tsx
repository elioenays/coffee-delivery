import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import image from './assets/Illustration.svg'
import {
  Icon,
  Local,
  OrderBox,
  OrderContainer,
  OrderInfo,
  OrderTitle,
  Payment,
  PaymentInfo,
  Time,
  TimeInfo,
} from './styles'
export default function Order() {
  return (
    <OrderContainer>
      <OrderTitle>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </OrderTitle>
      <OrderBox>
        <OrderInfo>
          <Local>
            <Icon variant='purple'>
              <MapPin
                size={16}
                weight='fill'
              />
            </Icon>
            <span>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
              Farrapos - Porto Alegre, RS
            </span>
          </Local>
          <Time>
            <Icon variant='yellow'>
              <Timer
                size={16}
                weight='fill'
              />
            </Icon>
            <TimeInfo>
              <span>Prevsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </TimeInfo>
          </Time>
          <Payment>
            <Icon variant='yellowDark'>
              <CurrencyDollar
                size={16}
                weight='fill'
              />
            </Icon>
            <PaymentInfo>
              <span>Pagamento na entrega</span>
              <span>Cartão de crédito</span>
            </PaymentInfo>
          </Payment>
        </OrderInfo>
        <div>
          <img
            src={image}
            alt=''
          />
        </div>
      </OrderBox>
    </OrderContainer>
  )
}
