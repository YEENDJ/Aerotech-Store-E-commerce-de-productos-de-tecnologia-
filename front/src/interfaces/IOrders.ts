import { IProducts } from './Iproducts'

export interface Order {
  id: number
  products: IProducts[]
  date: string
  status: string
}
