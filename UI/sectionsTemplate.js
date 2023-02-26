const sectionsTemplate = `
<div v-for="section in sectionsDisplay">
    <div v-if="section.isImageRight" class="row flex-nowrap row-pic-right row-padding">
        <img v-bind:src="section.image"/>
        <div class="words-on-background">
            <img src="./assets/images/fixed_index_header_left.png">
            <h1>{{section.title}}</h1>
            <p>{{section.content}}</p>
        </div>
    </div>
    <div v-if="!section.isImageRight"class="row flex-nowrap row-pic-left row-padding">
        <img v-bind:src="section.image"/>
        <div class="words-on-background">
            <img src="./assets/images/fixed_index_header_right.png">
            <h1>{{section.title}}</h1>
            <p>{{section.content}}</p>
        </div>
        
    </div>
    <div class="space-after-rows"></div>
</div>
`
export { sectionsTemplate }
