<script setup lang="ts">

import SectionsTemplate from './SectionsTemplate.vue';
import underlineArrowTemplate from '../UI/underlineArrowTemplate.vue';
import { homePageSectionData } from '../data/data';



</script>
<template>
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

                <img src="../assets/images/front_logo.svg" class="col trickfire_logo " alt="Trickfire Robotics Logo">

            </div>
        </div>
    </section>

    <section class="container-fluid dark_background">
        <underlineArrowTemplate image="./src/assets/images/divider1.png" />
    </section>

    <div class="container-fluid wide-screen-support">
        <section class="container-fluid gray_background" id="sections">
            <SectionsTemplate v-bind:sectionsDisplay="homePageSectionData" />
        </section>
    </div>

    <section class="container-fluid dark_gray_background">

        <underlineArrowTemplate image="./src/assets/images/divider2.png" />

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
</template>
<style>
.trickfire_text {
    color: #dfdfdf;
    font: bold;
    font-size: calc(clamp(3rem, 7vw, 6rem));
    white-space: normal;
}

.text-intro {
    font-size: 20px;
    font-weight: 500;
    color: #dfdfdf;
}

.trickfire_logo_left_text {
    margin-left: 10%;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    margin-top: 5%;
}

.trickfire_logo {
    margin-top: 5%;
    margin-left: 5%;
    width: 100%;
    height: 100%;
    max-width: calc(clamp(15rem, 20vw, 18rem));
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
}

.join-us-button {
    text-align: center;
    font-size: 40px;
}

/*calendar*/
.calendar-block {
    margin: 0 auto;
}

.calendar-iframe {
    height: calc(clamp(37rem, 50vh, 70rem));
    width: calc(clamp(40rem, 70vw, 100rem));
}

/*For the title screen*/
@media only screen and (max-width: 767.5px) {
    .trickfire_text {
        color: aliceblue;
        font: bold;
        font-size: 50px;
        text-align: center;
    }

    .text-intro {
        font-size: 20px;
        font-weight: 500;
        color: #e9e9e9;
        text-align: center;
    }

    .trickfire_logo_left_text {
        margin-left: 0%;
        margin-top: 0%;
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
    }

    .trickfire_logo {
        content: url("../images/front_logo.svg");
        max-width: 20%;
        max-height: 60%;
        margin-left: 40%;
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
    }

    .small_calendar-iframe {
        height: calc(max(5rem, 70vw));
        width: calc(max(5rem, 95vw));
    }
}

.top-divider-edges-image {
    background-image: url("../images/divider1_tip.png");
}

.bottom-divider-edges-image {
    background-image: url("../images/divider2_tip.png");
}

.divider-edges {
    width: calc((100vw - 2000px) / 2);
    background-repeat: repeat-x;
}

.team-calendar-text {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    font-size: calc(clamp(2rem, 10vw, 6rem));
}
</style>