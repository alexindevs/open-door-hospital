import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold text-white bg-primary-blue bg-opacity-90 rounded-full">
              Welcome to Open Door Hospital
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight animate-fadeIn">
              Your Optimal Health is Our Priority
            </h1>
            <p className="text-xl text-gray-100 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Providing compassionate, quality healthcare services to Nigerian families for over 10 years.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-red text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Book Appointment
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-blue border border-primary-blue rounded-lg hover:bg-blue-50 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary-blue font-semibold">Our Services</span>
            <h2 className="text-3xl font-bold mt-2 text-gray-900">Comprehensive Healthcare Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-shadow animate-fadeIn"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary-blue font-semibold">Why Choose Us</span>
            <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900">
              A Legacy of Excellence in Healthcare
            </h2>
            <p className="text-gray-600">
              For over 10 years, we've been providing exceptional medical care to families,
              combining advanced technology with compassionate service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 bg-white rounded-xl shadow-sm animate-fadeIn"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="text-3xl font-bold text-primary-red mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary-blue font-semibold">Our Location</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Find Us Here</h2>
            <p className="text-gray-600">
              Conveniently located in Egbeda, Lagos. Visit us today for quality healthcare services.
            </p>
          </div>
          <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4668699133863!2d3.2881111!3d6.5887443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b903800db0f0f%3A0x9ab211e69888aa97!2s4%20Owutedo%20St%2C%20Isheri%20Olofin%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1740392477174!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Emergency Care",
    description: "24/7 emergency medical services with rapid response times and skilled professionals.",
    icon: <span className="text-2xl">🏥</span>,
  },
  {
    title: "Family Medicine",
    description: "Comprehensive healthcare services for all family members, from infants to elderly.",
    icon: <span className="text-2xl">👨‍👩‍👦</span>,
  },
  {
    title: "Specialized Treatment",
    description: "Advanced medical treatments across various specialties with modern equipment.",
    icon: <span className="text-2xl">⚕️</span>,
  },
];

const stats = [
  { value: "10+", label: "Years of Service" },
  { value: "5k+", label: "Patients Treated" },
  { value: "50+", label: "Medical Experts" },
  { value: "24/7", label: "Emergency Care" },
];

export default Index;
