import {
  HomeContainer,
  IconItem,
  Item,
  ItemContainer,
  Items,
  Title,
} from './styles'

import Imagem from '../../assets/Imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export default function Home() {
  return (
    <HomeContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '66px' }}>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </Title>

        <Items>
          <ItemContainer>
            <Item>
              <IconItem itemColor='yellowDark'>
                <ShoppingCart
                  weight='fill'
                  size={16}
                />
              </IconItem>
              <span>Compra simples e segura</span>
            </Item>
            <Item>
              <IconItem itemColor='yellow'>
                <Timer
                  weight='fill'
                  size={16}
                />
              </IconItem>

              <span>Entrega rápida e rastreada</span>
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              <IconItem itemColor='baseText'>
                <Package
                  weight='fill'
                  size={16}
                />
              </IconItem>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item>
              <IconItem itemColor='purple'>
                <Coffee
                  weight='fill'
                  size={16}
                />
              </IconItem>
              <span>Ocafé chega frequinho até você</span>
            </Item>
          </ItemContainer>
        </Items>
      </div>
      <div>
        <img src={Imagem} />
      </div>
    </HomeContainer>
  )
}
