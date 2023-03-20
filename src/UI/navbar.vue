<script setup lang="ts">
import { navData } from '../data/data';

//navigation animation for scrolling
let prevScroll = window.pageYOffset;
window.onscroll = function () {
    let currentScroll = window.pageYOffset;
    let navbar = document.getElementById("navbar");

    if (prevScroll > currentScroll) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-59px";
    }
    prevScroll = currentScroll;
}

</script>
<template>
    <nav id="navbar">
        <div class="container-fluid wide-screen-support">
            <section class="navbar navbar-expand-md">
                <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="navbar-nav"></div>
                    <ul class="navbar-nav">
                        <!--<navLink  v-bind:linkTitle="link.linkTitle" v-bind:href="link.href" />-->
                        <li class="nav-item" v-for="link in navData" :key="link.linkTitle">
                            <router-link :to="{ name: link.linkName }" class="nav-link" :key="link.linkTitle">
                                <b>{{
                                    link.linkTitle
                                }}</b>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </nav>
</template>

<style>
.nav-item a:hover {
    color: white;
}

.nav-item a:active {
    color: inherit;
}

nav {
    background-color: #34c934;
    /*makes the bootstrap navbar this green color*/
    min-height: 59px;
    position: fixed;
    z-index: 1;
    width: 100%;
    transition: top 0.3s;

}

.nav-link {
    font-size: 18px;
    font-weight: 500;
    margin: 0 10px;
    color: black;
    transition: color 0.2s;
}

.nav-link:hover {
    color: white;
}

.navbar-dark:focus {
    outline: none;
}
</style>