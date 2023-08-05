<template>
  <div class="wrapper overflow-hidden">
    <img src="~@/assets/images/logo.png" alt="" class="logo-img">
    <img src="~@/assets/images/icon-1.png" alt="" class="icon-left">
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 191px;
  background-image: url("@/assets/images/bg-1-sm.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  padding-top: 22px;
  padding-left: 16px;

  .logo-img {
    width: 70px;
  }

  .icon-left {
    margin-top: 34px;
    width: 48px;
  }
}

@media (min-width: 640px) {
  .wrapper {
    width: 272px;
    height: 272px;
    background-image: url("@/assets/images/bg-1-3xl.png");
    padding-top: 44px;
    padding-left: 41px;

    .logo-img {
      width: 112px;
    }

    .icon-left {
      margin-top: 74px;
      width: 74px;
    }
  }
}

@media (min-width: 1600px) {
  .wrapper {
    width: 398px;
    height: 398px;
    background-image: url("@/assets/images/bg-1-3xl.png");
  }
}
</style>
