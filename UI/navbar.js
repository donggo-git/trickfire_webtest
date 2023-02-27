const { createApp } = Vue

let arrHref = [
    {
        linkTitle: 'Home',
        href: '',
        defaultHref: './index.html',
        componentHref: '../index.html'
    },
    {
        linkTitle: 'About Us',
        href: '',
        defaultHref: './components/about_us.html',
        componentHref: './about_us.html'
    },
    {
        linkTitle: 'Projects',
        href: '',
        defaultHref: './components/projects.html',
        componentHref: './projects.html'

    },
    {
        linkTitle: 'Join Us',
        href: '',
        defaultHref: './components/join_us.html',
        componentHref: './join_us.html'
    },
    {
        linkTitle: 'Sponsorships',
        href: '',
        defaultHref: './components/sponsorships.html',
        componentHref: './sponsorships.html'
    },
]

let app = Vue.createApp({

    data() {
        //if at the home page href in nav will mostly be ./components/page
        //otherwise href in nav will be ./page
        if (window.location.href.includes('components')) {
            arrHref.forEach(item => item.href = item.componentHref)
        } else {
            arrHref.forEach(item => item.href = item.defaultHref)
        }
        return { arrHref }
    },
    template: `
    <div class="container-fluid wide-screen-support">
        <section class="navbar navbar-expand-md">
            <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav"></div>
                <ul class="navbar-nav">
                    <navLink 
                        v-for="link in arrHref" 
                        v-bind:linkTitle="link.linkTitle" 
                        v-bind:href="link.href"    
                    />
                </ul>
            </div>
        </section>
    </div>
    `
})

app.component('navLink', {
    props: ['linkTitle', 'href'],
    template: `
        <li class="nav-item">
            <a class="nav-link" v-bind:href="href"><b>{{linkTitle}}</b></a>
        </li>
    `
})

app.mount('.nav')