import Coffee from '../Coffee'
import { CoffeeListContainer, List } from './styles'

export default function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <List>
        <Coffee />
        <Coffee />
      </List>
    </CoffeeListContainer>
  )
}
