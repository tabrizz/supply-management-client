<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-positive">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>Sistema de Logística</q-toolbar-title>

        <div>Usuario 1</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-10 text-white">
      <q-list>
        <q-item-label header>Barra de Navegación</q-item-label>
        <q-item :to="{ name: 'home'}" exact active-class="text-positive">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Principal</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :to="{ name: 'about'}" exact>
          <q-item-section avatar>
            <q-icon name="info"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>

        <q-item-label header>Principal</q-item-label>
        <q-expansion-item
          icon="store"
          label="Activos y Suministros"
          header-class="text-white"
          :content-inset-level="0.5"
        >
          <q-item :to="{ name: 'products'}" exact active-class="text-positive">
            <q-item-section avatar>
              <q-icon name="work"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Productos</q-item-label>
              <q-item-label class="text-grey-6" caption>Listar, Registrar Productos</q-item-label>
            </q-item-section>
          </q-item>
          <q-item :to="{ name: 'login'}" exact active-class="text-positive">
            <q-item-section avatar>
              <q-icon name="phonelink"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Activos</q-item-label>
              <q-item-label class="text-grey-6" caption>Listar, Registrar Activos</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          icon="card_travel"
          label="Requerimientos y Compras"
          header-class="text-white"
          :content-inset-level="0.5"
        >
          <q-item :to="{ name: 'requirements'}" exact active-class="text-positive">
            <q-item-section avatar>
              <q-icon name="subject"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Requerimientos</q-item-label>
              <q-item-label class="text-grey-6" caption>Listar, Registrar Requerimientos</q-item-label>
            </q-item-section>
          </q-item>
          <q-item :to="{ name: 'products'}" exact active-class="text-positive">
            <q-item-section avatar>
              <q-icon name="shopping_cart"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Compras</q-item-label>
              <q-item-label class="text-grey-6" caption>Listar, Registrar Compras</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-item exact active-class="text-positive">
          <q-item-section avatar>
            <q-icon name="work"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Productos</q-item-label>
            <q-item-label class="text-grey-6" caption>Listar, Registrar Productos</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-4">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",

  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  }
};
</script>
<style lang="scss" scoped>
$ham: #4b1bcd;
.bg-ham {
  background-color: $ham;
}
</style>

