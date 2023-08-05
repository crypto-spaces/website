<template>
  <div class="wrapper">
    <a href="https://www.facebook.com/profile.php?id=100095190212533" target="_blank" class="btn-1"></a>
    <a href="https://twitter.com/CryptospaceHK" target="_blank" class="btn-2"></a>
    <a href="https://medium.com/@enroll_77984" target="_blank" class="btn-3"></a>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.wrapper {
  width: 289px;
  height: 50px;
  position: absolute;
  top: 267px;
  padding: 11px 64px 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  background: url("@/assets/images/bg-btn.png") no-repeat center;
  background-size: 100% 100%;

  a {
    width: 28px;
    height: 28px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }

  .btn-1 {
    background-image: url("@/assets/images/icon-facebook.png");
  }
  .btn-2 {
    background-image: url("@/assets/images/icon-twitter.png");
  }
  .btn-3 {
    background-image: url("@/assets/images/icon-medium.png");
  }
}

@media (min-width: 640px) {
  .wrapper {
    width: 368px;
    height: 69px;
    top: 396px;
    padding-top: 22px;
  }
}

@media (min-width: 1600px) {
  .wrapper {
    top: 484px;
  }
}
</style>
