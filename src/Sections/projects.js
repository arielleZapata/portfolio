import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("section", { id: "projects", className: "px-6 md:px-20 py-20 bg-teal-50 text-gray-800", children: [_jsx("h2", { className: "text-3xl font-bold mb-6 flex flex-col items-center justify-center", children: "Projects" }), _jsx("div", { className: "grid gap-6 md:grid-cols-2", children: projectList.map((project) => (_jsxs("div", { className: `p-6 border rounded-2xl shadow-sm ${project.status === "Coming Soon"
                        ? "border-yellow-300 bg-yellow-50"
                        : "border-green-300 bg-white"}`, children: [_jsx("h3", { className: "text-xl font-semibold", children: project.title }), _jsx("p", { className: "text-sm text-gray-600", children: project.tech }), _jsx("span", { className: "text-xs font-medium inline-block mt-2 px-3 py-1 bg-gray-100 rounded-full", children: project.status })] }, project.title))) })] }));
}
