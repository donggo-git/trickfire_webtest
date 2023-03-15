<script>

import SectionsTemplate from './components/sectionsTemplate.vue';
import navbar from './UI/navbar.vue';
import footerUI from './UI/footerUI.vue';
import underlineArrowTemplate from './UI/underlineArrowTemplate.vue';
import { homePageSectionData } from './data/data';

export default {

    components: {
        navbar,
        SectionsTemplate,
        footerUI,
        underlineArrowTemplate
    },
    data() {
        return { homePageSectionData };
    },
    //components: { Navbar }
}
</script>
<template>
    <nav id="navbar">
        <navbar />
    </nav>

    <section class="container-fluid dark_background">

        <div class="container-fluid wide-screen-support">
            <div class="row">

                <div class="col-sm-12 col-md-6 trickfire_logo_left_text">

                    <p class="trickfire_text">
                        <b><i>TRICKFIRE</i></b>
                        <br>
                        <b><i>ROBOTICS</i></b>
                    </p>

                    <p class="text-intro">
                        TrickFire Robotics is a student-led robotics team focused on providing a
                        unique educational experience through hands-on work on large scale projects.
                        Since 2016 the team has traveled to the Kennedy Space Center to represent the
                        University of Washington Bothell at the annual NASA Robotics Mining Competition.
                        A competition that pits fifty college teams to design and build a rover that can mine on the
                        surface of the moon.
                    </p>

                </div>

                <img src="assets/images/front_logo.svg" class="col trickfire_logo " alt="Trickfire Robotics Logo">

            </div>
        </div>
    </section>

    <section class="container-fluid dark_background">
        <underlineArrowTemplate image="assets/images/divider1.png" />
    </section>

    <div class="container-fluid wide-screen-support">
        <section class="container-fluid gray_background" id="sections">
            <SectionsTemplate v-bind:sectionsDisplay="homePageSectionData" />
        </section>
    </div>

    <section class="container-fluid dark_gray_background">

        <underlineArrowTemplate image="assets/images/divider2.png" />

        <!--calendar-->
        <div class="row team-calendar-text">
            <h1>Team Calendar</h1>
        </div>

        <div class="row" style="padding-top: 1vw;">

            <div class="calendar-block">
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=uw.edu_m3ikh4g2grmsoaejsf26gb5stg%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                    frameborder="0" scrolling="no" class="calendar-iframe small_calendar-iframe"></iframe>
            </div>

        </div>
        <div class="space-after-rows"></div>
    </section>
    <footerUI id="footer"></footerUI>
</template>
<style></style>