import { Hobbies } from "../../Static/Images/index";

interface ImageListItem {
  image: string;
  title: string;
  rows?: number;
  cols?: number;
  featured?: boolean;
}

export const HobbiesImageList: ImageListItem[] = [
  {
    image: Hobbies.BMW,
    title: "Fixing old BMW's"
  },
  {
    image: Hobbies.Hiking,
    title: "Going on hikes"
  },
  {
    image: Hobbies.Mountains,
    title: "Exploring the outdoors"
  },
  {
    image: Hobbies.Mustang,
    title: "Maintaining and detailing my car",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    image: Hobbies.Skiing,
    title: "Skiing"
  },
  {
    image: Hobbies.PC,
    title: "Building PCs"
  }
]