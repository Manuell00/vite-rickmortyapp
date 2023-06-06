<script>
// Importo lo STORE
import { store } from './../store.js';

// EXPORT
export default {
    name: "ResultMessage",

    // Anche qui inseriamo i data dello store così da poterlo utilizzare
    data() {
        return {
            store
        }
    },

    computed: {
        resultNumber() {
            return store.charactersList.length
        }
    }
}
</script>



<template>
    <section v-if="resultNumber > 0" class="text-center fw-bold">Found <span id="risultato">{{ resultNumber }}</span>
    </section>
</template>


<style scoped lang="scss">
section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    font-size: 30px;
    color: white;
    background-color: black;

    #risultato {
        margin-left: 10px;
        background-color: green;
        padding: 10px;
        border-radius: 50px;
    }
}
</style>