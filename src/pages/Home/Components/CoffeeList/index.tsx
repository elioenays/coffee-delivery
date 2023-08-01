import { useContext } from 'react'
import { CoffeeProps, coffees } from '../../../../utils/coffee/coffees'
import Coffee from '../Coffee'
import { CoffeeListContainer, List } from './styles'
import { CartContext } from '../../../../contexts/CartContext'

export default function CoffeeList() {
  const { addItensInCart } = useContext(CartContext)

  function handleAddItensInCart(coffee: CoffeeProps) {
    addItensInCart(coffee)
  }

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <List>
        {coffees.map((coffee) => {
          return (
            <Coffee
              description={coffee.description}
              imageUrl={coffee.imageUrl}
              name={coffee.name}
              price={coffee.price}
              tags={coffee.tags}
              key={coffee.id}
              handleAddItenToCart={() => {
                handleAddItensInCart(coffee)
              }}
            />
          )
        })}
      </List>
    </CoffeeListContainer>
  )
}
