<template>
  <el-button @click="show">点我</el-button>
</template>

<script>
export default {
  name: "EleExam",
  methods: {
    show() {
      this.$message.success("Toast from element-ui");
    },
  },
};
</script>