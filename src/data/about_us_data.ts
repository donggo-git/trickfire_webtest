import type { sectionsDisplayObject } from "./sectionDisplay_interface";

const basePath = 'https://raw.githubusercontent.com/TrickfireRobotics/TrickfireRobotics.github.io/dev/src/assets/Trickfire_image/slanted_image/about_us/'
const baseResponsivePath = 'https://raw.githubusercontent.com/TrickfireRobotics/TrickfireRobotics.github.io/dev/src/assets/Trickfire_image/original_image/'

const aboutUsSectionData: sectionsDisplayObject[] = [{
    title: "SOFTWARE TEAM",
    content: "The software team focusses on rover functionality and rover autonomy. They have to work diligently to make sure that their code is properly written, or else it can spell disaster for the robot. From low level CAN bus programming to high level autonomous navigational algorithms, this team does a lot! ",
    image: `${basePath}slanted_software.png`,
    imageResponsive: `${baseResponsivePath}unslanted_software.png`
}, {
    title: "MECHANICAL TEAM",
    content: "The mechanical team focusses on the physical design and assembly of the robot. The team faces the challenge of designing a rover that can mine up to its height below the surface while keeping the weight to under 60kg. The team succeeds in producing an efficient rover by incorporating various light weight composites with elegant design.",
    image: `${basePath}slanted_drilling_right.png`,
    imageResponsive: `${baseResponsivePath}unslanted_drilling_full.png`
},
{
    title: "ELECTRICAL TEAM",
    content: "The electrical team focus on circuitry for signal and power management.With every motor and sensor needing different voltage levels and power distribution, the team works hard to ensure all of them are efficiently integrated through circuit design and power control.With their help the transition between mechanical parts and the software control is seamless.",
    image: `${basePath}slanted_electrical.png`,
    imageResponsive: `${baseResponsivePath}unslanted_electrical.png`
},
{
    title: "FINANCE TEAM",
    content: "The finance team is the backbone of the backbone of TrickFire's technical side. Their goal is to secure funding for everything that is done in the team - to build a rover can cost tens of thousands of dollars. It is the job of this team to plan years in advance to ensure the coffers are always filled, either by applying for grants or finding industry sponsors.",
    image: `${basePath}slanted_finance.png`,
    imageResponsive: `${baseResponsivePath}unslanted_finance.png`
},
{
    title: "OUTREACH TEAM",
    content: "If a robotics team makes a rover, but no one knows about it, was the rover really built? Our outreach team puts TrickFire Robotics on the map! Being the backbone of TrickFire’s technical side includes:" +
        "\n• Recruiting new members" +
        "\n• Reaching out to local industry" +
        "\n• Handling public relations" +
        "\n• Keeping our social media up to date",
    image: `${basePath}slanted_outreach_2016.png`,
    imageResponsive: `${baseResponsivePath}unslanted_outreach_2016.jpg`
}
];
aboutUsSectionData.forEach((section, index) => {
    section.order = 0;
    section.imageOrder = 'left';
    section.contentOrder = 'right';
    return section
})

export { aboutUsSectionData }