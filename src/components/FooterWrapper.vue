<template>
  <div class="wrapper overflow-hidden w-full">
    <div class="btn-content">
      <p>All these will <span class="high-text-1">happened</span> in this <span class="high-text-1">OCT</span> at <a href="https://www.cryptospace.hk" class="high-text-2">www.cryptospace.hk</a>.</p>
      <p>Please followed and turn the notification on.</p>
    </div>

    <div class="footer">
      <img src="~@/assets/images/logo.png" alt="" class="logo">
      <p>©2023-Metamont Ltd.</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.wrapper {
  //background: url("@/assets/images/bg-5-sm.png") no-repeat center;
  //background-size: 100% 100%;
  .btn-content {
    margin-top: 47px;
    padding: 0 17px;
    p {
      color: #999999;
      font-size: 10px;
      font-weight: 300;
      line-height: 19px;
      text-align: center;

      .high-text-1 {
        color: #fff;
        font-weight: 600;
      }

      .high-text-2 {
        color: #fff;
        font-weight: 600;
        text-decoration: underline;
      }
    }
  }

  .footer {
    margin-top: 72px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 38px;

    .logo {
      width: 70px;
    }

    p {
      margin-top: 16px;
      font-size: 12px;
      font-weight: 600;
      color: #fff;
      line-height: 14px;
      letter-spacing: 1px
    }
  }
}

@media (min-width: 640px) {

}

@media (min-width: 1024px) {
  .wrapper {
    margin-top: 23px;

    .btn-content {
      margin: 0 auto;
      width: 930px;
      height: 114px;
      //background: url("@/assets/images/bg-btn-2-3xl.png") no-repeat center;
      //background-size: 100% 100%;
      padding-top: 25px;

      p {
        font-size: 17px;
        line-height: 32px;
      }
    }

    .footer {
      margin-top: 97px;
      padding-bottom: 66px;

      .logo {
        width: 92px;
      }

      p {
        margin-top: 34px;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
}

@media (min-width: 1600px) {
  .wrapper {
    margin-top: 42px;
    .footer {
      margin-top: 251px;
    }
  }

}
</style>
