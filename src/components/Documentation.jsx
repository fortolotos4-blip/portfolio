
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
  "/documentation/instalasi_windows_1.jpg",
  "/documentation/instalasi_windows_2.jpg",
  "/documentation/konfigurasi_jaringan.jpg",
];

function Documentation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + photos.length) % photos.length
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const difference = touchStart - e.changedTouches[0].clientX;

    if (difference > 50) {
      nextSlide();
    } else if (difference < -50) {
      prevSlide();
    }

    setTouchStart(null);
  };

  const getPhotoIndex = (offset) => {
    return (currentIndex + offset) % photos.length;
  };

  return (
    <section
  id="documentation"
  className="relative isolate overflow-hidden text-white py-24 px-6"
  style={{
    background: `
      linear-gradient(
        180deg,
        #020617 0%,
        #020617 25%,
        #000000 100%
      )
    `,
  }}
>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Dokumentasi
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Berikut aktivitas dan praktik di bidang IT Support.
          </p>
        </div>

        {/* Stacked Carousel */}
        <div
          className="flex flex-col items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-[220px] sm:w-[270px] h-[300px] sm:h-[350px]">

            {photos.map((photo, index) => {
              const offset =
                (index - currentIndex + photos.length) % photos.length;

              // Tampilkan maksimal 3 lapisan
              if (offset > 2) return null;

              return (
                <div
                  key={photo}
                  className="absolute inset-0 rounded-2xl overflow-hidden
                  border border-slate-600 bg-slate-800 shadow-2xl
                  transition-all duration-500 ease-in-out"
                  style={{
                    zIndex: photos.length - offset,
                    transform: `
                      translate(${offset * 9}px, ${offset * -9}px)
                      rotate(${offset * 2}deg)
                      scale(${1 - offset * 0.045})
                    `,
                    opacity: 1 - offset * 0.12,
                  }}
                >
                  <img
                    src={photo}
                    alt={`Dokumentasi ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(photo)}
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                  />
                </div>
              );
            })}

          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8 mt-10">

            <button
              onClick={prevSlide}
              aria-label="Foto sebelumnya"
              className="p-3 rounded-full border border-slate-700
              hover:bg-blue-600 hover:border-blue-600 transition"
            >
              <ChevronLeft size={24} />
            </button>

            <span className="text-gray-400 text-sm min-w-[65px] text-center">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </span>

            <button
              onClick={nextSlide}
              aria-label="Foto berikutnya"
              className="p-3 rounded-full border border-slate-700
              hover:bg-blue-600 hover:border-blue-600 transition"
            >
              <ChevronRight size={24} />
            </button>

          </div>

          <p className="text-xs text-gray-500 mt-5">
            Geser foto atau gunakan tombol navigasi
          </p>
        </div>
      </div>

      {/* Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95
          flex items-center justify-center p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Tutup foto"
            className="absolute top-6 right-6 text-white
            hover:text-blue-400 transition"
          >
            <X size={30} />
          </button>

          <img
            src={selectedImage}
            alt="Dokumentasi ukuran penuh"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
}

export default Documentation;
