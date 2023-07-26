import { MapPinLine } from '@phosphor-icons/react'
import {
  AddressHeader,
  AddressBox,
  AddressContainer,
  CityInfo,
  FormContainer,
  NumberAndComplement,
  UF,
} from './styles'

export default function Adress() {
  return (
    <AddressContainer>
      <AddressBox>
        <MapPinLine size={22} />
        <AddressHeader>
          <span>Enderço de Entrega</span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </AddressHeader>
      </AddressBox>
      <FormContainer>
        <input
          type='text'
          placeholder='CEP'
        />
        <input
          type='text'
          placeholder='Rua'
        />
        <NumberAndComplement>
          <input
            type='text'
            placeholder='Número'
          />
          <input
            type='text'
            placeholder='Complemento'
          />
        </NumberAndComplement>
        <CityInfo>
          <input
            type='text'
            placeholder='Bairro'
          />
          <input
            type='text'
            placeholder='Cidade'
          />
          <UF
            type='text'
            placeholder='UF'
          />
        </CityInfo>
      </FormContainer>
    </AddressContainer>
  )
}
