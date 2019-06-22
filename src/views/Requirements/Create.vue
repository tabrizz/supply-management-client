<template>
  <q-page padding>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">Agregar Producto</q-card-section>
        <q-card-section>
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
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="positive" v-close-popup/>
          <q-btn flat label="Agregar Producto" color="positive" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--end of dialog to add products-->
    <div class="row justify-end q-pb-md">
      <q-btn
        icon="add"
        @click="confirm = true"
        label="Agregar Items"
        type="submit"
        color="positive"
      />
    </div>
    <q-card class="q-mb-xs">
      <q-card-section>
        <div class="text-h5">Crear Requerimiento</div>
      </q-card-section>
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
              <q-checkbox v-model="requirement.approved" label="Aprobado" dense color="positive"/>
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
      confirm: false,
      user: {
        email: null,
        password: null
      },
      requirement: {
        description: "",
        notes: "",
        approved: false
      },
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
      products: []
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
