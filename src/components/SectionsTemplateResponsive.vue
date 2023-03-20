<script setup lang="ts">
interface sectionsDisplayObject {
    title: string,
    content: string,
    image: string,
    imageResponsive?: string,
    linkName?: string,
    link?: string,
    order?: number,
    imageOrder?: string,
    contentOrder?: string
}

defineProps<{
    sectionsDisplay: Array<sectionsDisplayObject>
}>()

</script>
<template>
    <div class="small-row-padding" v-for="section in sectionsDisplay">
        <div class="small-stacked-row">
            <h1>{{ section.title }}</h1>

            <p>
                {{ section.content }}
                <router-link v-if="section.link" class="link-in-text section_button" :to="'join_us'">
                    {{ section.linkName }}
                </router-link>
            </p>

            <img :src="section.imageResponsive" />
        </div>
    </div>
    <div class="space-after-rows"></div>
</template>

<style>
.section_button {
    font-size: 1.5rem;
}
</style>