<!-- Icons from https://icons.getbootstrap.com/ -->
<script setup lang="ts">
import { footerData } from '../data/data'

interface footerItemObject {
    link: string,
    svg: string,
    path: string
}

let currentYear = new Date().getFullYear();
</script>
<template>
    <footer id="footer">
        <section>
            <div class="container-fluid wide-screen-support">
                <p class="">
                    <svg width="24" height="" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path
                            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                    tfrbtcs@uw.edu
                </p>
                <ul class="social-media-icons">
                    <li v-for="item in footerData">
                        <a :href="item.link">
                            <svg :class="item.svg" viewBox="0 0 16 16">
                                <path :d="item.path" />
                            </svg>
                        </a>
                    </li>
                </ul>
                <p id="copyright-text">
                    Copyright &copy;
                    <!-- If change 2022, also change it in the script tag  -->
                    {{ currentYear }} TrickFire Robotics. All rights reserved. | Bothell, WA
                </p>
            </div>

        </section>
    </footer>
</template>
