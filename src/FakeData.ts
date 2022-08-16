/* eslint-disable @typescript-eslint/indent */
// interface Option {
//   title: string
//   details: string[]
//   category: string
// }
import type { ProductInfo } from '~/interfaceDict'
const quickShipOption = {
  title: 'Quick Ship',
  details: ['Usually Ships 3 Weeks or Less'],
  category: 'all',
}

const bedRoomPriceOption = {
  title: 'Price',
  details: [
    '$50 to $100',
    '$100 to $250',
    '$250 to $500',
    '$500 to $1000',
    'More then $1000',
  ],
  category: 'bedRoom',
}
const furniturePriceOption = {
  title: 'Price',
  details: [
    '$500 to $1000',
    'More then $1000',
  ],
  category: 'furniture',
}
const diningPriceOption = {
  title: 'Price',
  details: [
    '$100 to $250',
    '$250 to $500',
  ],
  category: 'dining',
}
const kitchenPriceOption = {
  title: 'Price',
  details: [
    '$100 to $250',
    '$250 to $500',
  ],
  category: 'kitchen',
}
const sortOption = {
  title: 'Sort by',
  details: [
    'Name: A - Z',
    'Name: Z - A',
    'Price: Low to High',
    'Price: High to Low',
  ],
  category: 'all',
}
const bedRoomType = {
  title: 'Type',
  details: [
    'Bedding',
    'Bookshelves',
    'Beds',
  ],
  category: 'bedRoom',
}
const furnitureType = {
  title: 'Type',
  details: [
    '3 Seater Sofa',
    '4 Seater Sofa',
    'Bar Cart',
  ],
  category: 'furniture',
}

const lightingType = {
  title: 'Type',
  details: [
    'lighting ',
    'Artek',
    'Andrew Neyer',
  ],
  category: 'lighting',
}
const diningType = {
  title: 'Type',
  details: [
    'By Lassen',
    'Cane Line',
    'Bottega Del Vino Crystal',
  ],
  category: 'dining',
}
const kitchenType = {
  title: 'Type',
  details: [
    'Boning',
    'Braiser',
  ],
  category: 'kitchen',
}

