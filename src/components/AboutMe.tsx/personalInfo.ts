import { ImageCardProps } from "../ImageCard/cardTypes";
import { TextCardProps } from "../TextCard/cardTypes";
import PROFILE_PICTURE from "../../Static/Images/IMG_2662.jpg"
 
export const profilePicture : ImageCardProps = {
    title: "Profile Picture",
    image: PROFILE_PICTURE
}
export const profileDescription : TextCardProps = {
    titleText: "A little bit about me",
    bodyText: "Body",
    secondaryText: "Introduction"
}