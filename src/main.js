import Vue from 'vue';
import App from '@/App.vue';
import firebase from 'firebase/app';
import 'firebase/firestore';
import normalize from 'normalize.css';
import { firestorePlugin } from 'vuefire';
import { Photoshop } from 'vue-color';
import vueAxios from 'vue-axios';
import axios from 'axios';
import router from './routes';
import store from './store';

Vue.use(firestorePlugin);

Vue.config.productionTip = true;
Vue.use(vueAxios, axios);
Vue.use(normalize);

const firebaseConfig = {
  apiKey: 'AIzaSyDuAkDqsaJ0XhBwSMc2ZUIQVGpEqDw9D9Y',
  authDomain: 'stranger-proba.firebaseapp.com',
  databaseURL: 'https://stranger-proba.firebaseio.com',
  projectId: 'stranger-proba',
  storageBucket: 'stranger-proba.appspot.com',
  messagingSenderId: '820743614802',
  appId: '1:820743614802:web:4a47543ba8b22dd8558a8b',
  measurementId: 'G-W44LF10KLX',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();

new Vue({
  router,
  store,
  components: {
    Photoshop,
  },
  render: (h) => h(App),
}).$mount('#app');
