<template>
  <v-dialog
    persistent
    width="400"
    v-model="controller.formDialog"
  >
    <v-card>
      <v-card-title class="pa-0 pb-4">
        <v-toolbar
          flat
          dense
          color="primary"
          class="white--text"
        >
          New product
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            label="Name"
            dense
            filled
            v-model="controller.product.name"
            :rules="[(v) => !!v || 'Required']"
          ></v-text-field>
          <v-text-field
            label="Price"
            dense
            filled
            v-model.number="controller.product.price"
            :rules="[(v) => !!v || 'Required']"
          ></v-text-field>
          <v-textarea
            label="Description"
            dense
            filled
            v-model="controller.product.description"
            :rules="[(v) => !!v || 'Required']"
          ></v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="controller.cancel()"
          color="red"
          text
        >cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="controller.save()"
        >
          <v-icon left>mdi-content-save</v-icon>save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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