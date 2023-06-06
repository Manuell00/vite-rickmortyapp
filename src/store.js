import { reactive } from 'vue'

export const store = reactive({
    apiURL: "https://rickandmortyapi.com/api/character",
    charactersList: [],
    loading: true,

    // Aggiungiamo 2 proprietà per la AppSeach
    searchText: "",
    apiNameParameter: "name"
});