function About() {
  return (
    <section id="about" className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Tentang Saya
        </h2>

        <p className="text-gray-400 leading-relaxed">
        Saya adalah fresh graduate Sistem Informasi tahun 2026 yang memiliki pengalaman dalam membangun website
        serta ketertarikan besar pada pengembangan web. Dalam proses belajar dan pengembangan, saya memanfaatkan
        AI sebagai pendukung pembelajaran, brainstorming, dan perancangan solusi untuk membantu menghasilkan website
        yang efisien, scalable, dan user-friendly. Saya memiliki semangat belajar yang tinggi dan siap terus
        mengembangkan kemampuan sesuai kebutuhan teknologi dan framework yang digunakan di dunia kerja.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-gray-800 rounded-lg">JavaScript</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">React</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">Tailwind</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">HTML & CSS</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">PHP</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">Laravel</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">Postgre dan MySQL</span>
        </div>

      </div>
    </section>
  );
}

export default About;