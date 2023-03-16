<script setup lang="ts">

import navbar from './UI/navbar.vue';
import footerUI from './UI/footerUI.vue';

</script>

<template>
    <navbar />

    <router-view />

    <footerUI id="footer"></footerUI>
</template>
<style></style>