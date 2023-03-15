<script>
export default {
    props: {
        image: String
    },
    data() { return {} }
}
</script>
<template>
    <div class="row flex-nowrap">
        <div class="divider-edges top-divider-edges-image"></div>

        <img :src="image">

        <div class="divider-edges top-divider-edges-image"></div>

    </div>
</template>

export {underlineArrowTemplate}
