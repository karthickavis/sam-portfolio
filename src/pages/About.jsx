import { FaGraduationCap, FaRoad, FaCode, FaCertificate } from "react-icons/fa";

export default function About() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "Excel", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "SQL", level: 75 },
    { name: "Data Visualization", level: 85 },
    { name: "Machine Learning (Basics)", level: 70 },
  ];

  const certificates = [
    {
      title: "Data Visualisation: Empowering Business with Effective Insights (Forage - TCS)",
      date: "Aug 2025",
      description:
        "Completed a simulation creating data visualizations for Tata Consultancy Services. Designed visuals for executive decision-making and presented insights effectively.",
      link: "https://drive.google.com/file/d/1Io7nBKo4j-jyzMUk0wYTnX__3G_-TPPl/view",
    },
    {
      title: "AWSome Day Online Conference (Amazon Web Services)",
      date: "Apr 2025",
      description:
        "Attended AWS Cloud fundamentals sessions covering compute, storage, database, and networking. Gained insights into AWS service architecture.",
      link: "https://drive.google.com/file/d/1lDCmxdS8Lwhf_vKOph5PTalFmf8QIYox/view",
    },
    {
      title: "Databases with Python: MySQL, SQLite & MongoDB (Udemy)",
      date: "May 2025",
      description:
        "Gained hands-on experience integrating MySQL, SQLite, and MongoDB with Python for CRUD operations and data handling across structured and unstructured datasets.",
      link: "https://drive.google.com/file/d/1bwaSLISZHjLwXkLra_ynm8inkbkaBn7p/view",
    },
  ];

  return (
    <section id="about" className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="https://camo.githubusercontent.com/66066b22abacaf358032bb15ab64fe18654e8d00e2ed4d07747d89eccb6596ae/68747470733a2f2f63646e622e61727473746174696f6e2e636f6d2f702f6173736574732f696d616765732f696d616765732f3032382f3939312f3939392f6f726967696e616c2f616e6e612d68617672796c79756b682d2e6769663f31353936313235313132"
            alt="Data Analyst Avatar"
            className="rounded-2xl w-72 sm:h-72 md:h-[400px] md:w-[400px] object-cover border-4 border-emerald-400 shadow-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-4xl font-bold text-emerald-400 mb-4">About Me</h2>
          <p className="text-gray-200 leading-relaxed mb-6 text-lg">
            Hi, I'm <span className="text-cyan-300 font-semibold">[ Sam Jebaraj ]</span>, a passionate{" "}
            <span className="text-yellow-300 font-semibold">Data Analyst</span> skilled in{" "}
            <span className="text-yellow-300">Python, Excel, Power BI</span>, and data visualization. 
            I specialize in transforming raw data into valuable insights that drive business growth.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaGraduationCap className="text-yellow-400 text-xl mt-1" />
              <p>
                Holds a Post-Graduation degree in <span className="font-medium">Data Science</span>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaRoad className="text-pink-400 text-xl mt-1" />
              <p>
                Experienced in analyzing data sets and creating impactful dashboards to help organizations make informed decisions.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCode className="text-green-400 text-xl mt-1" />
              <p>
                Proficient in Python, Power BI, SQL, and Excel with strong analytical and visualization skills.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm italic text-gray-400">
            My goal is to grow as a data professional, delivering insights that empower smarter business strategies 🚀
          </p>
        </div>
      </div>

      {/* Skill Bars */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-3xl text-center font-bold text-emerald-300 mb-8">Skills</h3>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-200">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full h-4 bg-gray-800 rounded-full">
                <div
                  className="h-4 bg-emerald-400 rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    transition: "width 1s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div className="max-w-5xl mx-auto mt-20">
        <h3 className="text-3xl font-bold text-center text-emerald-300 mb-10">
          Certificates & Training
        </h3>

        <div className="space-y-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-2xl shadow-md border border-gray-700 hover:shadow-emerald-500/20 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaCertificate className="text-emerald-400 text-2xl" />
                <h4 className="text-xl font-semibold text-emerald-200">
                  {cert.title}
                </h4>
              </div>
              <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
              <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-sm hover:underline"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
