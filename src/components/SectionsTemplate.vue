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

const props = defineProps<{
    sectionsDisplay: Array<sectionsDisplayObject>
}>()
/*export default {
    data() { return {} }
}*/

</script>

<template>
    <div v-for="section in sectionsDisplay">
        <div class="row flex-nowrap row-padding d-flex" :class="'row-pic-' + section.contentOrder">
            <img v-bind:src="section.image" :class="'order-' + section.order" />
            <div v-if="section.order != undefined" class="words-on-background" :class="'order-' + (2 - section.order)">
                <img :src="'../assets/images/fixed_index_header_' + section.imageOrder + '.png'">
                <h1>{{ section.title }}</h1>
                <p>{{ section.content }}
                <div v-if="section.link">
                    <br>
                    <a class="join-us-button link-in-text" v-bind:href="section.link">
                        {{ section.linkName }}
                    </a>
                </div>
                </p>

            </div>
        </div>


    </div>
    <div class="space-after-rows"></div>
</template>

<style></style>