<script>
// Importo lo STORE
import { store } from './store.js';
// Importo AXIOS 
import axios from 'axios';

// Importo i COMPONENTI
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'
import AppLoader from './components/AppLoader.vue'
import AppSearch from './components/AppSearch.vue'


// Inserisco l'EXPORT
export default {
  components: {
    AppHeader,
    CharactersList,
    AppLoader,
    AppSearch,
  },

  // Inserisco i dati
  data() {
    return {
      store,
    }
  },

  methods: {
    // THEN mi dice che se va bene la chiamata allora fa quello che scrivo come codice
    // CATCH invece intercetta l'errore e mi permette visualizzarli (ad esempio con un console.log)
    getCharacters() {
      console.log("ciao");

      let myUrl = store.apiURL

      if (store.searchText !== "") {
        myUrl += `?${store.apiNameParameter}=${store.searchText}`
      }

      axios.get(myUrl).then(res => {
        store.charactersList = res.data.results;
        store.loading = false;
      })
        .catch(err => {
          console.log(err);
        })
    }
  },

  // CREATED viene utilizzato al posto di mounted perchè svolge l'attività quando viene creata l'app
  created() {
    this.getCharacters()
  }
}
</script>

<!-- TEMPLATE -->
<template>
  <!-- In questo caso visualizzo il componente AppLoader solo quando la variabile store.loading è == true, quando in realtà la pagina è caricata questo diventerà false e quindi non sarà più visualizzato  -->
  <AppLoader v-if="store.loading" />

  <!-- Modificando il valore della variabile message, il componente figlio (AppHeader cambiera il valore della propria variabile) -->
  <AppHeader message="Rick e Morty App" />

  <main>
    <AppSearch @mysearch="getCharacters" />
    <CharactersList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
