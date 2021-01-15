<template>
  <div id="tabNav" class="clearfix">
    <div class="logoBox">
      <img src="../assets/img/index/navLogo.png" alt="" />
    </div>
    <ul class="rightList">
      <li>
        <a href="http://sign.jupaiaction.com/">开放平台（智能合约）</a>
      </li>
      <li>
        <a href="http://creator.jupaiaction.com/">聚剧创作者中心</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tabNav",
};
</script>
<style scoped lang="scss">
#tabNav {
  width: 100%;
  height: 60px;
  padding: 0 100px;
  box-sizing: border-box;
  background: rgba(30, 30, 41, 0.5);
  .logoBox {
    float: left;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 0;
    img {
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }
  }
  .rightList {
    float: right;
    height: 100%;
    li {
      float: left;
      padding: 0 50px;
      line-height: 60px;
      font-size: 14px;
      font-family: HYQiHei-FZS, HYQiHei;
      font-weight: normal;
      color: #ffffff;
      a {
        color: #ffffff;
      }
    }
  }
}
</style>
