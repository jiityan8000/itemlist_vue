<template>
  <div class="my-button">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.my-button {
  display: inline-block;
  padding: 4px 16px;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  cursor: pointer;
  transition: all ease 0.4s;

  &:hover {
    opacity: 0.6;
  }
}
</style>