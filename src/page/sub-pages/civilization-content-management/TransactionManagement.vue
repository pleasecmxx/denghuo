<!--事务管理-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <div class="parentBox">
        <ActivityTemplate />
      </div>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import ActivityTemplate from "./transactionComponent/ActivityTemplate";

export default {
  name: "TransactionManagement",
  components: {
    Levelbar,
    ActivityTemplate
  },
  data() {
    return {};
  },
};
</script>

<style>
.parentBox {
  background-color: #fff;
  padding: 15px 15px 0 15px;
  height: 92%;
  border: 1px solid #dcdfe6;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12),
    0 0 6px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
</style>
