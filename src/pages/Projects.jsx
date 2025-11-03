
import { FaChartLine, FaPython } from "react-icons/fa";

const projects = [
  {
    title: "Harley Davidson Sales Data Analysis",
    icon: <FaChartLine className="text-yellow-400 text-4xl" />,
    date: "March 2023",
    description:
      "Analyzed Harley Davidson’s sales data of 5000+ records using Power BI to uncover key business insights. Created dashboards for revenue tracking, customer trends, and product performance using DAX and Power Query.",
    tech: "Power BI, Power Query, DAX, Data Modeling, Excel",
  },
  {
    title: "Hate Speech Detection Using Sentiment & Emotional Analysis",
    icon: <FaPython className="text-blue-400 text-4xl" />,
    date: "May 2024",
    description:
      "Developed a system to detect hate speech using sentiment and emotional analysis. Implemented NLP and ML techniques for accurate classification and created an intuitive web interface for real-time text analysis.",
    tech: "Python, NLP (NLTK, SpaCy), Scikit-Learn, TensorFlow, Web App",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-emerald-400">
          Featured <span className="text-cyan-300">Projects</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl p-6 border border-gray-700 shadow-lg hover:shadow-emerald-500/20 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{project.icon}</div>
              <h3 className="text-2xl font-semibold text-emerald-300 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{project.date}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-sm text-cyan-400 font-medium">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

