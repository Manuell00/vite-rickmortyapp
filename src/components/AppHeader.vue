<script>
// Inserisco l'EXPORT
export default {
    name: 'AppHeader',
    props: ['message']
}
</script>

<!-- TEMPLATE -->
<template>
    <header class="container">
        <h1 class="text-center my-5">{{ message }}</h1>
    </header>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';

h1 {
    font-weight: 700;
}
</style>
