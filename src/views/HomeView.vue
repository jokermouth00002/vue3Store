<script setup lang="ts">
const windowWidth = ref(`${window.screen.width}px`)
const fortyPercentWidth = ref(`${window.screen.width * 0.5}px`)
</script>

<template>
  <div>
    <div id="topRegion" class="flex justify-center">
      <div class="bg-light-50 py-1rem box">
        <div id="PCTopArtical" class="py-30 relative w-md pr-20 w-100%">
          <div class="text-lg fontStyle mb-3rem">
            Menu
          </div>
          <div class="line mb-8" />
          <p class="break-all leading-loose">
            An obsession with clever solutions for modern living is a good one to have. Denmark-based Menu partners with some of the best modern Scandinavian designers and prides itself on the melding of both traditional and modern aesthetics.
          </p>
        </div>
      </div>
      <div class="bgPicSize One" />
      <div id="PCScrollArrow" class="textVertical pl-6 flex justify-center">
        <span>SCROLL</span>
        <i-carbon:arrow-down class="pt-2 flex items-center" />
      </div>
    </div>
    <section id="storeLocationRow" class="flex justify-center">
      <div class="flex flex-col items-center">
        <img class="storePic" src="https://cdn.shopify.com/s/files/1/1087/6904/files/nik1_600x.jpg?v=1632125650">
        <div class="pt-2 pb-2 text-center fontColor mobileFontSize">
          SHOP
        </div>
        <div class="text-center pb-4">
          RS Barcelona
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="storePic" src="https://cdn.shopify.com/s/files/1/1087/6904/files/rs-final_600x.jpg?v=1632126012">
        <div class="pt-2 pb-2 text-center fontColor mobileFontSize">
          SHOP
        </div>
        <div class="text-center pb-4">
          Nikari
        </div>
      </div>
      <div class=" flex flex-col items-center">
        <img class="storePic" src="https://cdn.shopify.com/s/files/1/1087/6904/files/nan_600x.jpg?v=1632125959">
        <div class="pt-2 pb-2 text-center fontColor mobileFontSize">
          SHOP
        </div>
        <div class="text-center pb-4">
          Nanimarquina
        </div>
      </div>
    </section>
    <div id="middleReion" class="w-full h-full my-36 bgColorF7F7F7 relative flex justify-around">
      <img class="relative bottom-12 bgPicSize Two" src="https://cdn.shopify.com/s/files/1/1087/6904/files/fc3_3355_All-Purpose_Chair_in_BK_382_Plank_Table_in_DA_1024x.jpg?v=1585933251">
      <div class="box">
        <div id="PCMiddleArtical" class="textContainer bg-gray-50">
          <span class="flex justify-center fontColor mobileFontSize"> THE HOME DIFFERENCE </span>
          <h1 class="text-center fontStyle">
            A bit about us
          </h1>
          <p class="break-all leading-loose">
            HORNE is your source for authentic modern design. We have searched the globe to bring you heirloom-quality, modern design from only the best designers, design houses and manufacturers. Whether you are looking for a hand-crafted lighting fixture from Serge Mouille (hand-made in France since the 1950's), an industrial design from Original BTC (manufactured in a Green factory in the UK) or a sophisticated piece of wood furniture from Eastvold (handmade in Wisconsin) - HORNE is proud to offer only the finest in authentic modern design. What's better? We are fanatical about our customer service and modern decor. We are always happy to help, no matter the project, and look forward to talking with you. Send us an email (hello@shopHORNE.com) or give us a call, 877-404-6763.
          </p>
        </div>
      </div>
    </div>
    <div class="w-full h-full">
      <div class="pb-8 flex flex-col justify-center items-center" />
      <h2 class="text-center fontStyle  pb-4">
        The Spanish Chair
      </h2>
      <p id="PCBottomArtical" class="w-50% break-all leading-loose" style="margin:auto">
        One of designer Børge Mogensen’s strongest and most iconic designs, the Spanish Chair draws its inspiration from traditional Spanish techniques and materials.
      </p>
      <img class="w-100% pb-8" src="https://cdn.shopify.com/s/files/1/1087/6904/files/Spanish_Chair_1600x.jpg?v=1645477618">
    </div>
    <div class="flex justify-center">
      <span class="flex justify-center">Shop The Spanish Chair</span>
      <i class="fa-solid fa-arrow-right relative left-4 bottom-0 pb-8" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .fontStyle{
    font-family: "freight-big-pro";
    font-weight: 300;
    font-size: 4rem;
    line-height: 5rem;
    color: #353535;
  }
  .line{
    width: 90px;
    border: none;
    border-bottom: 3px solid #AFAFAF;
    display: inline-block;
  }
  .bgPicSize{
    background-image:url('/room.jpg') ;
    background-size: cover;
    width: 100%;
    height: auto;
  }
  .bgColorF7F7F7{
    background-color: #F7F7F7;
  }
  .textContainer{
    width:550px;
    height:100%;
    position:relative;
    right: 4rem;
    top: 65px;
    margin: 0;
    padding:3rem;
    box-sizing:border-box;
  }
  .storePic{
    width:80%
  }
  .fontColor{
    color: #dbb385;
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-weight: 600;
  }

  @media screen and (max-width:768px) {
    #topRegion{
      display: flex;
      flex-direction: column-reverse;
    }
    #middleReion{
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing:border-box;
      margin:3rem 0 3rem 0;
    }
    .mobileFontSize{
      font-size: 16px;
    }
    .box{
      padding:0 1rem 0 1rem;
      background-color: #f7f7f7;
      #PCTopArtical {
        width: 100%;
        padding:1rem 2rem 0 2rem;
        background-color: white;
        z-index: 10;
        position: relative;
        bottom: 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      #PCMiddleArtical{
        width: 100%;
        position: relative;
        padding: 1rem 2rem 0 2rem;
        right: auto;
        left: auto;
        top: -5rem;
        box-sizing: border-box;
      }
    }
    #PCBottomArtical{
      width: 100%;
      position: relative;
      padding: 1rem 2rem 0 2rem;
      box-sizing: border-box;
    }
    .fontStyle{
      font-size: 40px;
      text-align: center;
      margin-bottom:1rem;
    }
    #PCScrollArrow{
      display: none;
    }
    .bgPicSize.One{
      width:v-bind(windowWidth);
      height:v-bind(windowWidth);
    }
    #storeLocationRow{
      flex-wrap: wrap;
      display: flex;
      justify-content:flex-start;
      padding:2rem 0 2rem 0;
      div.flex.flex-col{
        width:v-bind(fortyPercentWidth)
      }
    }
  }
  @media screen and (min-width:975px) {
    .bgPicSize.Two{
    width: 892px;
    }
  }
  @media screen and (min-width:768px) {
    .bgPicSize.One{
    height: 620px;
    width: 801px;
    }
  }

</style>
