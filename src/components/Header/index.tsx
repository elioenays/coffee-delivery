import {
  ActionsContainer,
  Counter,
  HeaderContainer,
  LocationContainer,
} from './styles'

import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export default function Header() {
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
        <Counter>3</Counter>
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
