<template>
  <q-page padding>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">Agregar Producto</q-card-section>
        <q-card-section>
          <div class="row q-gutter-sm">
            <div class="col">
              <q-input
                v-model="product.name"
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
                v-model="product.description"
                label="Descripción *"
                lazy-rules
                dense
                :rules="[ val => val && val.length > 0 || 'Ingrese la descripción']"
              ></q-input>
            </div>
            <div class="col">
              <q-input
                color="positive"
                v-model="product.quantity"
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
                v-model="product.unit"
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
                v-model="product.model"
                label="Modelo *"
                lazy-rules
                dense
                :rules="[ val => val && val.length > 0 || 'Ingrese la modelo']"
              ></q-input>
            </div>
            <div class="col">
              <q-input
                color="positive"
                v-model="product.brand"
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
                v-model="product.color"
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
                v-model="product.details"
                label="Detalles *"
                lazy-rules
                dense
                :rules="[ val => val && val.length > 0 || 'Ingrese los detalles']"
              ></q-input>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" @click="cleanDialog" color="positive" v-close-popup/>
          <q-btn flat label="Agregar Producto" @click="addProduct" color="positive" v-close-popup/>
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
            <div class="col-8">
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
          <q-markup-table>
            <thead>
              <tr>
                <th class="text-left">Nombre</th>
                <th class="text-right">Descripción</th>
                <th class="text-right">Cantidad</th>
                <th class="text-right">Unidad</th>
                <th class="text-right">Modelo</th>
                <th class="text-right">Marca</th>
                <th class="text-right">Color</th>
                <th class="text-right">Detalles</th>
                <th class="text-right">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, i) in requirement.products" :key="product.name+i">
                <td class="text-left">{{ product.name }}</td>
                <td class="text-right">{{ product.description }}</td>
                <td class="text-right">{{ product.quantity }}</td>
                <td class="text-right">{{ product.unit }}</td>
                <td class="text-right">{{ product.model }}</td>
                <td class="text-right">{{ product.brand }}</td>
                <td class="text-right">{{ product.color }}</td>
                <td class="text-right">{{ product.details }}</td>
                <td class="text-right">
                  <q-btn flat round dense icon="more_vert">
                    <q-menu>
                      <q-list style="min-width: 100px">
                        <q-item clickable v-close-popup>
                          <q-item-section @click="removeProduct(i)">Eliminar</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </td>
              </tr>
            </tbody>
          </q-markup-table>
          <div class="row q-mt-xs q-gutter-md justify-end">
            <q-btn icon="save" label="Registrar" type="submit" color="positive"/>
            <q-btn
              :to="{ name: 'requirements'}"
              icon="cancel"
              label="Cancelar"
              color="positive"
              flat
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>

    <pre>{{ $data.requirement }}</pre>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      confirm: false,
      requirement: {
        description: "",
        notes: "",
        approved: false,
        products: []
      },
      product: {
        name: "",
        description: "",
        quantity: null,
        unit: "",
        model: "",
        brand: "",
        color: "",
        details: ""
      }
    };
  },
  methods: {
    onSubmit() {
      // axios
      //   .post(VUE_APP_URL_API + "/api/requirements")
      //   .then(res => {
      //     if (res.status === 200) {
      // this.$router.push({ name: "requirements" });
      //     } else {
      //     }
      //   })
      //   .catch(err => {});
    },
    cleanDialog() {
      this.product = {
        name: "",
        description: "",
        quantity: null,
        unit: "",
        model: "",
        brand: "",
        color: "",
        details: ""
      };
    },
    addProduct() {
      this.requirement.products.push(this.product);
      this.cleanDialog();
    },
    removeProduct(i) {
      this.requirement.products.splice(i, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
