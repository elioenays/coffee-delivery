import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import {
  PaymentContainer,
  PaymentHeader,
  PaymentBox,
  PaymentOptions,
} from './styles'

export default function Payment() {
  return (
    <PaymentContainer>
      <PaymentBox>
        <CurrencyDollar size={22} />
        <PaymentHeader>
          <span>Pagamento</span>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </PaymentHeader>
      </PaymentBox>
      <PaymentOptions>
        <button>
          <CreditCard size={16} />
          <span>CARTÃO DE CRÉDITO</span>
        </button>
        <button>
          <Bank size={16} />
          <span>CARTÃO DE DÉBITO</span>
        </button>
        <button>
          <Money size={16} />
          <span>DINHEIRO</span>
        </button>
      </PaymentOptions>
    </PaymentContainer>
  )
}
