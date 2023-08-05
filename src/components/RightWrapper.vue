<template>
  <div class="wrapper overflow-hidden">
    <img src="~@/assets/images/icon-2.png" alt="" class="icon-right">
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 345px;
  right: 16px;
  width: 48px;
  height: 13px;

  .icon-right {
    width: 48px;
    height: 13px;
  }
}

@media (min-width: 640px) {
  .wrapper {
    width: 295px;
    height: 614px;
    right: 0;
    top: 125px;
    background-image: url("@/assets/images/bg-3-3xl.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    padding-top: 353px;
    padding-left: 180px;

    .icon-right {
      width: 74px;
      height: 20px;
    }
  }
}

</style>
