const projectList = [
    {
      title: "Genomic Variant Analyzer",
      tech: "Python, R, Plotly",
      status: "Coming Soon",
    },
    {
      title: "Dog Training Tracker App",
      tech: "Flutter, Firebase",
      status: "Coming Soon",
    },
    {
      title: "Pet Services Booking System",
      tech: ".NET, SQL Server",
      status: "Coming Soon",
    },
    {
      title: "Protein Structure Viewer",
      tech: "Django, React, NGL",
      status: "Coming Soon",
    },
  ];
  //Availble is green, coming soon is yellow, and not available is red
  export default function Projects() {
    return (
      <section id="projects" className="px-6 md:px-20 py-20 bg-teal-50 text-gray-800">
        <h2 className="text-3xl font-bold mb-6 flex flex-col items-center justify-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projectList.map((project) => (
            <div
              key={project.title}
              className={`p-6 border rounded-2xl shadow-sm ${
                project.status === "Coming Soon"
                  ? "border-yellow-300 bg-yellow-50"
                  : "border-green-300 bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.tech}</p>
              <span className="text-xs font-medium inline-block mt-2 px-3 py-1 bg-gray-100 rounded-full">
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  