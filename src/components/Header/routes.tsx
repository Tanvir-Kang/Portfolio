
export enum ROUTES {
    about = "/",
    experience = "/experience",
    education = "/education",
    projects = "/projects",
    contactMe = "/contact"
}

interface RouteTypes {
    tabName: string;
    route: string;
}

export const HeaderRoutes: RouteTypes[] =
    [{
        tabName: "About Me",
        route: ROUTES.about
    },
    {
        tabName: "Experience",
        route: ROUTES.experience
    },
    {
        tabName: "Education",
        route: ROUTES.education
    },
    {
        tabName: "Projects",
        route: ROUTES.projects
    },
    {
        tabName: "Contact Me",
        route: ROUTES.contactMe
    },
    ]

