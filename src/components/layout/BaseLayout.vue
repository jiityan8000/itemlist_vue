<template>
  <div class="BaseLayout">
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<style lang="scss">
.BaseLayout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
</style>