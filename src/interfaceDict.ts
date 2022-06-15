interface OriginOption {
  category: string
  details: string[]
  title: string
}
interface addedStatusOption {
  category: string
  title: string
  details: { text: string; status: boolean }[]
}
interface ProductInfo {
  imgSource: string[]
  productName: string
  productPrice: number
  category: string
  type: string
  quickShip: boolean
  styleOptions: { title?: string; details?: { text: string; id: string }[] }[]
}

export { OriginOption, addedStatusOption, ProductInfo }
