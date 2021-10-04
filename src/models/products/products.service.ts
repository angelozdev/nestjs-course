import { Injectable, NotFoundException } from '@nestjs/common'
import axios from 'axios'
import { CreateProductDto } from './dto'
import { IOptions } from './interfaces'
import { Product } from './interfaces/product.interface'

const axiosStoreInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  headers: { 'Content-Type': 'application/json' }
})

@Injectable()
export class ProductsService {
  async getAll(options: IOptions): Promise<Product[]> {
    const { data } = await axiosStoreInstance.get<Product[]>('/', {
      params: options
    })
    return data
  }

  async getByCategory(category: string, options: IOptions): Promise<Product[]> {
    const url = `/category/${category}`
    const { data } = await axiosStoreInstance.get<Product[]>(url, {
      params: options
    })

    return data
  }

  async getById(id: number) {
    const { data } = await axiosStoreInstance.get<Product>(`/${id}`)
    if (!data) throw new NotFoundException(`Product ${id} was not found`)

    return data
  }

  async create(product: CreateProductDto) {
    const { data } = await axiosStoreInstance.post<Product>('/', product)
    return data
  }

  async update(id: number, product: Partial<CreateProductDto>) {
    const { data: foundProduct } = await axiosStoreInstance.get<Product>(
      `/${id}`
    )
    if (!foundProduct)
      throw new NotFoundException(`Product ${id} was not found`)

    const newProduct = { ...foundProduct, ...product }

    const { data: updatedProduct } = await axiosStoreInstance.put<Product>(
      `/${id}`,
      newProduct
    )
    return updatedProduct
  }
}
