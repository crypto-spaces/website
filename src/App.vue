<template>
  <div class="main-container relative">
    <LeftWrapper />
    <CenterWrapper />
    <ButtonWrapper />
    <RightWrapper />

    <ContentWrapper />
    <FooterWrapper />


  </div>
</template>

<script setup>
import LeftWrapper from '@/components/LeftWrapper.vue'
import CenterWrapper from '@/components/CenterWrapper.vue'
import ButtonWrapper from '@/components/ButtonWrapper.vue'
import RightWrapper from '@/components/RightWrapper.vue'
import ContentWrapper from '@/components/ContentWrapper.vue'
import FooterWrapper from '@/components/FooterWrapper.vue'
</script>

<style lang="scss" scoped>
.main-container {
  //min-height: 980px;
  //height: 100vh;
  overflow-y: auto;
}
</style>
