function About() {
  return (
    <section id="about" className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Tentang Saya
        </h2>

        <p className="text-gray-400 leading-relaxed">
        Saya merupakan lulusan S1 Sistem Informasi Universitas Dinamika tahun 2026 yang memiliki ketertarikan pada bidang teknologi informasi.
        Memiliki pengalaman dalam pengembangan aplikasi web, pengelolaan database, serta instalasi dan troubleshooting perangkat komputer. Terbiasa menggunakan berbagai teknologi web dan terus mengembangkan kemampuan untuk menghadapi kebutuhan teknologi di dunia kerja.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-gray-800 rounded-lg">JavaScript</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">React</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">HTML & CSS</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">PHP</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">Laravel</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">Postgre dan MySQL</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">Microsoft Office</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">Perbaikan Masalah Windows</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">Instalasi dan Pengaturan Komputer</span>
        </div>

      </div>
      <br />
    </section>
  );
}

export default About;