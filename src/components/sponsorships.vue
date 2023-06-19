<script lang="ts">
import '../scss/sponsorship.scss'
import row_blocks from './row_blocks.vue'
import { sponsorshipLogos } from '@/data/sponsorship_data'
export default {

    data() {
        return {
            sponsorshipLogos
        }
    },
    components: {
        row_blocks
    }
}
</script>

<template>
    <header class="sponsorship__header">
        <div class="sponsorship__header__background">
            <div class="d-flex flex-column justify-content-center align-items-center sponsorship__header__content">
                <h1 class="m-0 fw-semibold" style="color: white;">
                    SPONSORSHIP
                </h1>
                <p class="my-5" style="color: white;">
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

        <row_blocks image__left="./src/assets/Trickfire_image/slanted_image/sponsorship/slanted_teaching_new_member.png"
            image__right="./src/assets/Trickfire_image/original_image/sponsorship/slanted_teaching_new_member.png"
            text="Please contact us at tfrbtcs@uw.edu if you are interested in sponsoring TrickFire Robotics. All donated funds go through our UW Foundation fund. Donate by going to the link below and searching for the “UW Bothell Robotics Program Support Fund”."
            link="https://www.washington.edu/giving/make-a-gift/" linkName="UW's Make a Gift page" />

    </div>





    <div class="pb-5 sponsorship__ourPartner mt-5">
        <h3 class="text-primary my-3 ms-5">Our partner</h3>
        <div class="justify-content-around sponsorship__ourPartner__sponsorList">

            <img :src="sponsor" v-for="sponsor in sponsorshipLogos" class="my-2" />

        </div>
    </div>
</template>

<style lang="scss"></style>