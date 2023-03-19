import type { sectionsDisplayObject } from "./sectionDisplay_interface";

const aboutUsSectionData: sectionsDisplayObject[] = [{
    title: "Mechanical",
    content: "The mechanical team focusses on the physical design and assembly of the robot. The team faces the challenge of designing a rover that can mine up to its height below the surface while keeping the weight to under 60kg. The team succeeds in producing an efficient rover by incorporating various light weight composites with elegant design.",
    image: "./assets/images/slanted_drilling_right.png"

}, {
    title: "Software",
    content: "The software team focusses on rover functionality and rover autonomy. They have to work diligently to make sure that their code is properly written, or else it can spell disaster for the robot. From low level CAN bus programming to high level autonomous navigational algorithms, this team does a lot! ",
    image: "./assets/images/slanted_software.png"
},
{
    title: "Electrical",
    content: "The electrical team focus on circuitry for signal and power management.With every motor and sensor needing different voltage levels and power distribution, the team works hard to ensure all of them are efficiently integrated through circuit design and power control.With their help the transition between mechanical parts and the software control is seamless.",
    image: "./assets/images/slanted_electrical.png",
},
{
    title: "Finance",
    content: "The finance team is the backbone of the backbone of TrickFire's technical side. Their goal is to secure funding for everything that is done in the team - to build a rover can cost tens of thousands of dollars. It is the job of this team to plan years in advance to ensure the coffers are always filled, either by applying for grants or finding industry sponsors.",
    image: "./assets/images/slanted_finance.png",
},
{
    title: "Outreach",
    content: "If a robotics team makes a rover, but no one knows about it, was the rover really built? Our outreach team puts TrickFire Robotics on the map! Being the backbone of TrickFire’s technical side includes:",
    image: "./assets/images/slanted_outreach_2016.png",
}
];
aboutUsSectionData.forEach((section, index) => {
    section.order = 0;
    section.imageOrder = 'left';
    section.contentOrder = 'right';
    return section
})

export { aboutUsSectionData }