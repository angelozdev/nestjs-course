import { Product } from 'src/models/products/interfaces/product.interface'
import { User } from 'src/models/users/interfaces/user.interface'

export interface Order {
  id: number
  user: User
  products: Product[]
  created_at: Date | string
}
