<script setup lang="ts">
import SectionsTemplate from './SectionsTemplate.vue'
import headerTemplate from '../UI/headerTemplate.vue';
import { projectsSectionData } from '../data/data';

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
                    <img src="./src/assets/images/unslanted_lunar_surface.jpg" class="main-image" />
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
            <SectionsTemplate :sectionsDisplay="projectsSectionData" />

            <!--VERTIAL ROWS-->

            <div class="small-row-padding">
                <div class="small-stacked-row">
                    <h1>Houdini</h1>

                    <p>
                        Houdini, the most recent build, is the third
                        iteration of the excavator, dump, trunk, and tread
                        design. With NASA officially launching their Artemis
                        program, the NASA Robotics Mining Competition has
                        shifted its focus to Lunar mining. In response, our
                        newest iteration is a third of its predecessors
                        size, while being able to mine 20% deeper due to our
                        redesign of the arms kinematics.
                    </p>

                    <img src="./src/assets/images/unslanted_houdini.png" />
                </div>
            </div>

            <div class="small-row-padding">
                <div class="small-stacked-row">
                    <h1>Atlas</h1>

                    <p>
                        Atlas is the second iteration of the excavator,
                        dump, trunk, and tread design. Although the
                        fundamental design is the same as Grimlock’s, the
                        team completely overhaled the rover by adding in a
                        reinforced carbon fiber frame, sailcloth dumping
                        bin, and redesigning the drivetrain suspension. As a
                        result, Atlas, with its light carbon fiber frame,
                        now weighs in at 67 kilograms, a significant
                        reduction to prior iterations.
                    </p>

                    <img src="./src/assets/images/unslanted_atlas.png" />
                </div>
            </div>

            <div class="small-row-padding">
                <div class="small-stacked-row">
                    <h1>Grimlock</h1>

                    <p>
                        Our first mars rover capable of mining past the
                        powdery topsoil, and getting to the icy regolith
                        thirty centimeters underneath. Grimlock boasted a
                        fully dynamic digging arm with four degrees of
                        freedom, similar to a classic excavator, with a dump
                        truck style bin that was used to transport the mined
                        regolith, and tank treads that can drive over any
                        obstacle that could be thrown at it. With an
                        all-aluminum chassis Grimlock weighed in at just shy
                        of 80 kilograms.
                    </p>

                    <img src="./src/assets/images/unslanted_grimlock.png" />
                </div>
            </div>

            <div class="small-row-padding">
                <div class="small-stacked-row">
                    <h1>Daybreak</h1>

                    <p>
                        Our entry into the world of extraterrestrial mining,
                        Daybreak was a four wheeled drum digger capable of
                        mining fifteen centimeters below the surface of
                        Mars. The rover featured an all-aluminum frame
                        weighing in at 71 kilograms.
                    </p>

                    <img src="./src/assets/images/unslanted_daybreak.png" />
                </div>
            </div>

        </section>
    </div>
</template>
<style>
@import "../assets/css/projects.css";
</style>
