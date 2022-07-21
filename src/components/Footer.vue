<template>
  <section id="footer">
    <h3>Copyright&copy {{currentYear}} Ra'ees Benny</h3>
    <h1>Footer</h1>
  </section>
</template>
<script>

export default {
  data() {
    return {
      currentYear: new Date().getFullYear(), // 2020
    };
  }
};
</script>

<style scoped>
#footer {
  background: #1f1f1f;
  color: #e5e5e5;
  padding: 0 0 10px 0;
  border: 10px solid #e5e5e5;
}
</style>