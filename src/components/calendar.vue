<script lang="ts">
import '../scss/calendar.scss'

const dateInWeeks = ["Sunday", 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
const currentMonthAndDateInWeek = `${dateInWeeks[new Date().getDay()]}, ${months[new Date().getMonth()]}`
const currentDate = `${new Date().getDate()}${new Date().getDate() == 1 ? "ST" :
    new Date().getDate() == 2 ? "ND" :
        new Date().getDate() == 3 ? "RD" :
            "TH"
    }`;

let date = new Date()
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let monthW = months[currentMonth]

let calendar: Array<{
    active: boolean,
    date: number
}> = []

const generateCalendar = () => {
    let firstDateofMonth = new Date(currentYear, currentMonth, 1).getDay()//get first date of month
    let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate()//get last date of month
    let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate()//get last date of last month
    let lastDayofMonth = new Date(currentYear, currentMonth, lastDateofMonth).getDay()

    for (let i = firstDateofMonth; i > 0; i--) {

        calendar.push({
            active: false,
            date: lastDateofLastMonth - i + 1
        })
        //liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        calendar.push({
            active: true,
            date: i
        })
    }
    for (let i = lastDayofMonth; i < 6; i++) {
        calendar.push({
            active: false,
            date: i - lastDayofMonth + 1
        })
    }
}

generateCalendar()

export default {
    data() {
        return {
            currentDate,
            currentMonthAndDateInWeek,
            teamSchedule: [{
                team: '',
                color: '',
                time: ''
            }],
            currentYear,
            monthW,
            calendar
        }
    },
    methods: {
        handleNextMonth() {
            if (currentMonth < 11) {
                currentMonth++
            }
            else {
                currentMonth = 0
                this.currentYear++
            }
            this.monthW = months[currentMonth]
        },
        handlePreviousMonth() {
            if (currentMonth >= 1) {
                currentMonth--
            }
            else {
                currentMonth = 11
                this.currentYear--
            }
            this.monthW = months[currentMonth]
        }
    },
    props: ['calendarSchedule'],
    created() {
        this.teamSchedule = JSON.parse(JSON.stringify(this.calendarSchedule))
    }
}

</script>

<template>
    <div class="mt-2 d-flex calendar__container">
        <div class="bg-primary calendar--left d-flex flex-column align-items-center justify-content-center">
            <!--team calendar-->
            <p class="fs-3">TEAM CALENDAR</p>
            <!--current date-->
            <div class="my-4">
                <p class="fs-2">{{ currentMonthAndDateInWeek }}</p>
                <p class="fs-1 text-center">{{ currentDate }}</p>
            </div>
            <!--TEAM SCHEDULE-->
            <div class="calendar__teamSchedule">
                <p class=" mb-4 text-center fs-5">TEAM SCHEDULE</p>
                <div v-if="teamSchedule" v-for="schedule in teamSchedule">
                    <div class="d-flex align-items-center my-4">
                        <div class="mr-5 teamSchedule__colorMark" :style="{
                            'background-color': schedule.color,
                            height: '20px',
                            width: '20px'
                        }"></div>
                        <p class="my-0">

                            {{ schedule.team }} meeting {{ schedule.time }}
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <div class="bg-black calendar--right">
            <div class="my-3 d-flex calendar__monthNYear justify-content-center align-items-center">
                <button class="previousMonth" @click="handlePreviousMonth">
                    <font-awesome-icon :icon="['fas', 'chevron-left']" />
                </button>
                <p class="text-center">{{ monthW }}, {{ currentYear }}</p>
                <button class="nextMonth" @click="handleNextMonth">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                </button>
            </div>
            <div class="calendar__date">
                <div class="d-flex" v-for="date in calendar">
                    <p class="mx-2">{{ date.date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>