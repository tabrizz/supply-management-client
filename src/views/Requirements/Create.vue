<template>
  <q-page padding>
    <div class="row justify-end q-pb-md">
      <q-btn icon="add" label="Agregar Items" type="submit" color="positive"/>
    </div>
    <q-card>
      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-sm">
          <div class="row q-gutter-sm">
            <div class="col-md-8">
              <q-input
                v-model="requirement.description"
                label="Descripción *"
                color="positive"
                lazy-rules
                dense
                :rules="[ val => val && val.length > 0 || 'Ingrese la descripción del requerimiento']"
              ></q-input>
            </div>
            <div class="col">
              <q-input
                color="positive"
                v-model="requirement.approved"
                label="Aprobado"
                lazy-rules
                dense
              ></q-input>
            </div>
          </div>
          <div class="row q-gutter-sm">
            <div class="col">
              <q-input
                color="positive"
                type="textarea"
                v-model="requirement.notes"
                label="Notas"
                lazy-rules
                dense
              ></q-input>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      requirement: {
        description: "",
        notes: "",
        approved: false
      },
      products: [
        {
          id: 1,
          name: "Laptop",
          description: "Laptop de 14 pulgadas",
          quantity: 4,
          unit: "unidad",
          model: "XPS 2019",
          brand: "DELL",
          color: "negro",
          details: "producto nuevo de fábrica"
        },
        {
          id: 2,
          name: "Laptop",
          description: "Laptop de 17 pulgadas",
          quantity: 4,
          unit: "unidad",
          model: "E505 2019",
          brand: "LENOVO",
          color: "negro",
          details: "producto nuevo de fábrica"
        }
      ]
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
    onReset() {},
    rowSelected(productId) {
      console.log("toggle");
      console.log(productId);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
