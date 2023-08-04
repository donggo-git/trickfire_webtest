<script lang="ts" >
import '../scss/nav.scss'

const isResponsive = window.innerWidth < 1000
const navLinkList = [
    {
        linkTitle: 'HOME',
        linkRouteName: '/'
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
        let navTop = '0%'
        let prevScrollPos = window.pageYOffset;

        return {
            isResponsive,
            navLinkList,
            prevScrollPos,
            navTop
        }
    },

    //handle link
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },
    methods: {
        showHideNavHandle() {
            let currentScrollPos = window.pageYOffset;
            if (this.prevScrollPos <= currentScrollPos && window.innerWidth > 1000) {
                this.navTop = '-80px'
            }
            else {
                this.navTop = '0%'
            }
            this.prevScrollPos = currentScrollPos;
        }
    },
    created() {
        window.addEventListener('scroll', this.showHideNavHandle)
    }


}

</script>

<template>
    <nav class="fs-5 position-fixed navbar-expand-md" v-on:scroll="showHideNavHandle" v-bind:style="{
        top: navTop
    }">
        <!--burger icon button-->
        <div class="pt-3 pb-2 px-1 mx-3 fs-2 nav__burger text-black navbar-toggle" data-toggle="collapse"
            data-target="#navBar__link">
            <font-awesome-icon :icon="['fas', 'bars']" />
        </div>

        <!--nav link-->
        <div class="collapse navbar-collapse" id="navBar__link">
            <ul class="m-0 p-0" :class="isResponsive ? 'navbar-nav' : ''">

                <li v-for="navLink in navLinkList" class="py-3 px-1 mx-3 nav-item" :key="navLink.linkTitle" :class="(currentRouteName == navLink.linkRouteName) ||
                    (currentRouteName == 'home' && navLink.linkTitle == 'HOME') ? 'navBar-activePage' : ''">
                    <router-link :to="navLink.linkRouteName" class="text-black nav-link">
                        {{ navLink.linkTitle }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss"></style>