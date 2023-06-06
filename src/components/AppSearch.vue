<script>
// EXPORT
export default {
    name: "AppSearch",
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
                        <input class="form-control" type="text" id="search-character" placeholder="Search Character">
                    </div>

                    <div class="col-auto">
                        <div class="row">
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-2">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss"></style>