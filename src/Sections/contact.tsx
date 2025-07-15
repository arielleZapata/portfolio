export default function Contact() {
    return (
      <section id="contact" className="px-6 md:px-20 py-20 bg-white text-gray-800">
        <h2 className="text-3xl font-bold mb-6 flex flex-col items-center justify-center">Contact Me</h2>
        <p className="mb-4 flex flex-col items-center justify-center">
          Want to collaborate, chat, or just say hi? Reach out:
        </p>
        <ul className="space-y-2 flex flex-col items-center justify-center">
          <li>Email: <a href="mailto:zapataarielle@gmail.com" className="text-pink-500 underline">arielle@example.com</a></li>
          <li>GitHub: <a href="https://github.com/ariellezapata" className="text-pink-500 underline">github.com/ariellezapata</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/ariellezapata" className="text-pink-500 underline">linkedin.com/in/ariellezapata</a></li>
        </ul>
      </section>
    );
  }
  