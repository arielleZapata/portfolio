export default function TechStack() {
    const stacks = ["React", "Next.js", "TypeScript", "Node.js", "Django", "Flutter", "ASP.NET", "Prisma", "PostgreSQL", "MongoDB", "AWS", "Firebase"];
    return (
      <section id="tech" className="px-6 md:px-20 py-20 bg-pink-50 text-gray-800">
        <h2 className="text-3xl font-bold mb-6 flex flex-col items-center justify-center">Tech Stack</h2>
        <div className="flex flex-wrap gap-4">
          {stacks.map((tech) => (
            <span key={tech} className="bg-white border border-pink-300 px-4 py-2 rounded-xl shadow text-sm">
              {tech}
            </span>
          ))}
        </div>
      </section>
    );
  }
  