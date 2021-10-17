import { HttpService } from '@nestjs/axios'
import { Injectable, NotFoundException } from '@nestjs/common'
import { AxiosResponse } from 'axios'
import { Observable } from 'rxjs'
import { CreateProductDto } from './dto'
import { IOptions } from './interfaces'
import { Product } from './interfaces/product.interface'

const BASE_URL = 'https://fakestoreapi.com/products'

@Injectable()
export class ProductsService {
  constructor(private httpService: HttpService) {}
  getAll(options: IOptions): Observable<AxiosResponse<Product[]>> {
    const url = BASE_URL + '/'
    return this.httpService.get(url, { params: options })
  }

  getByCategory(
    category: string,
    options: IOptions
  ): Observable<AxiosResponse<Product[]>> {
    const url = BASE_URL + `/category/${category}`
    return this.httpService.get(url, { params: options })
  }

  getById(id: number): Observable<AxiosResponse<Product>> {
    const url = BASE_URL + `/${id}`
    return this.httpService.get(url)
    // const { data } = await axiosStoreInstance.get<Product>(`/${id}`)
    // if (!data) throw new NotFoundException(`Product ${id} was not found`)

    // return data
  }

  // async create(product: CreateProductDto) {
  //   const { data } = await axiosStoreInstance.post<Product>('/', product)
  //   return data
  // }

  // async update(id: number, product: Partial<CreateProductDto>) {
  //   const { data: foundProduct } = await axiosStoreInstance.get<Product>(
  //     `/${id}`
  //   )
  //   if (!foundProduct)
  //     throw new NotFoundException(`Product ${id} was not found`)

  //   const newProduct = { ...foundProduct, ...product }

  //   const { data: updatedProduct } = await axiosStoreInstance.put<Product>(
  //     `/${id}`,
  //     newProduct
  //   )
  //   return updatedProduct
  // }
}
