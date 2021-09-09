import { Injectable } from '@nestjs/common'
import axios from 'axios'
import { Product } from 'src/entities/product.entity'

const axiosStoreInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: { 'Content-Type': 'application/json' }
})

@Injectable()
export class ProductService {
  async getAll(): Promise<Product[]> {
    try {
      const { data } = await axiosStoreInstance.get<Product[]>('/products')
      return data
    } catch (error) {
      return []
    }
  }

  async getById(id: string) {
    try {
      const { data } = await axiosStoreInstance.get<Product>(`/products/${id}`)
      if (!data) throw new Error('Not found')
      return data
    } catch (error) {}
  }
}
