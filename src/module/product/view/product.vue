<template>
  <v-app>
    <v-main>
      <v-row
        class="fill-height"
        justify="center"
        align="center"
      >
        <v-col
          cols="12"
          lg="6"
        >
          <product-table
            ref="productTable"
            :controller="controller"
          />
          <product-form
            ref="productForm"
            :controller="controller"
          />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import { productController } from "../../di/di";
import ProductTable from "../components/productTable";
import ProductForm from "../components/productForm";
export default {
  components: {
    ProductTable,
    ProductForm,
  },
  data: (context) => ({
    controller: productController(context),
  }),
};
</script>