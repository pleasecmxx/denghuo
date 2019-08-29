<!--运营数据-->
<template>
  <div class="container">
    <div class="boxTop">
      <span class="stick"></span>
      <span style="margin-left:10px;">运营数据</span>
    </div>
    <div class="boxBottom">
      <div>成员数</div>
      <div>关注用户数</div>
      <div>成员事务数</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OperationalData"
};
</script>
<style scoped>
.container {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.stick {
  height: 25px;
  width: 5px;
  background-color: #409eff;
}
.boxTop {
  width: 90%;
  display: flex;
  justify-content: flex-start;
}
.boxBottom {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
.boxBottom div {
  width: 285px;
  height: 128px;
  background-color: rgb(242, 242, 242);
  line-height: 128px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
</style>