export interface Education {
  id: number;
  level: String;
  school: string;
  year: string;
  status: string;
}

export const EducationData: Education[] = [
  {
    id: 1,
    level: "Elemntary",
    school: "SAPANG DALAGA CENTRAL ELEMNTARY SCHOOL",
    year: "2015 - 2016",
    status: "Graduated",
  },
  {
    id: 2,
    level: "High School",
    school: "LIBERATION INSTITUTE INC.",
    year: "2019 - 2020",
    status: "Moved Up",
  },
  {
    id: 3,
    level: "Senior High School",
    school: "LIBERATION INSTITUTE INC.",
    year: "2021 - 2022",
    status: "Graduated",
  },
  {
    id: 4,
    level: "College",
    school: "NEGROS ORIENTAL STATE UNIVERSITY",
    year: "2025 - 2026",
    status: "Ongoing",
  }
];