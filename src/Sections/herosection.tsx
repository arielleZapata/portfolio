// HeroSection.tsx
export default function HeroSection() {
    return (
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-br from-pink-100 via-teal-100 to-white">
        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-pink-500">
Arielle Zapata
</h1>
<h2 className="text-lg sm:text-5xl font-extrabold leading-tight text-gray-800 mb-4">
            Full-Stack Developer & Bioinformatician
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Merging science, code, and curiosity into vibrant tech solutions.
          </p>
  
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-pink-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-pink-600 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-pink-500 text-pink-500 px-6 py-3 rounded-2xl font-semibold hover:bg-pink-50 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
  
        {/* Visuals */}
        <div className="mt-12 md:mt-0 relative w-full max-w-sm md:max-w-md">
          <img
            src="./src/assets/arielle-avatar.jpg"
            alt="Arielle Photo"
            className="w-full drop-shadow-xl rounded-full"
          />
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Example: floating DNA strand, paw prints, or code icons */}
            {/* Can use Lottie animations or small SVGs */}
          </div>
        </div>
      </section>
    );
  }
  