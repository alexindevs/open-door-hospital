
const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-600">
            A legacy of excellence in healthcare, serving the community since 2015.
          </p>
        </div>

        {/* Mission & Vision with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="bg-gray-100 rounded-xl aspect-video overflow-hidden">
            <img 
              src="/assets/smiling_nurses_on_stairs.jpeg" 
              alt="Hospital Building"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide accessible, high-quality healthcare services to our community
                with compassion and excellence, ensuring every patient receives
                personalized care in a welcoming, family-oriented environment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading family healthcare provider in Lagos, known for our
                commitment to medical excellence, patient satisfaction, and community
                wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Admin Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adminTeam.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-blue font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History with Images */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our History</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="text-gray-600 mb-4">
                Founded in 2015 by the Ojehonmon family, Open Door Hospital began as a small
                clinic with a simple mission: to provide quality healthcare to the local
                community. Over a decade, we have grown into a comprehensive
                healthcare facility while maintaining our commitment to personalized,
                family-centered care.
              </p>
              <p className="text-gray-600 mb-4">
                Today, our state-of-the-art facility serves thousands of patients
                annually, offering a wide range of medical services from routine check-ups
                to emergency care. We continue to invest in the latest medical technology
                and attract the best healthcare professionals to ensure our patients
                receive the highest standard of care.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden">
                <img 
                  src="/assets/nurses_community_service.jpeg" 
                  alt="Historical Photo 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden">
                <img 
                  src="/assets/staff_at_work.jpeg" 
                  alt="Historical Photo 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden">
                <img 
                  src="/assets/vaccinating_kid.jpeg" 
                  alt="Historical Photo 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden">
                <img 
                  src="/assets/open_door_staff.jpeg" 
                  alt="Historical Photo 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 py-16 px-4 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of patient care and service
                delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We treat every patient with empathy, dignity, and respect.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace modern medical advancements while maintaining our personal
                touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const adminTeam = [
  {
    name: "Dr. Solomon Ojehonmon",
    role: "Medical Director/Chief Executive Officer",
    image: "/placeholder.svg",
    description: "With over 30 years of experience in healthcare management and clinical practice."
  },
  {
    name: "Barr. Beatrice Ojehonmon",
    role: "Director of Operations/Head of Administration",
    image: "/placeholder.svg",
    description: "Leading our administrative team to ensure smooth operations and patient satisfaction."
  },
  {
    name: "Mrs. Stone Rock",
    role: "Head of Nursing",
    image: "/placeholder.svg",
    description: "Ensuring excellence in patient care through our dedicated nursing team."
  }
];

export default About;