const productsData: ProductInfo[] = [
  {
    imgSource: ['https://cdn.shopify.com/s/files/1/1087/6904/products/57_38ba5d25-6134-459b-b059-0ccd4db39435_1400x.jpeg?v=1571439105'],
    productName: 'Simple Linen Quilt',
    productPrice: 450,
    category: 'bedRoom',
    type: 'Bedding',
    quickShip: true,
    styleOptions: [],
  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/525d45aab11cd64b7410f854f9184381_3c8a436c-5443-409f-8d05-7f296eac8771_1400x.jpg?v=1571438992'],
    productName: 'Spun Organic Quilt',
    productPrice: 85,
    category: 'bedRoom',
    type: 'Bedding',
    quickShip: true,
    styleOptions: [],
  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/565326c9c75218604e32da380cdbcc75_1400x.jpg?v=1571438992'],
    productName: 'Spun Organic Fitted Crib Sheet',
    productPrice: 55,
    category: 'bedRoom',
    type: 'Bedding',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/4dc380a60131260945ce4f656e44e525_2f255ccf-3ea1-423a-bef0-100f67b65b00_1400x.jpg?v=1571438992'],
    productName: 'Join Organic Quilt',
    productPrice: 85,
    category: 'bedRoom',
    type: 'Bedding',
    quickShip: true,
    styleOptions: [],
  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/6f790e43553eb0d4b28ba32cc7290804_1400x.jpg?v=1592491461'],
    productName: 'Join Organic Fitted Crib Sheet',
    productPrice: 55,
    category: 'bedRoom',
    type: 'Bedding',
    quickShip: true,
    styleOptions: [],
  },
  {
    imgSource: ['https://cdn.shopify.com/s/files/1/1087/6904/products/Bed_cover_-_OBS_skal_duplikeres_1400x.jpg?v=1586681732'],
    productName: 'Daze Bedspread',
    productPrice: 275,
    category: 'bedRoom',
    type: 'Bedding',
    quickShip: false,
    styleOptions: [],
  },
  // Bedroom-here
  {
    imgSource: ['https://cdn.shopify.com/s/files/1/1087/6904/products/82767314228f0fd9305c05e01a0b9fdd_1400x.jpg?v=1571438954'],
    productName: 'Perch Bunk Bed',
    productPrice: 1980,
    category: 'bedRoom',
    type: 'Beds',
    quickShip: false,
    styleOptions: [],
  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/2f800d23b699f88d57aceac678b02193_1400x.jpg?v=1571438954'],
    productName: 'River Twin Bed',
    productPrice: 950,
    category: 'bedRoom',
    type: 'Beds',
    quickShip: false,
    styleOptions: [],
  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/web-perch-lower-bed-001_jpg_1400x.jpg?v=1571439053'],
    productName: 'Perch Twin Lower Bed - White',
    productPrice: 450,
    category: 'bedRoom',
    type: 'Beds',
    quickShip: true,
    styleOptions: [],
  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/fc8075a494d94b8ea46adb556ab2486e_1400x.jpg?v=1571438954'],
    productName: 'Perch Toddler Bed',
    productPrice: 560,
    category: 'bedRoom',
    type: 'Beds',
    quickShip: true,
    styleOptions: [],
  },
  {
    imgSource: ['https://cdn.shopify.com/s/files/1/1087/6904/products/Perch_Trundle_Twin_Bed_1_1400x.jpg?v=1571439053'],
    productName: 'Perch Trundle Twin Bed',
    productPrice: 540,
    category: 'bedRoom',
    type: 'Beds',
    quickShip: true,
    styleOptions: [],
  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/trundlemattressperspective-cropped_800x800_b85d50dd-71f5-46d5-a3d6-fd32bd384b06_1400x.jpg?v=1625855476'],
    productName: 'Universal Trundle Mattress',
    productPrice: 320,
    category: 'bedRoom',
    type: 'Beds',
    quickShip: true,
    styleOptions: [],
  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/110259210_1_1400x.jpg?v=1587145106'],
    productName: 'Kona Bed',
    productPrice: 1625,
    category: 'bedRoom',
    type: 'Beds',
    quickShip: false,
    styleOptions: [],
  },
  {
    imgSource: ['https://cdn.shopify.com/s/files/1/1087/6904/products/river_1400x.jpg?v=1571438954'],
    productName: 'River Trundle Bed',
    productPrice: 320,
    category: 'bedRoom',
    type: 'Beds',
    quickShip: true,
    styleOptions: [],
  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/6f2778c007de59f6c700efee2fcc8dae_1400x.jpg?v=1571438954'],
    productName: 'Rhea Toddler Bed Conversion Kit',
    productPrice: 195,
    category: 'bedRoom',
    type: 'Beds',
    quickShip: true,
    styleOptions: [],

  },
  // Bedroom-here

  {
    imgSource: ['https://cdn.shopify.com/s/files/1/1087/6904/products/83fa05ceb61f887a7e5731c2cd61f181_1400x.jpg?v=1571438954', 'https://cdn.shopify.com/s/files/1/1087/6904/products/ad6472ed3868138c703f3651a400e80d_1400x.jpg?v=1571438954'],
    productName: 'Mini Library',
    productPrice: 780,
    category: 'bedRoom',
    type: 'Bookshelves',
    quickShip: false,
    styleOptions: [{ title: 'color', details: [{ text: 'WHITE', id: '0' }, { text: 'BLACK', id: '1' }] }, { title: 'size', details: [{ text: 'KING', id: '9' }, { text: 'QUEEZ', id: '8' }] }],

  },
  {
    imgSource: ['https://cdn.shopify.com/s/files/1/1087/6904/products/36ece0aae222d5b53cf18494165073b3_1400x.jpg?v=1571438954'],
    productName: 'Perch Bunk Bed Shelf',
    productPrice: 295,
    category: 'bedRoom',
    type: 'Bookshelves',
    quickShip: true,
    styleOptions: [],

  },
  // Furniture-here

  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/5b9c7216ae522d9c28f1b96c6ce9c42c_large.jpg?v=1571438966'],
    productName: 'Military Canvas Sofa - Canvas & Marbled Brown Finish',
    productPrice: 9000,
    category: 'furniture',
    type: '3 Seater Sofa',
    quickShip: false,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/KIT-3026S-YCR-HOME15_large.jpg?v=1637075956'],
    productName: 'Caroline 3-Seater Sofa',
    productPrice: 3061,
    category: 'furniture',
    type: '3 Seater Sofa',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/45003d8574ec735bda505e2eccf3023a_large.jpg?v=1571439022'],
    productName: 'Moments 3 Seater Sofa',
    productPrice: 6495,
    category: 'furniture',
    type: '3 Seater Sofa',
    quickShip: true,
    styleOptions: [],

  },
  // Furniture-here
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/73ef082aa91781232718d8c381fe6307_large.jpg?v=1623941977'],
    productName: 'Sum Modular Sofa 3 seater- Aluminum Synergy',
    productPrice: 6929,
    category: 'furniture',
    type: '4 Seater Sofa',
    quickShip: false,
    styleOptions: [],

  },
  // Furniture-here
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/4164_BlackCherry-01_large.png?v=1649892200'],
    productName: 'Luxembourg Bar Cart Wheels',
    productPrice: 1307,
    category: 'furniture',
    type: 'Bar Cart',
    quickShip: false,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/9a055ca5b336c3d726b461b8bb84610e_large.jpg?v=1632371117'],
    productName: 'Roll Trolley',
    productPrice: 780,
    category: 'furniture',
    type: 'Bar Cart',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2020-04-26at3.10.37PM_large.png?v=1587928582'],
    productName: 'Roll Bar Trolley With Teak',
    productPrice: 1615,
    category: 'furniture',
    type: 'Bar Cart',
    quickShip: false,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/4027A_large.jpg?v=1634683866'],
    productName: 'Carlo Rattan Bar Cart',
    productPrice: 825,
    category: 'furniture',
    type: 'Bar Cart',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/2601-1000ExitTrolleyBlack3.4_Side_large.jpg?v=1587764668'],
    productName: 'Exit Trolley',
    productPrice: 800,
    category: 'furniture',
    type: 'Bar Cart',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/378_large.jpg?v=1571439090'],
    productName: 'Rapson Bar Cart',
    productPrice: 1295,
    category: 'furniture',
    type: 'Bar Cart',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/80a04cc1ebda68bc0033fc69978ee487_large.jpg?v=1571438891'],
    productName: 'Tea Trolley 901',
    productPrice: 3365,
    category: 'furniture',
    type: 'Bar Cart',
    quickShip: false,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/SD-E427-NU_large.jpg?v=1635450270'],
    productName: 'Carlo Rattan Bar Cart - Exterior',
    productPrice: 1375,
    category: 'furniture',
    type: 'Bar Cart',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/sika-design-4025A-romeo-trolley-antique__89979.1553282815_large.jpg?v=1593369093'],
    productName: 'Romeo Trolley',
    productPrice: 748,
    category: 'furniture',
    type: 'Bar Cart',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/9690T_large.jpg?v=1635016197'],
    productName: 'James Bar Cart',
    productPrice: 1573,
    category: 'furniture',
    type: 'Bar Cart',
    quickShip: true,
    styleOptions: [],

  },
  // Lighting-here
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/PPL-BLK_PipeLight_large.jpg?v=1607884654'],
    productName: 'Pipe Sconce Light',
    productPrice: 150,
    category: 'lighting',
    type: 'Andrew Neyer',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/dafcf868f8135b07e0c942f05553cd5c_large.jpg?v=1607616514'],
    productName: 'Mobile Light 2 Arm',
    productPrice: 675,
    category: 'lighting',
    type: 'Andrew Neyer',
    quickShip: false,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/d30056aea716c2597a9cdc029cbfc6a1_large.jpg?v=1607615838'],
    productName: 'Barbell Pendant Light',
    productPrice: 275,
    category: 'lighting',
    type: 'Andrew Neyer',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/web-Astro-Mobile-Light-No_3_jpg_large.jpg?v=1571439045'],
    productName: 'Astro Mobile Light No. 3',
    productPrice: 3250,
    category: 'lighting',
    type: 'Andrew Neyer',
    quickShip: false,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/ML-3-BLK-Mobile-Light_large.jpg?v=1607884534'],
    productName: 'Mobile Light 3 Arm',
    productPrice: 1200,
    category: 'lighting',
    type: 'Andrew Neyer',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/web-Astro-Mobile-Light-No_1_jpg_large.jpg?v=1637073527'],
    productName: 'Astro Mobile Light No. 1',
    productPrice: 2250,
    category: 'lighting',
    type: 'Andrew Neyer',
    quickShip: false,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/WhatsAppImage2020-12-11at3.20.23AM_large.jpg?v=1607884860'],
    productName: 'Astro Pendant Light',
    productPrice: 500,
    category: 'lighting',
    type: 'Andrew Neyer',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/web-Astro-Dome-Light_jpg_large.jpg?v=1571439045'],
    productName: 'Astro Dome Light',
    productPrice: 462,
    category: 'lighting',
    type: 'Andrew Neyer',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/web-Astro-Mobile-Light-No_2_jpg_large.jpg?v=1571439045'],
    productName: 'Astro Mobile Light No. 2',
    productPrice: 3250,
    category: 'lighting',
    type: 'Andrew Neyer',
    quickShip: false,
    styleOptions: [],

  },
  {
    imgSource: ['///cdn.shopify.com/s/files/1/1087/6904/products/web-AstroGlobeLight_jpg_large.jpg?v=1607615518'],
    productName: 'Astro Globe Light',
    productPrice: 199,
    category: 'lighting',
    type: 'Andrew Neyer',
    quickShip: true,
    styleOptions: [],

  },
  // Lighting-here
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/f7ab4652e81130100d93ff86552a5e7d_large.jpg?v=1571438912'],
    productName: 'A110 Pendant by Alvar Aalto',
    productPrice: 675,
    category: 'lighting',
    type: 'Artek',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/38bab21fe1fc86ac9c39d15ef29ba002_large.jpg?v=1639069420'],
    productName: 'Bell Pendant Light A330S',
    productPrice: 675,
    category: 'lighting',
    type: 'Artek',
    quickShip: true,
    styleOptions: [],

  },
  // Lighting-here
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/dd3ebecf27c75cdd66259e7cb1d1e36f_large.jpg?v=1571438953'],
    productName: 'Array Pendant Chandelier',
    productPrice: 675,
    category: 'lighting',
    type: 'Bend Goods',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/2ca570abf5fcdf2c7e34f922140a68bc_large.jpg?v=1571438953'],
    productName: 'Mini Pendant Light',
    productPrice: 225,
    category: 'lighting',
    type: 'Bend Goods',
    quickShip: true,
    styleOptions: [],

  },
  // Dining-here
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/BV-7_large.jpg?v=1571438874'],
    productName: 'Rosso Amarone BV07 - Red Wine Glass Set',
    productPrice: 216,
    category: 'dining',
    type: 'Bottega Del Vino Crystal',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/BV-5_large.jpg?v=1571438874'],
    productName: 'Chardonnay BV05 - White Wine Glass Set',
    productPrice: 300,
    category: 'dining',
    type: 'Bottega Del Vino Crystal',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/BV-11_large.jpg?v=1571438874'],
    productName: 'Champagne Coup BV11 - Champagne Glass Set',
    productPrice: 324,
    category: 'dining',
    type: 'Bottega Del Vino Crystal',
    quickShip: true,
    styleOptions: [],

  },
  // Dining-here
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/83cfdac7d60912f68d482b929ec7c2f0_large.jpg?v=1571438919'],
    productName: 'Kubus Bowl',
    productPrice: 489,
    category: 'dining',
    type: 'By Lassen',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/Kubuscenterpiece_big_black_1_large.jpg?v=1647661844'],
    productName: 'Bowl Centerpiece',
    productPrice: 169,
    category: 'dining',
    type: 'By Lassen',
    quickShip: true,
    styleOptions: [],

  },
  // Dining-here
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/ClubTray_01_large.jpg?v=1623952522'],
    productName: 'Club Tray - Circle',
    productPrice: 220,
    category: 'dining',
    type: 'Cane Line',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/9a055ca5b336c3d726b461b8bb84610e_large.jpg?v=1632371117'],
    productName: 'Roll Trolley',
    productPrice: 780,
    category: 'dining',
    type: 'Cane Line',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2020-04-26at3.10.37PM_large.png?v=1587928582'],
    productName: 'Roll Bar Trolley With Teak',
    productPrice: 1615,
    category: 'dining',
    type: 'Cane Line',
    quickShip: false,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/ScreenShot2020-04-13at8.48.19AM_large.png?v=1586782233'],
    productName: 'Frame Trolley/Bar Cart',
    productPrice: 1285,
    category: 'dining',
    type: 'Cane Line',
    quickShip: false,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/ClubTray-Square-01_large.jpg?v=1623952595'],
    productName: 'Club Tray - Square',
    productPrice: 375,
    category: 'dining',
    type: 'Cane Line',
    quickShip: true,
    styleOptions: [],

  },
  // Kitchen-here
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/e61c95f62a33b1e08637da3610fd06ad_large.gif?v=1571438990'],
    productName: 'Staub Oval Covered Baking Dish - 9',
    productPrice: 170,
    category: 'kitchen',
    type: 'Baking Dish',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/eeaa9243b3d50ed80b57e40cb9c55eb2_3b575f11-4c62-4958-91ce-090d1ad97bb4_large.jpg?v=1571438990'],
    productName: 'Staub Oval Gratin Baking Dish',
    productPrice: 110,
    category: 'kitchen',
    type: 'Baking Dish',
    quickShip: true,
    styleOptions: [],

  },
  // Kitchen-here
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/4f0770db8c3f2c3196d8ca7ef17f5ebf_large.jpg?v=1571438935'],
    productName: 'Boning Knife',
    productPrice: 322,
    category: 'kitchen',
    type: 'Boning',
    quickShip: false,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/b198110a3437c6ad655f9401f723dd54_large.jpg?v=1571438939'],
    productName: 'Boning Knife & Block - Ox Horn',
    productPrice: 170,
    category: 'kitchen',
    type: 'Boning',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/b89431ba4948e450cb9e6cb6016464f7_large.jpg?v=1571438938'],
    productName: 'Coltello Boning Knife - Cornotech Handle',
    productPrice: 191,
    category: 'kitchen',
    type: 'Boning',
    quickShip: true,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/5b6d724e5cd67041f16794e695dcc3b9_large.jpg?v=1571438938'],
    productName: 'Coltello Boning Knife - White Lucite Handle',
    productPrice: 182,
    category: 'kitchen',
    type: 'Boning',
    quickShip: true,
    styleOptions: [],

  },
  // Kitchen-here
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/5008b3910e86ae07aea1d956802d4d96_ab7cd609-e49d-4082-a079-ed4ff369e6ff_large.gif?v=1642629606'],
    productName: 'Staub Braiser - 3.5 Qt',
    productPrice: 322,
    category: 'kitchen',
    type: 'Braiser',
    quickShip: false,
    styleOptions: [],

  },
  {
    imgSource: ['//cdn.shopify.com/s/files/1/1087/6904/products/feec648d2c8599a48547b4f2cc8e22aa_large.jpg?v=1571438989'],
    productName: 'Staub Bouillabaisse Pot - 5 Qt',
    productPrice: 170,
    category: 'kitchen',
    type: 'Braiser',
    quickShip: true,
    styleOptions: [],

  },

]

export {
  quickShipOption,
  bedRoomPriceOption,

  sortOption,
  productsData,
  bedRoomType,
  diningPriceOption,
  furniturePriceOption,
  kitchenPriceOption,
  furnitureType,
  lightingType,
  diningType,
  kitchenType,
}
