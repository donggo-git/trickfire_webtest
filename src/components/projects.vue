<script setup lang="ts">
import SectionsTemplate from './SectionsTemplate.vue'
import SectionsTemplateResponsive from './SectionsTemplateResponsive.vue';
import headerTemplate from '../UI/headerTemplate.vue';
import { projectsSectionData } from '../data/data';

const isResponsive = screen.width <= 1000

</script>
<template>
    <headerTemplate title="PROJECTS" image="./src/assets/images/photo_section/wood_compressed.jpg" />

    <div class="container-fluid wide-screen-support">
        <section class="container-fluid gray_background">
            <!--HORIZONTAL ROW OVERVIEW STATEMENT-->

            <div class="row flex-nowrap row-pic-left row-padding">
                <img src="../assets/images/slanted_lunar_surface.png" />

                <div class="words-on-background">
                    <img src="../assets/images/right_block_body_2.png" />

                    <h1>Overview of Rovers</h1>

                    <p>
                        The NASA Robotics Mining Competition is a
                        competition hosted by NASA, where fifty teams across
                        the United States compete to build the best rover
                        that can mine under a simulated surface of the moon.
                        A rover starts at the home base, navigates through
                        obstacles, and then reaches a mining zone where it
                        has to break through a few layers. It then digs out
                        regolith (gravel) and transports it back to the home
                        base, where it deposits the regolith. The process is
                        repeated multiple times.

                        <br />
                        <br />

                        In six years, TrickFire has built four different
                        rovers, nearly building a new one for each year's
                        competition.
                    </p>
                </div>
            </div>

            <!--VERTICAL ROW OVERVIEW STATEMENT-->

            <div class="small-row-padding">
                <div class="small-stacked-row">
                    <img src="../assets/images/unslanted_lunar_surface.jpg" class="main-image" />
                    <h1>Overview of Rovers</h1>

                    <p>
                        The NASA Robotics Mining Competition is a
                        competition hosted by NASA, where fifty teams across
                        the United States compete to build the best rover
                        that can mine under a simulated surface of the moon.
                        A rover starts at the home base, navigates through
                        obstacles, and then reaches a mining zone where it
                        has to break through a few layers. It then digs out
                        regolith (gravel) and transports it back to the home
                        base, where it deposits the regolith. The process is
                        repeated multiple times.

                        <br />
                        <br />

                        In six years, TrickFire has built four different
                        rovers, nearly building a new one for each year's
                        competition.
                    </p>
                </div>
            </div>
        </section>

        <section class="container-fluid gray_background">
            <!--HORIZONTAL ROWS-->
            <SectionsTemplate v-if="!isResponsive" v-bind:sectionsDisplay="projectsSectionData" />
            <!--VERTIAL ROWS-->
            <SectionsTemplateResponsive v-else v-bind:sectionsDisplay="projectsSectionData" />

        </section>
    </div>
</template>
<style>
@import "../assets/css/projects.css";
</style>
