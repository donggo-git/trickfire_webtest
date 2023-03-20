
<script setup lang="ts">
import SectionsTemplate from './SectionsTemplate.vue';
import headerTemplate from '../UI/headerTemplate.vue';
import SectionsTemplateResponsive from './SectionsTemplateResponsive.vue';
import { aboutUsSectionData } from '../data/data';

const isResponsive = screen.width <= 1000

</script>


<template>
    <headerTemplate title="ABOUT US" image="./src/assets/images/photo_section/robot_parts_compressed.jpg" />

    <section class="container-fluid gray_background">
        <!--HORIZONTAL ROW MISSION STATEMENT-->

        <div class="container-fluid wide-screen-support">
            <div class="row flex-nowrap row-pic-left row-padding">
                <img src="../assets/images/slanted_trickfire_logo.png" />

                <div class="words-on-background">
                    <img src="../assets/images/right_block_body_2.png" />

                    <h1>Mission Statement</h1>

                    <p>
                        TrickFire is all about giving our members hands-on
                        education that can only be experienced working on a
                        large-scale project. For the last several years,
                        this project has been the NASA Robotics Mining
                        Competition, an annual event that pits fifty college
                        robotics teams around the nation to build the most
                        efficient autonomous lunar mining rover. The team
                        works year-round to design, manufacture, and test
                        the rover, just in time to travel to Kennedy Space
                        Center, Florida for the competition.
                        <br />
                        <br />
                        <br />
                        Our team's mission can be narrowed down into three
                        pillars:
                        <br />
                        1. Technical development by working on industry
                        leading robotics
                        <br />
                        2. Professional development by working with a large
                        scale team.
                        <br />
                        3. A strong community within the University of
                        Washington Bothell.
                    </p>
                </div>
            </div>

            <!--VERTICAL ROW MISSION STATEMENT-->

            <div class="row-padding">
                <div class="small-stacked-row">
                    <img src="../assets/images/trickfire_logo_rectangle.png" class="small-trickfire-logo" />

                    <h1>Mission Statement</h1>

                    <p>
                        Trickfire is all about giving our members hands-on
                        education that can only be experienced working on a
                        large-scale project. For the last several years,
                        this project has been the NASA Robotics Mining
                        Competition, and annual event that pits 50 college
                        robotics teams around the nation to build the most
                        efficient autonomous lunar mining rover. The team
                        works year-round to design, manufacture, and test
                        the rover, just in time to travel to Kennedy Space
                        Center, FL for the competition.
                        <br />
                        <br />
                        <br />
                        Our team's mission can be narrowed down into three
                        pillars:
                        <br />
                        1. Technical development by working on industry
                        leading robotics
                        <br />
                        2. Professional development by working with a large
                        scale team.
                        <br />
                        3. A strong community within the University of
                        Washington Bothell.
                    </p>
            </div>
        </div>

            <!--HORIZONTAL ROWS-->
            <SectionsTemplate v-if="!isResponsive" :sectionsDisplay="aboutUsSectionData" />
            <!--VERTIAL ROWS-->
            <SectionsTemplateResponsive v-else v-bind:sectionsDisplay="aboutUsSectionData" />
        </div>
    </section>


    <!--<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
                                                                                                                                                                                        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
                                                                                                                                                                                    </script>-->
</template>
<style>
@import "../assets/css/about_us.css";
</style>
