<script>
// Inserisco l'EXPORT
export default {
    name: 'SingleCharacter',
    props: {
        details: Object
    }
}
</script>


<!-- TEMPLATE -->
<template>
    <!-- Card character di esempio -->
    <div class="character text-center">
        <img class="img-fluid mb3" :src="details.image" :alt="details.name">
        <h4>{{ details.name }}</h4>
        <div>{{ details.status }}</div>
        <div class="font-weight-bold">{{ details.species }}</div>
    </div>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';

img {
    border-radius: 50%;
    box-shadow: 0 0 6px 3px rgba(#000, 0.15);
}

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
</style>
