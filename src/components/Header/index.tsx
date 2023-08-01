import {
  ActionsContainer,
  Counter,
  HeaderContainer,
  LocationContainer,
} from './styles'

import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export default function Header() {
  const { itensInCart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <img src={logo} />
      <ActionsContainer>
        <LocationContainer>
          <MapPin
            size={22}
            weight='fill'
          />
          Palmas, TO
        </LocationContainer>
        {itensInCart.length ? (
          <Counter>{itensInCart.length}</Counter>
        ) : undefined}

        <nav>
          <NavLink to='/checkout'>
            <ShoppingCart
              size={22}
              weight='fill'
            />
          </NavLink>
        </nav>
      </ActionsContainer>
    </HeaderContainer>
  )
}
