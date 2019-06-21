<template>
  <q-page padding>
    <div class="row justify-end q-pb-md">
      <q-btn
        :to="{ name: 'requirements-create'}"
        icon="add"
        label="Registrar"
        type="submit"
        color="positive"
      />
    </div>
    <q-table
      title="Listado de Requerimientos"
      :data="requirements"
      :columns="columns"
      row-key="id"
      :selected.sync="selected"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="description" :props="props">{{ props.row.description }}</q-td>
          <q-td key="approved" :props="props">
            <q-chip
              v-if="props.row.approved"
              dense
              color="positive"
              text-color="white"
              icon="done"
            >Aprobado</q-chip>
            <q-chip v-else dense color="deep-orange" text-color="white" icon="clear">Sin Aprobar</q-chip>
          </q-td>
          <q-td key="archived" :props="props">
            <q-chip
              v-if="props.row.archived"
              dense
              color="positive"
              text-color="white"
              icon="done"
            >Archivado</q-chip>
            <q-chip v-else dense color="deep-orange" text-color="white" icon="clear">Sin Archivar</q-chip>
          </q-td>
          <q-td key="createdAt" :props="props">
            <template v-if="props.row.createdAt !== null">{{ props.row.createdAt }}</template>
            <template v-else>-</template>
          </q-td>
          <q-td key="approvedAt" :props="props">
            <template v-if="props.row.approvedAt !== null">{{ props.row.approvedAt }}</template>
            <template v-else>-</template>
          </q-td>
          <q-td key="archivedAt" :props="props">
            <template v-if="props.row.archivedAt !== null">{{ props.row.archivedAt }}</template>
            <template v-else>-</template>
          </q-td>
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
          name: "description",
          align: "left",
          label: "Descripción",
          field: "description",
          sortable: true
        },
        {
          name: "approved",
          label: "Aprobado",
          align: "center",
          field: "approved",
          style: "width: 10px"
        },
        {
          name: "archived",
          label: "Archivado",
          align: "center",
          field: "archived",
          style: "width: 10px"
        },
        {
          name: "createdAt",
          label: "Creado el",
          align: "center",
          field: "createdAt"
        },
        {
          name: "approvedAt",
          label: "Aprobado el",
          align: "center",
          field: "approvedAt"
        },
        {
          name: "archivedAt",
          label: "Archivado el",
          align: "center",
          field: "archivedAt"
        },
        { name: "options", label: "Opciones" }
      ],
      requirements: [
        {
          id: 1,
          description: "Compra de laptops para logística",
          approved: true,
          archived: false,
          createdAt: "2019-06-20",
          approvedAt: "2019-06-21",
          archivedAt: null
        },
        {
          id: 2,
          description: "Compra de lapiceros tinta líquida",
          approved: false,
          archived: false,
          createdAt: "2019-06-20",
          approvedAt: null,
          archivedAt: null
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
