<script>
import { navData } from '../data/data';
export default {
    data() {
        return { navData }
    }
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
                        <li class="nav-item" v-for="link in navData">
                            <a class="nav-link" v-bind:href="link.href"><b>{{ link.linkTitle }}</b></a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </nav>
</template>