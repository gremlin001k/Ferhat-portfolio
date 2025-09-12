import {
  mobile,
  backend,
  creator,
  web,
  succinct,
  canton,
  modularity,
  vana,
  rialo,
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
      "Regional Lead",
      "Founder of the Turkey Community",
    ],
  },
  {
    title: "Canton Network",
    icon: canton,
    iconBg: "#383E56",
    points: [
      "Moderator",
      "Founder of Community",
      "Turkey Lead",
    ],
  },
  {
    title: "Modularity",
    icon: modularity,
    iconBg: "#383E56",
    points: [
      "Co-Founder",
      "Content Creator",
      "Community Manager",
    ],
  },
    {
    title: "VANA",
    icon: vana,
    iconBg: "#383E56",
    points: [
      "Regional Lead",
      "Content Creator",
      "Helper",
      "Founder of the Turkey Community",
    ],
  },
    {
    title: "Rialo",
    icon: rialo,
    iconBg: "#E6DEDD",
    points: [
      "Content Creator",
      "Web3 Contributor",
      "Helper",
    ],
  },
];

export { services, experiences };
