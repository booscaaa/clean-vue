<template>
  <Product />
</template>

<script lang="ts">
import Vue from "vue";
import Product from "./module/product/view/product.vue";

export default Vue.extend({
  name: "App",

  components: {
    Product,
  },
});
</script>
