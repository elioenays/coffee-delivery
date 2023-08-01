import { ReactNode, createContext, useState } from 'react'
import { CoffeeProps } from '../utils/coffee/coffees'

interface CartContextType {
  addItensInCart: (coffee: CoffeeProps) => void
  itensInCart: CoffeeProps[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [itemsInCart, setItemsInCart] = useState<CoffeeProps[]>([])

  function addItensInCart(coffee: CoffeeProps) {
    setItemsInCart((state) => [...state, coffee])
  }

  return (
    <CartContext.Provider value={{ itensInCart: itemsInCart, addItensInCart }}>
      {children}
    </CartContext.Provider>
  )
}
