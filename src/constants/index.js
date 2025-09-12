import {
  mobile,
  backend,
  creator,
  web,
  succinct,
  canton,
  modularity,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web3 Contributor",
    icon: web,
  },
  {
    title: "Regional Leader",
    icon: mobile,
  },
  {
    title: "Community Manager",
    icon: backend,
  },
  {
    title: "Moderator",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Succinct Labs",
    icon: succinct,
    iconBg: "#383E56",
    points: [
      "Web3 Contributor",
      "Helper",
    ],
  },
  {
    title: "Canton Network",
    icon: canton,
    iconBg: "#E6DEDD",
    points: [
      "Moderatör",
    ],
  },
  {
    title: "Modularity",
    icon: modularity,
    iconBg: "#383E56",
    points: [
      "Co-Founder",
    ],
  },
];

export { services, experiences };
