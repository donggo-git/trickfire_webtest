
const sectionsTemplate = `
<div v-for="section in sectionsDisplay">
    <div v-if="section.isImageRight" class="row flex-nowrap row-pic-right row-padding">
        <img v-bind:src="section.image"/>
        <div class="words-on-background">
            <img src="${window.location.href.includes('components') ?
        '../assets/images/fixed_index_header_left.png' :
        './assets/images/fixed_index_header_left.png'
    }">
            <h1>{{section.title}}</h1>
            <p>{{section.content}}
                <div v-if="section.link">
                    <br>
                    <a class="join-us-button link-in-text"
                        v-bind:href="section.link">
                        {{section.linkName}}
                    </a> 
                </div>
            </p>
            
        </div>
    </div>
    <div v-if="!section.isImageRight" class="row flex-nowrap row-pic-left row-padding">
        <img v-bind:src="section.image"/>
        <div class="words-on-background">
            <img src="${window.location.href.includes('components') ?
        '../assets/images/fixed_index_header_right.png' :
        './assets/images/fixed_index_header_right.png'
    }">
            <h1>{{section.title}}</h1>
            <p>{{section.content}}
                <div v-if="section.link">
                    <br>
                    <a class="join-us-button link-in-text"
                        v-bind:href="section.link">
                        {{section.linkName}}
                    </a> 
                </div>
            </p>
            
        </div>
        
    </div>
    <div class="space-after-rows"></div>
</div>
`
export { sectionsTemplate }
