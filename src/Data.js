// should do an en dash inbetween dates

export const RESUME = [
  {
    itemType: "Education",
    image: "/byu.png",
    title: "Brigham Young University",
    subtitle: "MS, BS Accounting | Minor, Information Systems",
    location: "Provo, UT",
    date: "Class of 2021",
    listItems: [
      "GPA: 3.80 / 4.00",
      "Vice President of the BYU Personal Finance Club",
      "Half-Tuition Academic Scholarship recipient (2017-2020)",
      "Participant in EY and PwC Accounting & Advisory Case Competitions at BYU (2019 and 2020 respectively)",
    ],
  },
  {
    itemType: "Experience",
    title: "Ivanti",
    image: "/ivanti.png",
    subtitle: "Accountant",
    location: "South Jordan, UT",
    date: "May 2018 - Present",
    listItems: [
      "Automated creation of quarterly journal entries with VBA, regularly saving hours of time",
      "Reduced a 6-hour monthly data splitting process to less than 2 minutes with VBA ",
      "Developed an RPA bot to pull FX rates online, create an audit trail in Excel, and upload to SAP",
      "Created an automated tracking system for bank transactions in Excel to eliminate 30 minutes of daily data entry",
    ],
  },
  {
    itemType: "Experience",
    title: "PwC",
    image: "/pwc.png",
    subtitle: "Risk Assurance Intern",
    location: "Salt Lake City, UT",
    date: "Jul - Aug 2020",
    listItems: [
      "Developed skills in data automation using UiPath, Alteryx, and Tableau",
      "Shadowed an experienced risk assurance engagement team and learned about the audit process",
    ],
  },
  {
    itemType: "Experience",
    title: "Brigham Young University",
    image: "/byu.png",
    subtitle: "Research Assistant",
    location: "Provo, UT",
    date: "Dec 2019 - Apr 2020",
    listItems: [
      "Created content to showcase real-world methods to automate and improve accounting-related tasks",
      "Facilitated student engagement on this project by collecting content and ensuring high-quality writing",
    ],
  },
  {
    itemType: "Experience",
    title: "Utah Community Credit Union",
    image: "/uccu.png",
    subtitle: "Accounting Assistant",
    location: "Provo, UT",
    date: "Mar 2017 - May 2018",
    listItems: [
      "Reduced working time by 50% in monthly expense report processing by writing VBA macros",
      "Developed a program in VBA to scrape data from a large recurring, vendor-provided report and store the data in Excel",
    ],
  },
];

export const COURSEWORK = [
  {
    category: "Accounting",
    courses: [
      { name: "ACC 541", about: "Financial Statement Analysis", skills: "" },
      { name: "ACC 540", about: "Advanced Financial Accounting", skills: "" },
      { name: "ACC 531", about: "Advanced Management Accounting", skills: "" },
      { name: "ACC 540", about: "Advanced Financial Accounting", skills: "" },
      {
        name: "ACC 530",
        about: "Advanced Financial Statement Auditing",
        skills: "",
      },
      { name: "ACC 522", about: "Advanced Taxation", skills: "" },
      { name: "ACC 453", about: "Money & Economics", skills: "" },
      { name: "ACC 241", about: "Business Law", skills: "" },
    ],
  },
  {
    category: "Information Systems",
    courses: [
      {
        name: "IS 555",
        about: "Advanced Data Analytics",
        skills: "Python, Machine Learning",
      },
      { name: "IS 520", about: "Spreadsheet Automation", skills: "VBA" },
      { name: "IS 115", about: "Intro to Python Analytics", skills: "Python" },
      { name: "IS 303", about: "Intro to Computer Programming", skills: "C#" },
    ],
  },
];

export const SKILL_CLASSES = [
  { name: "javascript", class: "devicon-javascript-plain" },
  { name: "python", class: "devicon-python-plain" },
  { name: "csharp", class: "devicon-csharp-plain" },
  { name: "html", class: "devicon-html5-plain" },
  { name: "css", class: "devicon-css3-plain" },
  { name: "react", class: "devicon-react-original" },
  { name: "materialui", class: "devicon-materialui-plain" },
  { name: "bash", class: "devicon-bash-plain" },
  { name: "npm", class: "devicon-npm-original-wordmark" },
  { name: "firebase", class: "devicon-firebase-plain" },
  { name: "git", class: "devicon-git-plain" },
  { name: "github", class: "devicon-github-original" },
];
