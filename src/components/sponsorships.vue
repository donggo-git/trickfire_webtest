<script lang="ts">
import '../scss/sponsorship.scss'
export default {

    data() {
        let sponsorshipList = [
            '/src/assets/images/sponsors/boeing.png',
            '/src/assets/images/sponsors/ieee.png',
            '/src/assets/images/sponsors/electroimpact.png',
            '/src/assets/images/sponsors/ultra-motion-logo.png',

            '/src/assets/images/sponsors/tmobile.jpg',
            '/src/assets/images/sponsors/STFC-Full-logo-(1).png',
            '/src/assets/images/sponsors/meadow.jpg',
            '/src/assets/images/sponsors/igus.png',

            '/src/assets/images/sponsors/download.jpg',
            '/src/assets/images/sponsors/dp.jpg',
            '/src/assets/images/sponsors/nvidia.png',
            '/src/assets/images/sponsors/SAF.png',



        ]
        return {
            sponsorshipList
        }
    }
}
</script>

<template>
    <header class="sponsorship__header">
        <div class="sponsorship__header__background">
            <div class="d-flex flex-column justify-content-center align-items-center sponsorship__header__content">
                <h1 class="m-0" style="color: white;">
                    Sponsorship
                </h1>
                <p class="fs-5 my-3" style="color: white;">
                    TrickFire relies on generous donations to purchase the necessary materials and equipment to build the
                    rover and travel to competitions. Your donations will directly impact the development of our students.
                    In-kind sponsorships are also a tax-favored solution to help our team get much-needed resources and
                    tools to help construct the robot. In addition to donations, we seek industry mentors. Our team strives
                    for professional quality work. As such, working with your organization’s professionals provides
                    invaluable experience that helps us reach that goal while giving you a direct connection to candidate
                    employees.
                </p>
            </div>
        </div>
    </header>

    <div class="sponsorship__howToSponsor">
        <h3 class="text-primary my-3 ms-5">How to Sponsor</h3>
        <div class="d-flex justify-content-between sponsorship__howToSponsor__content ms-5">
            <p class="fs-5 ">
                Please contact us at tfrbtcs@uw.edu if you are interested in sponsoring TrickFire Robotics. All donated
                funds
                go through our UW Foundation fund. Donate by going to <a href="">UW's Make a Gift page</a> and searching for
                the “UW
                Bothell Robotics Program Support Fund”.
            </p>
            <img src="../assets/images/howToSponsor logo.png" />
        </div>
    </div>

    <div class="pb-5 sponsorship__ourPartner">
        <h3 class="text-primary my-3 ms-5">Our partner</h3>
        <div class="justify-content-around sponsorship__ourPartner__sponsorList">

            <img :src="sponsor" v-for="sponsor in sponsorshipList" class="my-2" />

        </div>
    </div>
</template>

<style lang="scss"></style>