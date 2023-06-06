<script>
// Importo lo STORE
import { store } from './../store.js';

// EXPORT
export default {
    name: "AppSearch",

    // Anche qui inseriamo i data dello store così da poterlo utilizzare
    data() {
        return {
            store
        }
    }
}
</script>



<template>
    <!-- Inserisco una barra di ricerca con componenti bootstrap -->
    <div class="conainer mb-3">
        <div class="row">
            <div class="col-12">
                <form class="row g-3 justify-content-center">
                    <div class="col-auto">
                        <label for="search-character" class="visually-hidden">Search character</label>

                        <!-- Aggancio il v-model al searchText, trim invece taglia gli spazi -->
                        <input class="form-control" type="text" id="search-character" placeholder="Search Character"
                            v-model.trim="store.searchText">
                    </div>

                    <div class="col-auto">
                        <div class="row">
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-2"
                                    @click.prevent="$emit('mysearch')">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss"></style>