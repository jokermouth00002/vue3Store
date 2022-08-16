/* eslint-disable space-before-function-paren */
interface Content { img: string; slogan: string; text: string }

export class CollectionItem {
  // title: Array<{ text: string; kind: string }>
  title: { text: string; kind: string }[]

  bedRoom: { items: string[]; contents: Content[] }

  furniture: { items: string[]; contents: Content[] }

  kitchen: { items: string[]; contents: Content[] }

  dining: { items: string[]; contents: Content[] }

  constructor() {
    // 新品', '臥室', '家具', '燈光', '用餐'
    this.title = [
      { text: 'BEDROOM', kind: 'bedRoom' },
      { text: 'FURNITURE', kind: 'furniture' },
      { text: 'KITCHEN', kind: 'kitchen' },
      { text: 'DINING', kind: 'dining' }]
    this.bedRoom = {
      items: [
        'BEDS',
        'BEDDING',
        'BOOKSHELEFS',
      ],
      contents: [
        {
          img: 'https://cdn.shopify.com/s/files/1/1087/6904/articles/SimpleCollection_Walnut_Room-2-A_1400x_157de91d-5e3d-4e27-9fa6-f720eb8a725d_600x.jpg?v=1643594044',
          slogan: 'Kalon',
          text: 'Sustainable, Eco-Friendly Furniture >>',
        },
        {
          img: '//cdn.shopify.com/s/files/1/1087/6904/articles/LAXseries_Platform_Bed_MASHstudios_600x.jpg?v=1508189573',
          slogan: 'LAXseries Bedroom Collection',
          text: 'Shop Now >>',
        },
      ],
    }

    this.furniture = {
      items: [
        'SOFAS',
        'CHAIRS',
      ],
      contents: [
        {
          img: '//cdn.shopify.com/s/files/1/1087/6904/articles/B4HTDkJ7wvQQfrezT_600x.jpg?v=1520805653',
          slogan: 'Stephen Kenn',
          text: 'Heirloom Furniture for Today >>',
        },
        {
          img: 'https://cdn.shopify.com/s/files/1/1087/6904/articles/web-ASPLUND_Kilt-Cabinet_08A_jpg_600x.jpg?v=1520802633',
          slogan: 'Get Organized',
          text: 'Explore Asplund Storage >>',
        },
      ],
    }

    this.kitchen = {
      items: [
        'COOKWARE',
        'KNIVES',
      ],
      contents: [
        {
          img: '//cdn.shopify.com/s/files/1/1087/6904/articles/web-lodge-pendant_in-situ_2_jpg_7e8a0b8e-53b7-4f59-b427-3051ef4d2389_600x.jpg?v=1508174015',
          slogan: 'Lighting by Workstead',
          text: 'Shop the Collection >>',
        },
        {
          img: '//cdn.shopify.com/s/files/1/1087/6904/articles/SM_CAT_LIGHTING_5893e154-0d09-4894-82b9-9c2d12b2b398_600x.jpg?v=1508173223',
          slogan: 'Serge Mouille',
          text: 'Handmade in France Since the 1950\'s >>',
        },
      ],
    }

    this.dining = {
      items: [
        'Dinnerware',
        'Drinkware',
      ],
      contents: [
        {
          img: '//cdn.shopify.com/s/files/1/1087/6904/articles/mud-australia-shop-bpshop-bp_600x.jpg?v=1520801506',
          slogan: 'Life of the Party',
          text: 'Dinnerware for Real Life >>',
        },
      ],
    }
  }
}
