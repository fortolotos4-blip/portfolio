
import {
  Package,
  ChartNoAxesColumnIncreasing,
  Gamepad2,
  Sprout,
  Languages,
  ExternalLink,
  BookOpen,
  Code2,
} from "lucide-react";

const projects = [
  {
    title: "Tracking Seal Container",
    desc: "Sistem pencatatan dan tracking nomor seal kontainer untuk mendukung pengelolaan data operasional logistik (PT Hartini Putra).",
    link: "https://tracking-container.infinityfreeapp.com/",
    guide: "https://drive.google.com/file/d/1GO8XD26xZMNN-PD0Qg5i-HfuDtAQU2Bm/view?usp=sharing",
    github: "https://github.com/fortolotos4-blip/tracking_seal",
    icon: Package,
  },
  {
    title: "Dashboard Kinerja Sales",
    desc: "Dashboard analisis data untuk kinerja sales dan pengambilan keputusan manager (PT Chop Indo Sejahtera).",
    link: "https://visualisasi-kinerja-sales.onrender.com",
    guide: "https://drive.google.com/file/d/1k-jGDkY9CSl51n3XAjo8MNUwHD1tTFlf/view?usp=sharing",
    github: "https://github.com/fortolotos4-blip/visualisasi-kinerja-sales",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "Game Rohani Remaja Gereja",
    desc: "Platform permainan multiplayer online yang dilengkapi dengan materi Firman Tuhan.",
    link: "https://youth-games.onrender.com",
    guide: "https://drive.google.com/file/d/1prkYUYJxj5h2w5PjmkfEWg3yic1qBSYw/view?usp=drive_link",
    github: "https://github.com/fortolotos4-blip/Youth-Games",
    icon: Gamepad2,
  },
  {
    title: "Katalog Tanaman Hias",
    desc: "Website katalog tanaman hias rahayu sebagai media pemasaran dan penjualan produk secara online.",
    link: "https://toko-tanaman.vercel.app/",
    guide: "https://drive.google.com/file/d/1ktrFsQeVLWhkpWtKTdG8nUsEOHPxACIL/view?usp=sharing",
    github: "https://github.com/fortolotos4-blip/toko-tanaman",
    icon: Sprout,
  },
  {
    title: "SpeakJawa - Penerjemah Bahasa dan Aksara",
    desc: "Website penerjemah Bahasa Jawa dan konversi Aksara Jawa.",
    link: "https://speakjawa.vercel.app/",
    guide: "https://drive.google.com/file/d/1JGOgCLXLGOXMiXnnRWDh7i6L1mjU0tso/view?usp=sharing",
    github: "https://github.com/fortolotos4-blip/speakjawa",
    icon: Languages,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden text-white py-20 px-6"
      style={{
        background: `
          linear-gradient(
            180deg,
            #000000 0%,
            #020617 75%,
            #020617 100%
          )
        `,
      }}
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Projects
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Beberapa project yang telah saya buat dan kembangkan.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <div
              key={index}
              className="
                group flex flex-col sm:flex-row
                items-start sm:items-center
                gap-5 p-7
                rounded-2xl
                bg-slate-900/80
                border border-slate-700
                hover:border-blue-500/70
                hover:-translate-y-1
                hover:shadow-lg hover:shadow-blue-500/5
                transition-all duration-300
              "
            >
              {/* Icon */}
              <div className="shrink-0">
                <div className="
                w-[60px] h-[60px]
                rounded-xl
                bg-blue-500/10
                flex items-center justify-center
              ">
                <Icon
                  size={30}
                  strokeWidth={1.8}
                  className="text-blue-400"
                />
              </div>
              </div>

              {/* Vertical Divider */}
              <div className="
                hidden sm:block
                w-px self-stretch
                bg-slate-700
              " />

              {/* Project Details */}
              <div className="flex-1 min-w-0 flex flex-col">
                <h3 className="
                  text-xl md:text-2xl
                  font-bold text-blue-400
                  group-hover:text-blue-300
                  transition-colors
                ">
                  {project.title}
                </h3>

                <p className="
                  mt-3 text-gray-300
                  leading-relaxed
                ">
                  {project.desc}
                </p>

                {/* Links */}
                <div className="
                  mt-5 flex flex-wrap
                  items-center gap-x-5 gap-y-3
                  text-base
                ">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      text-blue-400 hover:text-blue-300
                      transition-colors
                    "
                  >
                    <ExternalLink size={19} />
                    Demo
                  </a>
|
                  {project.guide && (
                    <a
                      href={project.guide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2
                        text-yellow-400 hover:text-yellow-300
                        transition-colors
                      "
                    >
                      <BookOpen size={19} />
                      Panduan
                    </a>
                  )}
|
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2
                        text-gray-300 hover:text-white
                        transition-colors
                      "
                    >
                      <Code2 size={19} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
