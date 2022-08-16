<script lang="ts" setup>

</script>
<template>
  <div class="ax-auto flex justify-center items-center flex-col pb-5rem">
    <div class="fontMaginia text-5xl pt-1rem" style="color:black">
      Details
    </div>
    <ul class="space-y-2 mobileText">
      <li>
        <span class="textColor">
          Design Country:
        </span>
        <span>USA</span>
      </li>
      <li>
        <span class="textColor">
          Material:
        </span>
        <span>Baltic Birch Plywood And Solid Birch</span>
      </li>
      <li>
        <span class="textColor">
          Dimensions:
        </span>
        <span>59"L x 12"W x 42"H"</span>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.textColor{
  font-size: 20px;
  font-weight: 600;
}
@media screen and (max-width: 768px) {
  .mobileText{
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .textColor{
    font-size: 1.125rem;
    font-weight:600;
    line-height: 1.75rem;
  }
}
</style>
