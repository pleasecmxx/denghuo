<!--组织 基本信息-->
<template>
  <div class="container">
    <div class="boxTop">
      <span class="stick"></span>
      <span style="margin-left:10px;">基本信息</span>
    </div>
  </div>
</template>
<script>
export default {
    name:'TableOrganizationDetails'
}
</script>

<style scoped>
.container {
  width: 100%;
  margin-top: 20px;
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
  float: left;
}

</style>