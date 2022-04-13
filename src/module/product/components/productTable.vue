<template>
  <v-card>
    <v-card-title>
      Products
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        @click="controller.formDialog = true"
      >
        <v-icon left>mdi-plus</v-icon>new
      </v-btn>
    </v-card-title>
    <v-card-text class="pa-0">
      <v-data-table
        dense
        :items="controller.productPagination.items"
        :headers="controller.headers"
        :options.sync="controller.options"
        @pagination="controller.paginate()"
        :server-items-length="controller.productPagination.total"
      ></v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    controller: {
      require: true,
    },
  },
};
</script>