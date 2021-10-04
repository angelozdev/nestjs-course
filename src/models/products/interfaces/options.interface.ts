export interface Options {
  sort: Sort
  limit: number | string
}

export type Sort = 'desc' | 'asc'
