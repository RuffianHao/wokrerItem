<!--
 * @Description:
 * @Date: 2020-01-10 14:59:58
 * @LastEditTime : 2020-01-10 16:20:41
 -->
<template>
  <el-container class="home">
    <!-- <el-header>Header</el-header> -->
    <el-main><Main /></el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>

<script>
import Main from './components/main'
export default {
  name: 'Home',
  components: { Main }
}
</script>
<style lang="less" scoped>
.home {
  .el-header,
  .el-footer {
    text-align: center;
    line-height: 60px;
    background-color: #242f42;
    color: #fff;
  }
  .el-main {
  }
}
</style>
