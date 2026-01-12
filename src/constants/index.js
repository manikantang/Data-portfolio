import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `Data enthusiast with 5 years of experience transforming complex datasets into actionable business insights. Proficient in SQL, Python, and data visualization, with a track record of optimizing processes and enabling smarter decisions. Passionate about solving problems, driving impact, and continuously learning in fast-paced, collaborative environments.`;
export const ABOUT_TEXT = `I am a data-driven professional with 5 years of experience analyzing business processes and building actionable insights. Skilled in SQL, Python, Excel, and data visualization tools, I have worked on projects involving reporting, dashboards, and process automation. I thrive in collaborative environments, turning complex data into clear, strategic recommendations. Beyond analytics, I enjoy exploring emerging data technologies and contributing to projects that drive meaningful business outcomes.`;

export const EXPERIENCES = [
{
  year: "2023 – Present",
  role: "Data and ML Research Assistant",
  company: "Illinois Institute of Technology",
  description: `Built scalable ML pipelines in Python to automate feature engineering, reducing manual effort by 15%. Queried large datasets using advanced SQL techniques to improve data accuracy by 30%. Automated model evaluation and reporting workflows, accelerating research cycles. Collaborated on projects involving LLMs and retrieval-augmented generation (RAG) to explore real-time AI applications.`,
  technologies: ["Python", "SQL", "LangChain", "Hugging Face", "LLMs", "RAG"]
}
,

  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Infosys",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
  title: "Food Delivery App",
  image: project1,
  description:
    "A full-stack food ordering platform with product listings, real-time cart updates, user authentication, and payment integration.",
  technologies: ["React", "Node.js", "Express.js", "MongoDB"]
},
{
  title: "Medical Chat Bot",
  image: project2,
  description:
    "An AI-powered chatbot using Llama 3, LangChain, and Pinecone to handle medical queries in real-time via RAG-based retrieval and LLM responses.",
  technologies: ["Python", "LangChain", "LLM", "Flask", "Render"]
},
{
  title: "Portfolio Website",
  image: project3,
  description:
    "A personal portfolio website built to showcase projects, technical skills, experience, and contact information with responsive design.",
  technologies: ["HTML", "CSS", "React", "Bootstrap"]
},
{
  title: "Bitcoin Price Prediction",
  image: project4,
  description:
    "A time-series forecasting model using historical Bitcoin data and ARIMA, Pandas, and NumPy to predict future prices with RMSE evaluation.",
  technologies: ["Python", "Pandas", "NumPy", "Matplotlib"]
}
,
];

export const CONTACT = {
  address: "Chicago, IL 60616 ",
  phoneNo: "+1 773-789-1086",
  email: "manikantang11@gmail.com",
};
