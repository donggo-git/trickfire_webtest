<script setup lang="ts">
interface sectionsDisplayObject {
    title: string,
    content: string,
    image: string,
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
    <div v-for="section in sectionsDisplay">
        <div class="row flex-nowrap row-padding d-flex" :class="'row-pic-' + section.contentOrder">
            <img v-bind:src="section.image" :class="'order-' + section.order" />
            <div v-if="section.order != undefined" class="words-on-background" :class="'order-' + (2 - section.order)">
                <img :src="'./src/assets/images/fixed_index_header_' + section.imageOrder + '.png'">
                <h1>{{ section.title }}</h1>
                <p>{{ section.content }}
                <div v-if="section.link">
                    <br>
                    <router-link v-if="section.link" class="link-in-text section_button" :to="'join_us'">
                        {{ section.linkName }}
                    </router-link>
                </div>
                </p>

            </div>
        </div>


    </div>
    <div class="space-after-rows"></div>
</template>

<style>
.section_button {
    font-size: 2rem;
}
</style>