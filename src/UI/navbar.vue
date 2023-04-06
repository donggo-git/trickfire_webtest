<script lang="ts" >
import '../scss/nav.scss'

const isResponsive = window.innerWidth < 1000
const navLinkList = [
    {
        linkTitle: 'HOME',
        linkRouteName: 'home'
    },
    {
        linkTitle: 'ABOUT US',
        linkRouteName: 'about_us'
    },
    {
        linkTitle: 'PROJECT',
        linkRouteName: 'projects'
    },
    {
        linkTitle: 'JOIN US',
        linkRouteName: 'join_us'
    },
    {
        linkTitle: 'SPONSORSHIP',
        linkRouteName: 'sponsorships'
    },
]
export default {

    data() {
        return {
            isResponsive,
            navLinkList

        }
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },
    newData: {
        currentRouteName() { }
    }
    //console.log(currentRouteName())
}

</script>

<template>
    <nav class="fs-5 position-fixed">
        <!--burger icon button-->
        <div class="pt-3 pb-2 px-1 mx-3 fs-2 nav__burger" data-toggle="collapse" data-target="#navBar__link">
            <font-awesome-icon :icon="['fas', 'bars']" />
        </div>

        <!--nav link-->
        <ul class="m-0 p-0" :class="isResponsive ? 'collapse' : ''" id="navBar__link">

            <li v-for="navLink in navLinkList" class="py-3 px-1 mx-3"
                :class="currentRouteName == navLink.linkRouteName ? 'navBar-activePage' : ''">
                <router-link :to="navLink.linkRouteName">
                    {{ navLink.linkTitle }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss"></style>