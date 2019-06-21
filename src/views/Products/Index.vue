<template>
  <q-page padding>
    <div class="row justify-end q-pb-md">
      <q-btn
        :to="{ name: 'products-create'}"
        icon="add"
        label="Registrar"
        type="submit"
        color="positive"
      />
    </div>
    <q-table
      title="Listado de Productos"
      :data="products"
      :columns="columns"
      row-key="id"
      :selected.sync="selected"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">{{ props.row.name }}</q-td>
          <q-td key="description" :props="props">{{ props.row.description }}</q-td>
          <q-td key="quantity" :props="props">{{ props.row.quantity }}</q-td>
          <q-td key="unit" :props="props">{{ props.row.unit }}</q-td>
          <q-td key="model" :props="props">{{ props.row.model }}</q-td>
          <q-td key="brand" :props="props">{{ props.row.brand }}</q-td>
          <q-td key="color" :props="props">{{ props.row.color }}</q-td>
          <q-td key="details" :props="props">{{ props.row.details }}</q-td>
          <q-td auto-width>
            <q-btn flat round dense icon="more_vert" @click="rowSelected(props.row.id)">
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>Ver</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Editar</q-item-section>
                  </q-item>
                  <q-separator/>
                  <q-item clickable v-close-popup>
                    <q-item-section>Eliminar</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      selected: [],
      columns: [
        {
          name: "name",
          required: true,
          label: "Nombre",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "description",
          align: "center",
          label: "Descripción",
          field: "description",
          sortable: true
        },
        {
          name: "quantity",
          label: "Cantidad",
          field: "quantity",
          sortable: true,
          style: "width: 10px"
        },
        { name: "unit", label: "Unidad", align: "center", field: "unit" },
        { name: "model", label: "Modelo", align: "center", field: "model" },
        { name: "brand", label: "Marca", align: "center", field: "brand" },
        {
          name: "color",
          label: "Color",
          align: "center",
          field: "color",
          sortable: true
        },
        {
          name: "details",
          align: "center",
          label: "Detalles",
          field: "details",
          sortable: true
        },
        { name: "options", label: "Opciones" }
      ],
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
