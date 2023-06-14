<script lang="ts">
import '../scss/JoinUs.scss';

const SHEET_ID = '1rmibTT-UsrZfB9X58mcfgwKb8inYeoKoxYo3RletQ_s'
const SHEET_TITLE = 'Sheet1'
const SHEET_RANGE = 'A2:A2'
const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`

export default {

    data() {
        return {
            applicationDeadline: String
        }
    },
    methods: {
        async fetchData(fullURL: string) {
            const rawData = await fetch(fullURL)
            const data = await rawData.text()
            let returnData = JSON.parse(data.substr(47).slice(0, -2)).table.rows[0].c[0].v
            console.log(returnData)
            this.applicationDeadline = returnData
        }
    },
    mounted() {
        this.fetchData(FULL_URL)
    }
}

</script>
<template>
    <header id="join_us_header">
        <div id="join_us_header__background">
            <div id="join_us_header__content">
                <h1>
                    WHY JOIN?
                </h1>
                <p style="color: white;">
                    TrickFire's mission is to give students the hand-on experience and
                    skills in software, mechanical and electrical engineering, and business
                    skills, which will prepare students for their resumes, and they will be
                    able to talk about their work in TrickFire, while having fun along the way!
                    No previous robotic experience is needed. <b>{{ applicationDeadline }}</b>
                </p>
                <button id="join_us_button"><a id="join_us_link"
                        href="https://forms.office.com/Pages/ResponsePage.aspx?id=W9229i_wGkSZoBYqxQYL0i7wGfH_Ef9MlM3y37_kRLpUMEVVSDJTTFFOU0RNOEhNVVYyWUI2TjdOTyQlQCN0PWcu">Application
                        Link</a>
                </button>
            </div>
        </div>
    </header>
</template>