export interface Skill {
  id: number;
  name: string;
  description: string;
}

export const skillsData: Skill[] = [
  {
    id: 1,
    name: "Technical Troubleshooting",
    description: "I can identify and fix technical problems efficiently. Whether it’s computer hardware, printer, software, or system errors, I stay patient and focused until the issue is resolved."
  },
  {
    id: 2,
    name: "Networking",
    description: "I understand the basics of computer networking, including setting up connections, managing devices, and ensuring stable communication between systems."
  },
  {
    id: 3,
    name: "Graphic Design",
    description: "I create clean and visually appealing designs. I focus on making layouts that are simple, attractive, and easy to understand."
  },
  {
    id: 4,
    name: "Web Development",
    description: "I build simple responsive and user-friendly websites using react tailwindcss. I enjoy turning ideas into functional and interactive web applications."
  }
];