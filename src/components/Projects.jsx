const projects = [
  {
    title: "Website Tracking Seal",
    desc: "Sistem tracking Seal container sederhana pada perusahaan logistik (PT Hartini Putra).",
    link: "https://tracking-container.infinityfreeapp.com/",
  },
  {
    title: "Dashboard Kinerja Sales",
    desc: "Dashboard analisis data untuk kinerja sales dan pengambilan keputusan manager pada perusahaan (PT Chop Indo Sejahtera).",
    link: "https://visualisasi-kinerja-sales.onrender.com",
    guide: "https://drive.google.com/file/d/1k-jGDkY9CSl51n3XAjo8MNUwHD1tTFlf/view?usp=sharing",
    github: "https://github.com/fortolotos4-blip/visualisasi-kinerja-sales",
  },
  {
    title: "Game Rohani Remaja Gereja",
    desc: "Game online yang disertai dengan Firman untuk remaja youth.",
    link: "https://youth-games.onrender.com",
    guide: "https://drive.google.com/file/d/1prkYUYJxj5h2w5PjmkfEWg3yic1qBSYw/view?usp=drive_link",
    github: "https://github.com/fortolotos4-blip/Youth-Games",

  },
  {
    title: "Katalog Tanaman Hias",
    desc: "Website katalog produk UMKM.",
    link: "https://toko-tanaman.vercel.app/",
    guide: "https://drive.google.com/file/d/1ktrFsQeVLWhkpWtKTdG8nUsEOHPxACIL/view?usp=sharing",
    github: "https://github.com/fortolotos4-blip/toko-tanaman",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Project
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 hover:scale-105 transform transition flex flex-col justify-between h-full"
          >
            <h3 className="text-xl font-semibold text-blue-400">
              {project.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {project.desc}
            </p>

            <div className="mt-5 text-sm flex items-center gap-2">

            <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
            >
            Demo
            </a>

            <span className="text-gray-600">|</span>

            <a href={project.guide} target="_blank" className="text-yellow-500 hover:underline">
              Panduan
            </a>

            <span className="text-gray-600">|</span>

            <a href={project.github} target="_blank" className="text-gray-400 hover:underline">
              GitHub
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
