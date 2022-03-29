<script setup lang="ts"></script>

<template lang="pug">
div
  div.flex.justify-center
    .py-30.relative.w-md.pr-20
      .text-lg.menuFont.mb-12 Menu
      .hr.mb-8
      p.break-all.leading-loose An obsession with clever solutions for modern living is a good one to have. Denmark-based Menu partners with some of the best modern Scandinavian designers and prides itself on the melding of both traditional and modern aesthetics.
      //- el-button.mt-8.text-1xl.w-180px.h-50px.relative(type='warning' plain) SHOP NOW
    div.bgPicSize.One
    div.textVertical.pl-6.flex.justify-center SCROLL
      i.fa-solid.fa-arrow-down.pt-2.flex.items-center

  section.flex.justify-center.space-x-20
    div.flex.flex-col.items-center
      img.storePic(src='https://cdn.shopify.com/s/files/1/1087/6904/files/nik1_600x.jpg?v=1632125650')
      .pt-2.pb-4.text-center SHOP
      .text-center RS Barcelona

    div.flex.flex-col.items-center
      img.storePic(src='https://cdn.shopify.com/s/files/1/1087/6904/files/rs-final_600x.jpg?v=1632126012')
      .pt-2.pb-4.text-center SHOP
      .text-center Nikari
    div.flex.flex-col.items-center
      img.storePic(src='https://cdn.shopify.com/s/files/1/1087/6904/files/nan_600x.jpg?v=1632125959')
      .pt-2.pb-4.text-center SHOP
      .text-center Nanimarquina

  .w-full.h-full.my-36.bgColorF7F7F7.relative.flex.justify-around
    img.relative.bottom-12.bgPicSize.Two(src='https://cdn.shopify.com/s/files/1/1087/6904/files/fc3_3355_All-Purpose_Chair_in_BK_382_Plank_Table_in_DA_1024x.jpg?v=1585933251')
    .textContainer.bg-gray-50
      .p-12
        span.text-center.fontMon THE HORNE DIFFERENCE
        h1.text-center  A bit about us
        p HORNE is your source for authentic modern design. We have searched the globe to bring you heirloom-quality, modern design from only the best designers, design houses and manufacturers. Whether you are looking for a hand-crafted lighting fixture from Serge Mouille (hand-made in France since the 1950's), an industrial design from Original BTC (manufactured in a Green factory in the UK) or a sophisticated piece of wood furniture from Eastvold (handmade in Wisconsin) - HORNE is proud to offer only the finest in authentic modern design. What's better? We are fanatical about our customer service and modern decor. We are always happy to help, no matter the project, and look forward to talking with you. Send us an email (hello@shopHORNE.com) or give us a call, 877-404-6763.
  .w-full.h-full
    .pb-8.flex.flex-col.justify-center.items-center
      h2.text-center.fontMon.pb-4 The Spanish Chair
      p.text-center.w-50vw One of designer Børge Mogensen’s strongest and most iconic designs, the Spanish Chair draws its inspiration from traditional Spanish techniques and materials.
      img(class='w-100% pb-8' src='https://cdn.shopify.com/s/files/1/1087/6904/files/Spanish_Chair_1600x.jpg?v=1645477618')
    .flex.justify-center
      span.flex.justify-center  Shop The Spanish Chair
      i.fa-solid.fa-arrow-right.relative.left-4.bottom-0.pb-8

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
