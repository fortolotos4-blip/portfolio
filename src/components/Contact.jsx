function Contact() {
  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Kontak
        </h2>

        <p className="text-gray-400 mb-12">
          Saya terbuka untuk peluang kerja, freelance, maupun kolaborasi project.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:kelvinnn45@gmail.com"
            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition border border-gray-800 hover:border-blue-500"
          >
            <h3 className="text-lg font-semibold text-blue-400">Email</h3>
            <p className="mt-2 text-gray-400 text-sm">
              kelvinnn45@gmail.com
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6289523499390"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition border border-gray-800 hover:border-green-500"
          >
            <h3 className="text-lg font-semibold text-green-400">WhatsApp</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Chat langsung
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/kelvinhendriantopoha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition border border-gray-800 hover:border-blue-400"
          >
            <h3 className="text-lg font-semibold text-blue-400">LinkedIn</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Lihat profil saya
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;