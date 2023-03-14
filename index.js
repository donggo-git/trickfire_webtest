/*import { sectionsTemplate } from "./UI/sectionsTemplate.js";
import { underlineArrowTemplate } from './UI/underlineArrowTemplate.js'
const { createApp } = Vue

const sections = [{
    title: "What We Do",
    content: "Throughout the year, the team develops a number of different skills as members research, design, and build the robot. Other members learn the skills of team management, financial responsibilities, and public relations. But most importantly, everyone gains the skills of professionalism that prepares them for their future work.",
    image: "./assets/images/slanted_rover_image_1.png"

}, {
    title: "Meet the Team",
    content: "The team is composed of five major sub-teams. The mechanical team is responsible for building and designing the robot. The electrical team is responsible for properly wiring the up whilst working closely with the mechanical team. The software team is responsible for making the robot function through autonomous or through teleoperated controls. The financial team is responsible for keeping the team logistically functional and securing funding. The outreach team is responsible for advertising TrickFire to the world through advertisements, social media, or through community participation.",
    image: "./assets/images/slanted_team_photo_rmc_2017.png"
},
{
    title: "How to Join",
    content: "We accept everyone and anyone who wants to join the team. As long as you have the will to learn, you will succeed. To join, simply fill out a form and we will get back to you. ",
    image: "./assets/images/slanted_teaching_new_member.png",
    linkName: "Join Us Here",
    link: './components/join_us.html'
}
];
let app = Vue.createApp({

    data() {

        let sectionsDisplay = sections.map((section, index) => {
            section.isImageRight = index % 2 == 0
            return section
        })
        console.log(sectionsTemplate)
        return {
            sectionsDisplay
        }
    },
    template:
        `
        
        <nav id="navbar"></nav>

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
            <underlineArrow image="assets/images/divider1.png"/>
        </section>

        <div class="container-fluid wide-screen-support">
            <section class="container-fluid gray_background" id="sections">
                <sections v-bind:sectionsDisplay= "sectionsDisplay" />
            </section>
        </div>
        
        <section class="container-fluid dark_gray_background">

            <underlineArrow image="assets/images/divider2.png"/>

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
        <footer id="footer"></footer>
    `

})

app.component('sections', {
    props: ['sectionsDisplay'],
    template: sectionsTemplate
})

app.component('underlineArrow', {
    props: ['image'],
    template: underlineArrowTemplate
})


app.mount('body')*/
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

