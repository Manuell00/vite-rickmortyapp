<script>
// Inserisco l'EXPORT
export default {
    name: 'AppLoader',
    props: ['label']
}
</script>

<!-- TEMPLATE -->
<template>
    <div class="loader">
        <div class="text">{{ label }}</div>
        <svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 32">
            <path d="M18 13 L26 2 8 13 14 19 6 30 24 19 Z" />
        </svg>
        <div class="text">Loading...</div>
    </div>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/partials/variables';

.loader {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
}
</style>
