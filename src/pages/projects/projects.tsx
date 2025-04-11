import ProjectCard from "./projectCard";

const Projects = () => {
  const details = [
    {
      title: "Hackernews-Server",
      projectUrl: "https://github.com/Yogi2084/hackernews-server",
      description: "Developed Hackernews server clone",
    },
    {
      title: "Early Potato Plant Disease Detection",
      projectUrl:
        "https://github.com/Mahesh5726/Early-Disease-Detection-in-Potato-Plant-using-Deep-Learning-for-Precise-Agriculture",
      description:
        "Developed a system to detect early diseases in potato plants using deep learning.",
        
    },
    {
      title: "LPG Leakage Detection using MQ-5 sensor and Arduino UNO 🚨",
      projectUrl: "",
      description:
        "Developed a system to detect LPG leakage using MQ-5 sensor and Arduino UNO.",
      highlight: true, 
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-4 max-w-screen-md mx-auto px-4">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-evenly py-2 px-4">
        {details.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            projectUrl={item.projectUrl}
            description={item.description}
            highlight={item.highlight}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
