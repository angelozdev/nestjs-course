import { Injectable, NotFoundException } from '@nestjs/common'
import axios from 'axios'
import { IOptions } from './interfaces'
import { Product } from './interfaces/product.interface'

const axiosStoreInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  headers: { 'Content-Type': 'application/json' }
})

@Injectable()
export class ProductsService {
  async getAll(options: IOptions): Promise<Product[]> {
    try {
      const { data } = await axiosStoreInstance.get<Product[]>('/', {
        params: options
      })
      return data
    } catch (error) {
      return []
    }
  }

  async getByCategory(category: string, options: IOptions): Promise<Product[]> {
    try {
      const url = `/category/${category}`
      const { data } = await axiosStoreInstance.get<Product[]>(url, {
        params: options
      })

      return data
    } catch (error) {
      return []
    }
  }

  async getById(id: string) {
    const { data } = await axiosStoreInstance.get<Product>(`/${id}`)
    if (!data) throw new NotFoundException(`Product ${id} was not found`)

    return data
  }

  async create(product: Omit<Product, 'id' | 'rating'>) {
    try {
      const { data } = await axiosStoreInstance.post<Product>('/', product)
      return data
    } catch (error) {}
  }
}
