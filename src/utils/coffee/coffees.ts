export enum Tag {
  TRADICIONAL = 'TRADICIONAL',
  ESPECIAL = 'ESPECIAL',
  COMLEITE = 'COM LEITE',
  ALCOOLICO = 'ALCOÓLICO',
  QUENTE = 'QUENTE',
  GELADO = 'GELADO',
}

export interface CoffeeProps {
  id: number
  name: string
  tags: Tag[]
  imageUrl: string
  description: string
  price: number
  quantity: number
}

import Expresso from './assets/Expresso.svg'
import Americano from './assets/Americano.svg'
import Cremoso from './assets/ExpressoCremoso.svg'
import Gelado from './assets/CafeGelado.svg'
import Latte from './assets/Latte.svg'
import Capuccino from './assets/Capuccino.svg'
import Macchiato from './assets/Macchiato.svg'
import CafeComLeite from './assets/CafecomLeite.svg'
import Mochaccino from './assets/Mochaccino.svg'
import ChocolateQuente from './assets/ChocolateQuente.svg'
import Cubano from './assets/Cubano.svg'
import Havaiano from './assets/Havaiano.svg'
import Arabe from './assets/Arabe.svg'
import Irlandes from './assets/Irlandes.svg'

export const coffees: CoffeeProps[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: [Tag.TRADICIONAL],
    imageUrl: Expresso,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: [Tag.TRADICIONAL],
    imageUrl: Americano,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: [Tag.TRADICIONAL],
    imageUrl: Cremoso,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: [Tag.TRADICIONAL, Tag.GELADO],
    imageUrl: Gelado,
    quantity: 1,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: [Tag.TRADICIONAL, Tag.COMLEITE],
    imageUrl: CafeComLeite,
    quantity: 1,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: [Tag.TRADICIONAL, Tag.COMLEITE],
    imageUrl: Latte,
    quantity: 1,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: [Tag.TRADICIONAL, Tag.COMLEITE],
    imageUrl: Capuccino,
    quantity: 1,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: [Tag.TRADICIONAL, Tag.COMLEITE],
    imageUrl: Macchiato,
    quantity: 1,
  },
  {
    id: 9,
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: [Tag.TRADICIONAL, Tag.COMLEITE],
    imageUrl: Mochaccino,
    quantity: 1,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: [Tag.ESPECIAL, Tag.COMLEITE],
    imageUrl: ChocolateQuente,
    quantity: 1,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: [Tag.ESPECIAL, Tag.ALCOOLICO, Tag.GELADO],
    imageUrl: Cubano,
    quantity: 1,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: [Tag.ESPECIAL],
    imageUrl: Havaiano,
    quantity: 1,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: [Tag.ESPECIAL],
    imageUrl: Arabe,
    quantity: 1,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: [Tag.ESPECIAL, Tag.ALCOOLICO],
    imageUrl: Irlandes,
    quantity: 1,
  },
]
