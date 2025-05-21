interface SortType {
  direction: string
  nullHandling: string
  ascending: boolean
  property: string
  ignoreCase: boolean
}

interface PageableType {
  pageNumber: number
  pageSize: number
  paged: boolean
  unpaged: boolean
  sort: SortType[]
  offset: number
}

interface ResponseType<TData> {
  totalPages: number
  totalElements: number
  pageable: PageableType
  first: boolean
  last: boolean
  numberOfElements: number
  sort: SortType[]
  number: number
  content: TData[]
  size: number
  empty: boolean
}

type QueryParamsType = {
  page: number
  size: number
  sort: SortType[]
}

export type { SortType, PageableType, ResponseType, QueryParamsType }
