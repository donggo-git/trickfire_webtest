<script lang="ts">
import '../scss/AboutUs.scss';
import { aboutUsSectionData } from '../data/about_us_data.ts';

  export default {
    name: 'MyComponent',
    data() {
      return {
        aboutUsSectionData: aboutUsSectionData
      }
    }
  }



</script>

<template>
    <div class="page">
        <header>
            <div class = "header__background">
                <div class="header__content">
                    <h1>
                        <p class="m-0 d-flex flex-column justify-content-center">
                            <span class="fs-1" style="color: white;">MEET OUR TEAM</span>
                        </p>
                    </h1>
                    <p class ="fs-4 m-0" style="color: white;">
                        Our team is composed of five major sub-teams including 
                        mechanical team, electrical team, software team, financial team, 
                        and outreach team. Our mission is to provide the technical and 
                        professional development of our members by working with a 
                        diverse group of people on industry leading robotics, as well as 
                        building a strong community in UW Bothell.
                    </p>
                </div>
            </div>
        </header>

        <section>
            <div class="rows">
<!--SOFTWARE-->            
                <div class="image__container">
                    <div class="image__left">
                        <picture>
                            <source srcset="../assets/images/unslanted_software.png" media="(max-width: 1000px)">
                            <source srcset="../assets/images/slanted_software.png">
                            <img src="../assets/images/slanted_software.png" >
                        </picture>
                    </div>

                        
                    <div class="words-on-background" >
                        <img src="../assets/images/fixed_index_header_left.png" />

                        <div class="text-container" >
                                <span class="fs-2">SOFTWARE TEAM</span>
                                <p>{{ aboutUsSectionData[1].content }}</p> 
                        </div>
                    </div>      
                </div>

                <div class="image__container responsive">
                    <div class="first-block responsive"> 
                        <div class="image__left responsive">
                            <img src="../assets/images/unslanted_software.png">
                        </div>
                        <div class="words-on-background responsive">
                            <span class="fs-2">SOFTWARE TEAM</span>
                        </div>
                    </div>

                    <div class="second-block responsive">    
                        <div class="image__left responsive">
                            <img src="../assets/images/unslanted_software.png">
                        </div>

                        <div class="span__container responsive">
                            <p>{{ aboutUsSectionData[1].content }}</p>
                        </div>
                    </div>
                </div>


<!--MECHANICAL-->
                <div class="image__container">
                    <div class="image__left">
                        <picture>
                            <source srcset="../assets/images/unslanted_drilling_full.png" media="(max-width: 1000px)">
                            <source srcset="../assets/images/slanted_drilling_right.png">
                            <img src="../assets/images/slanted_drilling_right.png" >
                        </picture>
                    </div>

                    <div class="words-on-background" >
                        <img src="../assets/images/fixed_index_header_left.png" />

                        <div class="text-container" >
                            <span class="fs-2">MECHANICAL TEAM</span>
                            <p>{{ aboutUsSectionData[0].content }}</p> 
                        </div>
                    </div> 
                </div>

                <div class="image__container responsive">
                    <div class="first-block responsive"> 
                        <div class="image__left responsive">
                            <img src="../assets/images/unslanted_drilling_full.png">
                        </div>
                        <div class="words-on-background responsive">
                            <span class="fs-2">MECHANICAL TEAM</span>
                        </div>
                    </div>

                    <div class="second-block responsive">    
                        <div class="image__left responsive">
                            <img src="../assets/images/unslanted_drilling_full.png">
                        </div>

                        <div class="span__container responsive">
                            <p>{{ aboutUsSectionData[0].content }}</p>
                        </div>
                    </div>
                </div>
