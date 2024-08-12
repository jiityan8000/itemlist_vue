<template>
  <div class="itemDetailPage">
    <h1>商品詳細</h1>
    <p>HOLOEARTH ランダムアクリルキーホルダー</p>
    <p>
      メタバースプロジェクト「ホロアース」の「チャットスタンプ」イラストを使用した商品です。<br>
      <br>
      この商品は継続販売商品です。<br>
      <br>
      ※本商品はお品切れとなった場合、追加販売を行う可能性がございます。<br>
      ※本商品は、告知なく販売を終了する可能性がございます。
    </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    itemList: {
      type: Array,
      required: true
    },
    viewMode: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>