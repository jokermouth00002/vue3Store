interface Category {
  title: string
  detail: string[]
}
const categoryData: Category[] = [
  {
    title: 'Quick Ship',
    detail: ['Usually Ships 3 Weeks or Less'],
  },
  {
    title: 'Type',
    detail: [
      'Bedding',
      'Beds',
      'Bookshelves',
    ],
  },
  {
    title: 'Price',
    detail: [
      '$50 to $100',
      '$100 to $250',
      '$250 to $500',
      '$500 to $1000',
      'More then $1000',
    ],
  },
]

interface ProductInfo {
  imgSource: string
  productName: string
  productPrice: number
  type: string
  quickShip: boolean
}
const productData: ProductInfo[] = [
  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/82767314228f0fd9305c05e01a0b9fdd_large.jpg?v=1571438954',
    productName: 'Perch Bunk Bed',
    productPrice: 1980,
    type: 'Beds',
    quickShip: false,
  },
  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2021-11-17at11.25.58AM_large.png?v=1637167062',
    productName: 'Simple Linen Bedding - Queen Size',
    productPrice: 98,
    type: 'Bedding',
    quickShip: true,
  },
  {
    imgSource: 'https://cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_large.jpg?v=1571439053',
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    type: 'Beds',
    quickShip: true,
  },
  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2021-11-17at11.25.58AM_large.png?v=1637167062',
    productName: 'Simple Linen Bedding - Queen Size',
    productPrice: 98,
    type: 'Bedding',
    quickShip: true,
  },
  {
    imgSource: 'https://cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_large.jpg?v=1571439053',
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    type: 'Beds',
    quickShip: true,
  },
  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2021-11-17at11.25.58AM_large.png?v=1637167062',
    productName: 'Simple Linen Bedding - Queen Size',
    productPrice: 98,
    type: 'Bedding',
    quickShip: true,
  },
  {
    imgSource: 'https://cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_large.jpg?v=1571439053',
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    type: 'Beds',
    quickShip: true,
  },
  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2021-11-17at11.25.58AM_large.png?v=1637167062',
    productName: 'Simple Linen Bedding - Queen Size',
    productPrice: 98,
    type: 'Bedding',
    quickShip: true,
  },
  {
    imgSource: 'https://cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_large.jpg?v=1571439053',
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    type: 'Beds',
    quickShip: true,
  },
  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2021-11-17at11.25.58AM_large.png?v=1637167062',
    productName: 'Simple Linen Bedding - Queen Size',
    productPrice: 98,
    type: 'Bedding',
    quickShip: true,
  },
  {
    imgSource: 'https://cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_large.jpg?v=1571439053',
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    type: 'Beds',
    quickShip: true,
  },
  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2021-11-17at11.25.58AM_large.png?v=1637167062',
    productName: 'Simple Linen Bedding - Queen Size',
    productPrice: 98,
    type: 'Bedding',
    quickShip: true,
  },
  {
    imgSource: 'https://cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_large.jpg?v=1571439053',
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    type: 'Beds',
    quickShip: true,
  },
  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2021-11-17at11.25.58AM_large.png?v=1637167062',
    productName: 'Simple Linen Bedding - Queen Size',
    productPrice: 98,
    type: 'Bedding',
    quickShip: true,
  },
  {
    imgSource: 'https://cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_large.jpg?v=1571439053',
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    type: 'Beds',
    quickShip: true,
  },
  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2021-11-17at11.25.58AM_large.png?v=1637167062',
    productName: 'Simple Linen Bedding - Queen Size',
    productPrice: 98,
    type: 'Bedding',
    quickShip: true,
  },
  {
    imgSource: 'https://cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_large.jpg?v=1571439053',
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    type: 'Beds',
    quickShip: true,
  },

  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2021-11-17at11.25.58AM_large.png?v=1637167062',
    productName: 'Simple Linen Bedding - Queen Size',
    productPrice: 98,
    type: 'Bedding',
    quickShip: true,
  },
  {
    imgSource: 'https://cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_large.jpg?v=1571439053',
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    type: 'Beds',
    quickShip: true,
  },
  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2021-11-17at11.25.58AM_large.png?v=1637167062',
    productName: 'Simple Linen Bedding - Queen Size',
    productPrice: 98,
    type: 'Bedding',
    quickShip: true,
  },
  {
    imgSource: 'https://cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_large.jpg?v=1571439053',
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    type: 'Beds',
    quickShip: true,
  },
  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2021-11-17at11.25.58AM_large.png?v=1637167062',
    productName: 'Simple Linen Bedding - Queen Size',
    productPrice: 98,
    type: 'Bedding',
    quickShip: true,
  },
  {
    imgSource: 'https://cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_large.jpg?v=1571439053',
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    type: 'Beds',
    quickShip: true,
  },
  {
    imgSource: '//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2021-11-17at11.25.58AM_large.png?v=1637167062',
    productName: 'Simple Linen Bedding - Queen Size',
    productPrice: 98,
    type: 'Bedding',
    quickShip: true,
  },
  {
    imgSource: 'https://cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_large.jpg?v=1571439053',
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    type: 'Beds',
    quickShip: true,
  },

]
export {
  categoryData,
  productData,
}
