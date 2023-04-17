<script lang="ts">
import '../scss/homePage.scss';
import fetchData from '@/ultility/fetchData';

//const getData = await fetchData('https://docs.google.com/spreadsheets/d/1xWeLfTkvXT0XyZYd1beOC25Ykp8rG9pdsav7u7VS4A0/gviz/tq?sheet=SHEET1&range=D2:E6')
//console.log(getData)
const scrollBtnHandle = () => {
    console.log("Hello")
    window.scrollBy(0, 100);
}

const windowWidth = window.innerWidth
export default {
    data() {

        return {}
    },
    methods: {
        scrollBtnHandle() {
            window.scrollBy(0, windowWidth);
        }
    }
}



</script>

<template>
    <div class="page">
        <header>
            <!--header content-->
            <div class="header__content">

                <h1 class="m-0 d-flex flex-column justify-content-center">
                    <span class="text-primary my-1">TRICKFIRE</span>
                    ROBOTICS
                </h1>
                <img src="../images/android-chrome-512x512.png" class=" header__image" />
                <p class="fs-5 m-0">
                    TrickFire Robotics is a student-led robotics team focused on providing a unique educational experience
                    through hands-on work on large scale projects. Since 2016 the team has traveled to the Kennedy Space
                    Center
                    to represent the University of Washington Bothell at the annual NASA Robotics Mining Competition. A
                    competition that pits fifty college teams to design and build a rover that can mine on the surface of
                    the
                    moon.
                </p>
            </div>
            <!--header scroll down button-->
            <div class="d-flex flex-column header__scrollBtn" @click="scrollBtnHandle">

                <div class="d-flex header__scrollGreen">
                    <div class="bg-primary header__btn header__scroll--left"></div>
                    <div class="bg-primary header__btn header__scroll--right"></div>
                </div>

                <div class="d-flex header__scrollWhite">
                    <div class="bg-white header__btn header__scroll--left"></div>
                    <div class="bg-white header__btn header__scroll--right"></div>
                </div>
            </div>
        </header>
        <!--calendar-->
    </div>
</template>

<style lang="scss"></style>