import { ProjectCardProps } from "../ProjectCard/cardTypes";
import  SAMPLE_IMAGE  from "../../Static/Images/codingImage.jpg" 

const UnityProject: ProjectCardProps = {
    imageTitle: "Unity VR Game",
    imageURL: SAMPLE_IMAGE,
    textTitle: "Bink Boxing",
    subTitles: "Unity VR Game",
    textDescription: "Written with C# in Unity with the Oculus XR plugin, a simple game where the player fights an animated bot in a boxing gym. The bot uses a state transition table to vary between animations and punches. The player can move in 3D space using a custom made player controller which receives input from an Oculus Quest 2 controller",
}
const BlueWhaleDetail: ProjectCardProps = {
    imageTitle: "Unity VR Game",
    imageURL: SAMPLE_IMAGE,
    textTitle: "Blue Whale Detail",
    subTitles: "React Web App",
    textDescription: "Written with C# in Unity with the Oculus XR plugin, a simple game where the player fights an animated bot in a boxing gym. The bot uses a state transition table to vary between animations and punches. The player can move in 3D space using a custom made player controller which receives input from an Oculus Quest 2 controller",
}
const MultiThreadedRequest: ProjectCardProps = {
    imageTitle: "Java Image",
    imageURL: SAMPLE_IMAGE,
    textTitle: "Multi-Threaded Request Scheduler",
    subTitles: "Java Program",
    textDescription: "Written with C# in Unity with the Oculus XR plugin, a simple game where the player fights an animated bot in a boxing gym. The bot uses a state transition table to vary between animations and punches. The player can move in 3D space using a custom made player controller which receives input from an Oculus Quest 2 controller",
}

export const listOfProjects = [UnityProject, BlueWhaleDetail, MultiThreadedRequest];

