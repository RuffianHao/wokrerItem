<!--
 * @Description:
 * @Date: 2020-01-10 16:10:32
 * @LastEditTime : 2020-01-10 17:24:25
 -->
<template>
  <div
    class="cabinet"
    @mouseenter="markFlag = !markFlag"
    @mouseleave="markFlag = !markFlag"
  >
    <div class="figure">
      <div class="img">
        <img src="../../assets/0000414.jpg" alt="访问...">
        <div v-show="markFlag" class="mark" />
      </div>
      <div class="info">
        <h5>某某..........</h5>
        <span>时间:2020-01-01</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markFlag: false
    }
  }
}
</script>

<style lang="less" scoped>
.cabinet {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: calc(20% - 10px);
  margin: 0px 5px 10px;
  padding: 2px;
  border-radius: 10px;
  vertical-align: middle;
  word-wrap: break-word;
  background-clip: border-box;
  .figure {
    position: relative;
    background-color: #fff;
    box-sizing: border-box;
    .img {
      position: relative;
      height: 140px;
      .mark {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 3;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        vertical-align: middle;
      }
    }
    .info {
      line-height: 30px;
    }
  }
}
</style>
