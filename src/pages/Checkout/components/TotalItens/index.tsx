import { useContext } from 'react'
import { TotalItensContainer } from './styles'
import { CartContext } from '../../../../contexts/CartContext'
import { priceFormatter } from '../../../../utils/formatter'

export default function TotalItens() {
  const { itensInCart } = useContext(CartContext)

  const { delivery, total, totalOfItens } = itensInCart.reduce(
    (acc, item) => {
      acc.totalOfItens += item.price * item.quantity
      acc.total += item.price * item.quantity
      acc.total += 3.5

      return acc
    },
    {
      totalOfItens: 0,
      delivery: 3.5,
      total: 0,
    },
  )

  return (
    <TotalItensContainer>
      <div>
        <span>Total de itens</span>
        <span>{priceFormatter.format(totalOfItens)}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>{priceFormatter.format(delivery)}</span>
      </div>
      <div>
        <span>Total</span>
        <span>{priceFormatter.format(total)}</span>
      </div>
    </TotalItensContainer>
  )
}
