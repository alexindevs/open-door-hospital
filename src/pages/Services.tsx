
const Services = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-blue font-semibold">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Comprehensive Healthcare Solutions</h1>
          <p className="text-lg text-gray-600">
            We offer a wide range of medical services with state-of-the-art facilities and experienced healthcare professionals.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div 
              key={service.title}
              className="group relative overflow-hidden rounded-2xl animate-fadeIn"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-0 md:mb-2">{service.title}</h3>
                  <p className="text-gray-200 sm:text-sm md:text-lg mb-2 md:mb-4">{service.description}</p>
                  <ul className="md:space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <span className="text-primary-blue">•</span>
                        <span className="sm:text-[12px] md:text-[18px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fadeIn"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Medical Assistance?</h2>
          <p className="text-gray-600 mb-8">
            Our team of healthcare professionals is here to help you. Book an appointment today.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-primary-red text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

const mainServices = [
  {
    title: "Surgery Department",
    description: "State-of-the-art surgical facilities with experienced surgeons.",
    image: "/assets/surgery.jpg",
    features: [
      "General Surgery",
      "Minimally Invasive Procedures",
      "Pre and Post-operative Care",
      "Emergency Surgery",
      "Specialized Surgical Teams"
    ]
  },
  {
    title: "Laboratory Services",
    description: "Comprehensive diagnostic testing and analysis.",
    image: "/assets/laboratory.jpg",
    features: [
      "Blood Tests",
      "Pathology Services",
      "Diagnostic Imaging",
      "Quick Results",
      "Advanced Equipment"
    ]
  },
  {
    title: "Antenatal & Maternity Care",
    description: "Complete care for mothers and newborns.",
    image: "/assets/antenatal_care.jpeg",
    features: [
      "Prenatal Check-ups",
      "Birthing Services",
      "Postnatal Care",
      "Newborn Care",
      "Maternity Ward"
    ]
  },
  {
    title: "Family Planning",
    description: "Comprehensive family planning services and counseling.",
    image: "/assets/family_planning.jpeg",
    features: [
      "Contraception Services",
      "Family Planning Counseling",
      "Fertility Services",
      "Women's Health",
      "Regular Check-ups"
    ]
  }
];

const additionalServices = [
  {
    title: "Emergency Care",
    description: "24/7 emergency medical services with rapid response times.",
    icon: "🚑"
  },
  {
    title: "Pharmacy",
    description: "Full-service pharmacy with prescription and OTC medications.",
    icon: "💊"
  },
  {
    title: "Pediatrics",
    description: "Specialized care for infants, children, and adolescents.",
    icon: "👶"
  },
  {
    title: "Physiotherapy",
    description: "Rehabilitation services for improved mobility and recovery.",
    icon: "🦿"
  },
  {
    title: "Mental Health",
    description: "Professional counseling and mental health support services.",
    icon: "🧠"
  },
  {
    title: "Dental Care",
    description: "Comprehensive dental services for the whole family.",
    icon: "🦷"
  }
];

export default Services;
