function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-linear-to-b from-black via-gray-900 to-black text-white text-center px-4">
      
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Halo, saya{" "}
        <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
          Kelvin Hendrianto Poha
        </span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-400">
        Web Developer & IT Support
      </p>

      <p className="mt-6 max-w-xl text-gray-500">
        Berfokus pada pengembangan website yang scalable dan user-friendly, serta instalasi, pemeliharaan, dan troubleshooting perangkat teknologi informasi.
      </p>

      <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg">
        <a href="#projects">Lihat Project</a>
      </button>

    </section>
  );
}

export default Hero;