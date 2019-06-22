<template>
  <q-page padding>
    <q-card class="col-md-4">
      <q-card-section>
        <div class="text-h5">Registrar Producto</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-sm">
          <div class="row q-gutter-sm">
            <div class="col">
              <q-input
                v-model="user.email"
                label="Nombre *"
                color="positive"
                lazy-rules
                dense
                :rules="[ val => val && val.length > 0 || 'Ingrese el nombre del producto']"
              ></q-input>
            </div>
            <div class="col">
              <q-input
                color="positive"
                v-model="user.password"
                label="Descripción *"
                lazy-rules
                dense
                :rules="[ val => val && val.length > 0 || 'Ingrese la descripción']"
              ></q-input>
            </div>
            <div class="col">
              <q-input
                color="positive"
                v-model="user.password"
                label="Cantidad *"
                lazy-rules
                dense
                :rules="[ val => val && val.length > 0 || 'Ingrese la cantidad']"
              ></q-input>
            </div>
          </div>
          <div class="row q-gutter-sm">
            <div class="col">
              <q-input
                v-model="user.email"
                label="Unidad *"
                color="positive"
                lazy-rules
                dense
                :rules="[ val => val && val.length > 0 || 'Ingrese el unidad del producto']"
              ></q-input>
            </div>
            <div class="col">
              <q-input
                color="positive"
                v-model="user.password"
                label="Modelo *"
                lazy-rules
                dense
                :rules="[ val => val && val.length > 0 || 'Ingrese la modelo']"
              ></q-input>
            </div>
            <div class="col">
              <q-input
                color="positive"
                v-model="user.password"
                label="Marca *"
                lazy-rules
                dense
                :rules="[ val => val && val.length > 0 || 'Ingrese la marca']"
              ></q-input>
            </div>
          </div>
          <div class="row q-gutter-sm">
            <div class="col-md-2">
              <q-input
                v-model="user.email"
                label="Color *"
                color="positive"
                lazy-rules
                dense
                :rules="[ val => val && val.length > 0 || 'Ingrese el color del producto']"
              ></q-input>
            </div>
            <div class="col">
              <q-input
                color="positive"
                v-model="user.password"
                label="Detalles *"
                lazy-rules
                dense
                :rules="[ val => val && val.length > 0 || 'Ingrese los detalles']"
              ></q-input>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
    <div class="row q-mt-xs q-gutter-md justify-end">
      <q-btn icon="save" label="Registrar" type="submit" color="positive"/>
      <q-btn :to="{ name: 'products'}" icon="cancel" label="Cancelar" color="positive" flat/>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("login", this.user)
        .then(res => {
          if (res.status === 200) {
            this.$router.push("/logistics");
          } else {
          }
        })
        .catch(err => {});
    },
    onReset() {}
  }
};
</script>

<style lang="scss" scoped>
</style>
