<template>
  <div class="wrapper overflow-hidden w-full">
    <div class="content-wrapper">
      <div class="text-container">
        <p>First metaverse <a href="https://medium.com/@enroll_77984/intro-of-3-space-v1-0-be78eae6cb03" target="_blank" class="high-text">3-Asset</a> artworks is coming soon.</p>
        <p></p>
        <p>With multi-experience in <a href="https://medium.com/@enroll_77984/intro-of-3-space-v1-0-be78eae6cb03" target="_blank" class="high-text">3-Space</a> , brings you magical and unprecedented experience with realistic, connectable, imaginative.</p>
        <p>·exquisite craftsmanship original creation from Physical World.</p>
        <p>·innovative trendy secondary creation from Digital World.</p>
        <p>·immersive secondary creation from Virtual World.</p>
        <p></p>
        <p>All 3 creations minted into NFT and unified in one art asset. Valuable, collectable，exchangeable, appreciative and ecological.</p>
        <p></p>
        <p>With 3-Asset, art no longer just for someone, it'll be metaverse art of you.</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.wrapper {
  min-height: 380px;
  margin-top: 34px;
  padding: 0 16px;
  background-image: url("@/assets/images/bg-4-3xl.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 0;
  box-shadow: inset 0px -20px 20px #000;


  .content-wrapper {
    margin-top: 110px;
    border-radius: 20px;
    border: 1px solid #fff;
    background: rgba(159,172,255,0.06);
    padding: 32px 11px;
    color: #fff;
    font-size: 9px;
    font-weight: 600;
    backdrop-filter: blur(10px);
    line-height: 17px;

    .high-text {
      color: #02D1FF;
      text-decoration: underline;
    }

    p {
      min-height: 17px;
    }
  }

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

    .logo {
      width: 70px;
    }

    p {
      margin-top: 16px;
      font-size: 12px;
      font-weight: 600;
      color: #fff;
      line-height: 14px;
      letter-spacing: 1px;
    }
  }
}

@media (min-width: 640px) {
  .wrapper {
    height: 608px;
    margin-top: -35px;
    //padding: 0 88px;
    background-image: url("@/assets/images/bg-4-3xl.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;


    .content-wrapper {
      margin-top: 170px;
      border-radius: 30px;
      padding: 41px 62px;
      font-size: 12px;
      line-height: 23px;

      p {
        min-height: 23px;
      }
    }
  }
}

@media (min-width: 1024px) {
  .wrapper {
    margin-top: 23px;

    .content-wrapper {
      width: 848px;
      display: flex;
      padding-left: 0;
      padding-right: 0;
      margin-left: auto;
      margin-right: auto;


      .text-container {
        margin: auto;
        display: flex;
        flex-direction: column;
      }
    }
    .btn-content {
      width: 930px;
      height: 114px;
      background: url("@/assets/images/bg-btn-2-3xl.png") no-repeat center;
      background-size: 100% 100%;
      padding-top: 25px;

      p {
        font-size: 17px;
        line-height: 32px;
      }
    }
  }
}

@media (min-width: 1600px) {
  .wrapper {
    height: 876px;
    margin-top: -150px;
    padding: 0 122px;


    .content-wrapper {
      width: 1355px;
      margin-top: 262px;
      padding-top: 69px;
      padding-bottom: 69px;
      font-size: 20px;
      line-height: 38px;

      p {
        min-height: 38px;
      }
    }
  }
}
</style>
