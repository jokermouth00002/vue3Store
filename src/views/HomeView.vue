<script setup lang="ts"></script>

<template lang="pug">
<div>
  <div class="flex justify-center">
    <div class="py-30 relative w-md pr-20">
      <div class="text-lg menuFont mb-12">Menu</div>
      <div class="hr mb-8"></div>
      <p class="break-all leading-loose">An obsession with clever solutions for modern living is a good one to have. Denmark-based Menu partners with some of the best modern Scandinavian designers and prides itself on the melding of both traditional and modern aesthetics.</p>
    </div>
    <div class="bgPicSize One"></div>
    <div></div>
    div.textVertical.pl-6.flex.justify-center SCROLL
      i.fa-solid.fa-arrow-down.pt-2.flex.items-center
  </div>
  <section class="flex justify-center space-x-20">
    <div class="flex flex-col items-center">
      <img class="storePic" src='https://cdn.shopify.com/s/files/1/1087/6904/files/nik1_600x.jpg?v=1632125650'>
      <div class="pt-2 pb-4 text-center"> SHOP </div>
      <div class="text-center"> RS Barcelona </div>
    </div>
    <div class="flex flex-col items-center">
      <img class="storePic" src='https://cdn.shopify.com/s/files/1/1087/6904/files/rs-final_600x.jpg?v=1632126012'>
      <div class="pt-2 pb-4 text-center"> SHOP </div>
      <div class="text-center">Nikari</div>
    </div>
    <div class=" flex flex-col items-center">
      <img class="storePic" src='https://cdn.shopify.com/s/files/1/1087/6904/files/nan_600x.jpg?v=1632125959'>
      <div class="pt-2 pb-4 text-center">SHOP</div>
      <div class="text-center">Nanimarquina</div>
    </div>
  </section>
  <div class="w-full h-full my-36 bgColorF7F7F7 relative flex justify-around">
    <img class="relative bottom-12 bgPicSize Two" src='https://cdn.shopify.com/s/files/1/1087/6904/files/fc3_3355_All-Purpose_Chair_in_BK_382_Plank_Table_in_DA_1024x.jpg?v=1585933251'>
    <div class="textContainer bg-gray-50">
      <div class="p-12">
        <span class="text-center fontMon"> THE HORNE DIFFERENCE </span>
        <h1 class="text-center">A bit about us</h1>
        <p>HORNE is your source for authentic modern design. We have searched the globe to bring you heirloom-quality, modern design from only the best designers, design houses and manufacturers. Whether you are looking for a hand-crafted lighting fixture from Serge Mouille (hand-made in France since the 1950's), an industrial design from Original BTC (manufactured in a Green factory in the UK) or a sophisticated piece of wood furniture from Eastvold (handmade in Wisconsin) - HORNE is proud to offer only the finest in authentic modern design. What's better? We are fanatical about our customer service and modern decor. We are always happy to help, no matter the project, and look forward to talking with you. Send us an email (hello@shopHORNE.com) or give us a call, 877-404-6763.</p>
      </div>
    </div>
  </div>
  <div class="w-full h-full">
    <div class="pb-8 flex flex-col justify-center items-center"></div>
      <h2 class="text-center fontMon pb-4">The Spanish Chair</h2>
      <p class="w-50vw" style="margin:auto">  One of designer Børge Mogensen’s strongest and most iconic designs, the Spanish Chair draws its inspiration from traditional Spanish techniques and materials.</p>
      <img class='w-100% pb-8' src='https://cdn.shopify.com/s/files/1/1087/6904/files/Spanish_Chair_1600x.jpg?v=1645477618'>
    </div>
    <div class="flex justify-center">
      <span class="flex justify-center">Shop The Spanish Chair</span>
      <i class="fa-solid fa-arrow-right relative left-4 bottom-0 pb-8"></i>
    </div>
  </div>
</template>

<style scoped>
  .menuFont{
    font-family: "freight-big-pro";
    font-weight: 300;
    font-size: 5rem;
    line-height: 5rem;
    color: #353535;
  }
  .hr{
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
  .textVertical{
    writing-mode: vertical-rl;
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
    padding: 0;
  }
  .storePic{
    width:80%
  }

  @media screen and (min-width:769px) {
    .bgPicSize.One{
    height: 620px;
    width: 801px;
    }
  }
  @media screen and (min-width:975px) {
    .bgPicSize.Two{
    width: 892px;
    }
  }
</style>
