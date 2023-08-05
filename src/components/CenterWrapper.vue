<template>
  <div class="wrapper">
    <div class="text-content">
      <p class="text-white">Hello from <span class="cs-blue">METAVERSE</span></p>
      <p class="text-white">new <span class="cs-blue">Art</span> is coming for you.</p>
    </div>
    <div class="down-content">
      <p class="join-us">Join Us</p>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.wrapper {
  width: 243px;
  height: 253px;
  margin-top: 71px;
  margin-left: auto;
  margin-right: auto;
  background-image: url("@/assets/images/bg-2-sm.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  position: relative;
  display: flex;
  justify-content: center;


  .text-content {
    position: absolute;
    top: 63px;
    text-align: center;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 2px;
    font-family: dgo;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }

  .down-content {
    margin-top: 164px;
    display: flex;
    justify-content: center;
    //align-items: center;
    //flex-direction: column;

    .join-us {
      font-size: 12px;
      font-family: dgo;
      font-weight: 400;
      line-height: 23px;
      background: linear-gradient(90deg, #F95413 0%, #F9E24A 20%, #B2F684 40%, #02D1FF 60%, #9C5FF6 80%, #E517F8 98%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}

@media (min-width: 640px) {
  .wrapper {
    width: 475px;
    height: 475px;
    margin-top: 112px;
    background-image: url("@/assets/images/bg-2-3xl.png");

    .text-content {
      top: 96px;
      font-size: 28px;
      line-height: 53px;
      letter-spacing: 4px;
    }

    .down-content {
      margin-top: 246px;

      .join-us {
        font-size: 14px;
        line-height: 26px;
      }
    }
  }
}

@media (min-width: 1600px) {
  .wrapper {
    width: 603px;
    height: 603px;
    margin-top: 171px;

    .text-content {
      top: 81px;
    }

    .down-content {
      margin-top: 275px;
    }
  }
}
</style>
