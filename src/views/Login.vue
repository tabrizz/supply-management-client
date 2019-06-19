<template>
  <div class="login">
    <div class="window-height window-width row justify-center items-center">
      <q-card class="col-md-4">
        <q-card-section>
          <div class="text-h4">Sistema de Logística</div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Inicio de Sesión</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              v-model="user.email"
              label="Email *"
              hint="Ingrese su email"
              color="positive"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Ingrese su email']"
            ></q-input>
            <q-input
              v-model="user.password"
              label="Contraseña *"
              hint="Ingrese su contraseña"
              type="password"
              color="positive"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Ingrese su contraseña']"
            ></q-input>
            <div>
              <q-btn label="Iniciar Sesión" type="submit" color="positive"/>
              <q-btn label="Cambiar Contraseña" color="positive" flat class="q-ml-sm"/>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
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
body {
  height: 100%;
}
</style>
