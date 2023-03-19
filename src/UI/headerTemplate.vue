<script setup lang="ts">
defineProps<{
    title: String,
    image: string
}>()
</script>

<template>
    <section>
        <div class="container-fluid photo-section" :style="{
            'background-image': 'url(' + image + ')'
        }">
            <h1>{{ title }}</h1>
        </div>
    </section>
</template>

<style></style>