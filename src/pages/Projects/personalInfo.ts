import { ProjectCardProps } from "../../components/ProjectCard/cardTypes";
import { ProjectImages } from "../../Static/Images/index";

const UnityProject: ProjectCardProps = {
    imageTitle: "Unity VR Game",
    imageURL: ProjectImages['BinkBoxing'],
    textTitle: "Bink Boxing",
    subTitles: "Unity VR Game",
    textDescription: "Written with C# in Unity with the Oculus XR plugin, a simple game where the player fights an animated bot in a boxing gym. The bot uses a state transition table to vary between animations and punches. The player can move in 3D space using a custom made player controller which receives input from an Oculus Quest 2 controller",
    GitHubURL: "https://github.com/Tanvir-Kang/BinkBoxing",
    videoURL: "https://youtu.be/D5B3zqCFOIs"
}
const BlueWhaleDetail: ProjectCardProps = {
    imageTitle: "Blue Whale Image",
    imageURL: ProjectImages['BlueWhaleDetail'],
    textTitle: "Blue Whale Detail",
    subTitles: "React Web App",
    textDescription: "An auto detailing website written with React, Typescript, Bootstrap, and CSS. The site is cleanly architected with re-usable generic components, split pages using containers for dependency injection, and custom app wide theming applied to all components.",
    GitHubURL: "https://github.com/Tanvir-Kang/MERN-Stack/tree/Dev/client"
}
const MultiThreadedRequest: ProjectCardProps = {
    imageTitle: "Java Image",
    imageURL: ProjectImages['MultiThreadedRequest'],
    textTitle: "Multi-Threaded Request Scheduler",
    subTitles: "Java Program",
    textDescription: "Written in Java, the program receives incoming requests with a master thread and assigns N number of slave threads based on the number of requests and configured max value. The slave threads sleep for the duration of the request and declare themselves done after the request time. The master thread continuously monitors requests and creates a priority queue if the max number of slave threads have been reached.",
    GitHubURL: "https://github.com/Tanvir-Kang/COSC315-MP2"
}
const WebMarketingPlatform: ProjectCardProps = {
    imageTitle: "Lental Picture",
    imageURL: ProjectImages['Lental'],
    textTitle: "Web Marketing Platform",
    subTitles: "React Web App",
    textDescription: "A rental property marketing platform for my final year Capstone team project. Built on Python 3.8 with Tornado, Docker, MongoDB, React, TypeScript, and Material UI. My role with this project consisted of retrieving and manipulating data from API calls and building reusable material UI components wrapped in our own services.",
    GitHubURL: "https://github.com/UBCO-COSC499-Summer-2020/web-marketing-platform-web-marketing-platform"
}
const LeetCode: ProjectCardProps = {
    imageTitle: "LeetCode",
    imageURL: ProjectImages['LeetCode'],
    textTitle: "LeetCode Adventures",
    subTitles: "A repository of my leetcode questions",
    textDescription: "Currently working my way through leetcode easy and medium questions. Updated daily.",
    GitHubURL: "https://github.com/Tanvir-Kang/LeetCode"
}

export const listOfProjects = [UnityProject, BlueWhaleDetail, MultiThreadedRequest, WebMarketingPlatform, LeetCode];

