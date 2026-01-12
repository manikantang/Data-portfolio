import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const ABOUT_TEXT = `I am a data-driven professional with 5 years of experience analyzing business processes and building actionable insights. Skilled in SQL, Python, Excel, and data visualization tools, I have worked on projects involving reporting, dashboards, and process automation. I thrive in collaborative environments, turning complex data into clear, strategic recommendations. Beyond analytics, I enjoy exploring emerging data technologies and contributing to projects that drive meaningful business outcomes.`;
export const HERO_CONTENT = `Data enthusiast with 5 years of experience transforming complex datasets into actionable business insights. Proficient in SQL, Python, and data visualization, with a track record of optimizing processes and enabling smarter decisions. Passionate about solving problems, driving impact, and continuously learning in fast-paced, collaborative environments.`;

export const EXPERIENCES = [
 {
    year: "2024 – Present",
    role: "Data and ML Research Analyst",
    company: "Illinois Institute of Technology",
    description: `Built end-to-end analytical dashboards using DBT and Tableau, streamlining campaign reporting and improving KPI visibility.
Performed EDA on 500K+ multi-channel campaign records with Python, uncovering key audience trends that improved targeting accuracy by 15%.
Developed ML workflows in Python, improving model stability and deployment reliability.
Queried and transformed large datasets in Snowflake and Databricks, reducing query latency by 25%.
Wrote advanced SQL for 5M+ records, boosting data reliability by 30%.`,
    technologies: ["Python", "SQL", "Tableau", "Snowflake", "Databricks", "ML Workflows"]
  },
  {
    year: "2021 – 2022",
    role: "Senior Data Analyst",
    company: "Infosys",
    description: `Designed and analyzed A/B tests and funnel experiments, improving conversion rates by 15%.
Built predictive models using Python and SQL to forecast campaign performance, enhancing ROI by 10%.
Developed Tableau and Power BI dashboards for real-time KPI monitoring.
Automated analytics workflows with SQL and Excel macros, reducing manual effort by 40%.
Maintained scalable ETL pipelines on AWS, Azure, Snowflake, and Databricks.`,
    technologies: ["Python", "SQL", "Tableau", "Power BI", "AWS", "Azure", "ETL Pipelines"]
  },
  {
    year: "2019 – 2020",
    role: "Data Analyst",
    company: "Green Touch Technology",
    description: `Engineered an RFID analytics system, creating an auditable dataset for access-pattern monitoring.
Built real-time data capture workflows using Arduino + Python for 5K+ events.
Cleaned and transformed data to improve reliability by 25%.
Analyzed access patterns to optimize sensor accuracy by 35%.`,
    technologies: ["Python", "Arduino", "Data Cleaning", "ETL"]
  }
]
;

export const PROJECTS = [

{
  title: "Medical Chat Bot",
  image: project2,
  description:
    "An AI-powered chatbot using Llama 3, LangChain, and Pinecone to handle medical queries in real-time via RAG-based retrieval and LLM responses.",
  technologies: ["Python", "LangChain", "LLM", "Flask", "Render"]
},
{
  title: "Bitcoin Price Prediction",
  image: project4,
  description:
    "A time-series forecasting model using historical Bitcoin data and ARIMA, Pandas, and NumPy to predict future prices with RMSE evaluation.",
  technologies: ["Python", "Pandas", "NumPy", "Matplotlib"]
}
,
  {
    title: "Sales Analytics & Dashboard",
    image: project3,
    description: `Built a data warehouse with ETL pipelines and integrated APIs for reporting. Designed Power BI dashboards with KPIs, cohort analysis, and predictive insights to drive business decisions.`,
    technologies: ["SQL", "Python", "Power BI", "ETL", "Azure Blob Storage", "Data Warehousing"]
  }
];

export const CONTACT = {
  address: "San Jose, CA 95117 ",
  phoneNo: "+1 9012317199",
  email: "manikantang11@gmail.com",
};