<!--ELECTRICAL-->
                <div class="image__container">
                    <div class="image__left">
                        <picture>
                            <source srcset="../assets/images/unslanted_electrical.png" media="(max-width: 1000px)">
                            <source srcset="../assets/images/slanted_electrical.png">
                            <img src="../assets/images/slanted_electrical.png" >
                        </picture>
                    </div>

                    <div class="words-on-background" >
                        <img src="../assets/images/fixed_index_header_left.png" />

                        <div class="text-container" >
                            <span class="fs-2">ELECTRICAL TEAM</span>
                            <p>{{ aboutUsSectionData[2].content }}</p> 
                        </div>
                    </div>                    
                </div>

                <div class="image__container responsive">
                    <div class="first-block responsive"> 
                        <div class="image__left responsive">
                            <img src="../assets/images/unslanted_electrical.png">
                        </div>
                        <div class="words-on-background responsive">
                            <span class="fs-2">ELECTRICAL TEAM</span>
                        </div>
                    </div>

                    <div class="second-block responsive">    
                        <div class="image__left responsive">
                            <img src="../assets/images/unslanted_electrical.png">
                        </div>

                        <div class="span__container responsive">
                            <p>{{ aboutUsSectionData[2].content }}</p>
                        </div>
                    </div>
                </div>
<!--FINANCE-->
                <div class="image__container">
                    <div class="image__left">
                        <picture>
                            <source srcset="../assets/images/unslanted_finance.png" media="(max-width: 1000px)">
                            <source srcset="../assets/images/slanted_finance.png">
                            <img src="../assets/images/slanted_finance.png" >
                        </picture>
                    </div>

                    <div class="words-on-background" >
                        <img src="../assets/images/fixed_index_header_left.png" />

                        <div class="text-container" >
                            <span class="fs-2">FINANCE TEAM</span>
                            <p>{{ aboutUsSectionData[3].content }}</p> 
                        </div>
                    </div>
                </div>

                <div class="image__container responsive">
                    <div class="first-block responsive"> 
                        <div class="image__left responsive">
                            <img src="../assets/images/unslanted_finance.png">
                        </div>
                        <div class="words-on-background responsive">
                            <span class="fs-2">FINANCE TEAM</span>
                        </div>
                    </div>

                    <div class="second-block responsive">    
                        <div class="image__left responsive">
                            <img src="../assets/images/unslanted_finance.png">
                        </div>

                        <div class="span__container responsive">
                            <p>{{ aboutUsSectionData[3].content }}</p>
                        </div>
                    </div>
                </div>
<!--OUTREACH-->
                <div class="image__container">
                    <div class="image__left">
                        <picture>
                            <source srcset="../assets/images/unslanted_outreach_2016.jpg" media="(max-width: 1000px)">
                            <source srcset="../assets/images/slanted_outreach_2016.png">
                            <img src="../assets/images/slanted_outreach_2016.png" >
                        </picture>
                    </div>

                    <div class="words-on-background" >
                        <img src="../assets/images/fixed_index_header_left.png" />

                        <div class="text-container" >
                            <span class="fs-2">OUTREACH TEAM</span>
                            <p>
                                {{ aboutUsSectionData[4].content }}
                                <ul>
                                    <li>Recruiting new members</li>
                                    <li>Reaching out to local industry</li>
                                    <li>Handling public relations</li>
                                    <li>Keeping our social media up to date</li>
                                </ul>
                            </p> 
                        </div>
                    </div>
                </div>

                <div class="image__container responsive">
                    <div class="first-block responsive"> 
                        <div class="image__left responsive">
                            <img src="../assets/images/unslanted_outreach_2016.jpg">
                        </div>
                        <div class="words-on-background responsive">
                            <span class="fs-2">OUTREACH TEAM</span>
                        </div>
                    </div>

                    <div class="second-block responsive">    
                        <div class="image__left responsive">
                            <img src="../assets/images/unslanted_outreach_2016.jpg">
                        </div>

                        <div class="span__container responsive">
                            <p>
                                {{ aboutUsSectionData[4].content }}
                                <ul>
                                    <li>Recruiting new members</li>
                                    <li>Reaching out to local industry</li>
                                    <li>Handling public relations</li>
                                    <li>Keeping our social media up to date</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </div>
</template>
<style lang="scss"></style>