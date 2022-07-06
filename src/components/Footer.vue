<template>
  <footer>
    <ul class="left-lists">
      <li>聯絡lativ</li>
      <li>購物說明</li>
      <li>最新消息</li>
      <li>品牌日誌</li>
    </ul>
    <ul class="right-lists">
      <li>網站使用條款</li>
      <li>隱私權政策</li>
      <li>免責聲明</li>
      <li>2022 lativ</li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer,
footer ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer {
  margin-bottom: 55px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  text-align: center;

  ul {
    width: 30%;

    li {
      flex: auto;

      + li {
        border-left: 1px solid #706e6c;
      }
    }
  }

  .right-lists :last-child::before {
    content: "\00A9";
  }
}
</style>