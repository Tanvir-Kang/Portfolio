import { ImageCardProps } from "../../components/ImageCard/cardTypes";
import { TextCardProps } from "../../components/TextCard/cardTypes";
import PROFILE_PICTURE from "../../Static/Images/IMG_2662.jpg"
import { icons } from "../../Static/Images/LanguageIcons";
import { LanguageCardType } from "../../components/LanguageCards/landCardTypes";

export const profilePicture: ImageCardProps = {
    title: "Profile Picture",
    image: PROFILE_PICTURE
}
export const profileDescription: TextCardProps = {
    titleText: "A little bit about me...",
    secondaryText: "I'm currently looking for a role which would allow me to build on my existing skills while providing the room to learn \
    new languages, frameworks, and the land of DevOps. I have an interest in both frontend and backend developement but would like to \
    continue to grow my knowledge of best practices, architecture, and creating efficient software.",
    bodyText: "Hello! I'm Tanvir, a junior level software developer based in Vancouver, BC. I'm a determined individual with a lot to learn about programming.\
    My defining characteristics are an ability to put away my ego when working with others, gritty when problems get tough, a very keen eye for details \
    and most importantly I try to learn something new everyday.",
}

export const PrimaryLanguages: LanguageCardType[] = [
    {
        imageURL: icons.typeScript,
        cardTitle: "Typescript"
    },
    {
        imageURL: icons.react,
        cardTitle: "React"
    },
    {
        imageURL: icons.java,
        cardTitle: "Java"
    }
];

export const SecondaryLanguage: LanguageCardType[] = [
    {
        imageURL: icons.CSharp,
        cardTitle: "C#"
    },
    {
        imageURL: icons.HTML,
        cardTitle: "HTML"
    },
    {
        imageURL: icons.CSS,
        cardTitle: "CSS"
    },
    {
        imageURL: icons.git,
        cardTitle: "git"
    },
    {
        imageURL: icons.springBoot,
        cardTitle: "Spring Boot"
    },
]