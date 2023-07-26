import { coffees } from '../../../../utils/coffee/coffees'
import Coffee from '../Coffee'
import { CoffeeListContainer, List } from './styles'

export default function CoffeeList() {
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
            />
          )
        })}
      </List>
    </CoffeeListContainer>
  )
}
