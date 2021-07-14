import { ImageCardProps } from "../../components/ImageCard/cardTypes";
import { TextCardProps } from "../../components/TextCard/cardTypes";
import PROFILE_PICTURE from "../../Static/Images/IMG_2662.jpg"
 
export const profilePicture : ImageCardProps = {
    title: "Profile Picture",
    image: PROFILE_PICTURE
}
export const profileDescription : TextCardProps = {
    titleText: "A little bit about me",
    secondaryText: "My technical experience consists of working in a microservice based Java Spring Boot project where I applied principles of SOLID, and Clean Code to produce reusable and maintainable functions. Some details include inheriting an existing stats calculation service for a golf simulator where I reduced the runtime complexity of bottleneck functions. I also led the integration effort between our mobile application and API where I investigated and solved integration woes prior to release. My front-end experience is with creating React Web Apps with Typescript, Material UI, Bootstrap, applying custom theming.",
    bodyText: "Hello! I am an entry level software engineer in search of a junior to intermediate level engineering role. I am a personable developer who loves to take on a challenge. My personal goals are continuous improvement and consistent learning to keep my skill set evolving. I love problems that require grit and perseverance to solve. I would be a great fit for this role due to my experience already having been working remotely for over a year, my skill overlap with the requirements and my attention to detail.",
}