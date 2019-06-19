import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import './styles/quasar.styl'
import lang from 'quasar/lang/es.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QForm,
  QInput,
  QCard,
  QCardSection,
  QCardActions,
  QExpansionItem,
  QTable,
  QTh,
  QTr,
  QTd,
  QToggle,
  QMenu,
  ClosePopup,
  QSeparator
} from 'quasar'

import axios from 'axios'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QForm,
    QInput,
    QCard,
    QCardSection,
    QCardActions,
    QExpansionItem,
    QTable,
    QTh,
    QTr,
    QTd,
    QToggle,
    QMenu,
    QSeparator

  },
  directives: {
    ClosePopup
  },
  plugins: {},
  lang: lang
})
axios.defaults.withCredentials = true
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')