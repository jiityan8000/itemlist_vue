<template>
  <div class="BaseLayout">
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<style lang="scss">
.BaseLayout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
</style>