import { HomeContainer, IconItem, Item, Items, Title } from './styles'

import Imagem from '../../assets/Imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export default function Home() {
  return (
    <HomeContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '66px' }}>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o coffee Delivery você recebe seu café onde estiver,a qualquer
            hora
          </span>
        </Title>

        <Items>
          <div>
            <Item>
              <IconItem itemColor='yellow'>
                <ShoppingCart
                  weight='fill'
                  size={16}
                />
              </IconItem>
              <span>Compra simples e segura</span>
            </Item>
            <Item>
              <Timer
                weight='fill'
                size={16}
              />

              <span>Entrega rápida e rastreada</span>
            </Item>
          </div>
          <div>
            <Item>
              <Package
                weight='fill'
                size={16}
              />
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item>
              <Coffee
                weight='fill'
                size={16}
              />
              <span>Ocafé chega frequinho até você</span>
            </Item>
          </div>
        </Items>
      </div>
      <div>
        <img src={Imagem} />
      </div>
    </HomeContainer>
  )
}
