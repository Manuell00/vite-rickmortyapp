<script>
// Importo lo STORE
import { store } from './../store.js';

// Importo i COMPONENTI
import SingleCharacter from './SingleCharacter.vue'

// Inserisco l'EXPORT
export default {
    name: 'CharactersList',
    components: {
        SingleCharacter
    },

    // Anche qui inseriamo i data dello store così da poterlo utilizzare
    data() {
        return {
            store
        }
    }
}
</script>


<!-- TEMPLATE -->
<template>
    <section class="container">
        <div class="row">
            <div v-for="character in store.charactersList" :key="character.id" class="col-6 col-md-4 col-lg-3 mb-3">
                <SingleCharacter :details="character" />
            </div>
        </div>
    </section>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';

h4 {
    text-transform: capitalize;

    &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        margin: 1rem auto
    }
}

img {
    border-radius: 50%;
    box-shadow: 0 0 6px 3px rgba(#000, 0.15);
}
</style>
