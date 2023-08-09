import { ReactNode, createContext, useState } from 'react'
import { CoffeeProps } from '../utils/coffee/coffees'

interface CartContextType {
  addItensInCart: (coffee: CoffeeProps) => void
  removeItemFromCart: (id: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  itensInCart: CoffeeProps[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [itensInCart, setItemsInCart] = useState<CoffeeProps[]>([])

  function addItensInCart(coffee: CoffeeProps) {
    setItemsInCart((state) => [coffee, ...state])
  }

  function removeItemFromCart(id: number) {
    const itemIndex = itensInCart.findIndex((item) => item.id === id)

    itensInCart.splice(itemIndex, 1)

    setItemsInCart((state) => [...state])
  }

  function increaseQuantity(id: number) {
    const coffee = itensInCart.map((item) => {
      if (item.id === id) {
        // const newQuantity = 0
        return { ...item, quantity: (item.quantity += 1) }
      }

      return item
    })

    setItemsInCart(coffee)
  }

  function decreaseQuantity(id: number) {
    const coffee = itensInCart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity -= 1) }
      }

      return item
    })

    setItemsInCart(coffee)
  }

  return (
    <CartContext.Provider
      value={{
        itensInCart,
        addItensInCart,
        removeItemFromCart,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
