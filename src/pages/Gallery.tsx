const Gallery = () => {
    const images = [
      {
        src: "/placeholder.svg",
        alt: "Hospital Exterior",
        caption: "Our Modern Hospital Building"
      },
      {
        src: "/placeholder.svg",
        alt: "Reception Area",
        caption: "Welcoming Reception Area"
      },
      {
        src: "/placeholder.svg",
        alt: "Operating Theater",
        caption: "State-of-the-art Operating Theater"
      },
      {
        src: "/placeholder.svg",
        alt: "Laboratory",
        caption: "Advanced Laboratory Equipment"
      },
      {
        src: "/placeholder.svg",
        alt: "Patient Room",
        caption: "Comfortable Patient Rooms"
      },
      {
        src: "/placeholder.svg",
        alt: "Maternity Ward",
        caption: "Modern Maternity Ward"
      },
      {
        src: "/placeholder.svg",
        alt: "Pharmacy",
        caption: "Well-stocked Pharmacy"
      },
      {
        src: "/placeholder.svg",
        alt: "Emergency Room",
        caption: "24/7 Emergency Department"
      },
      {
        src: "/placeholder.svg",
        alt: "Children's Play Area",
        caption: "Children's Play Area"
      }
    ];
  
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-blue text-sm md:text-base font-semibold">Our Facility</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4 md:mb-6">Gallery</h1>
            <p className="text-base md:text-lg text-gray-600">
              Take a virtual tour of our modern medical facility and state-of-the-art equipment.
            </p>
          </div>
  
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl animate-fadeIn"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="aspect-square relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-lg font-semibold">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;