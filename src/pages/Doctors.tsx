
import { Users, Star } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  image: string;
}

interface Department {
  name: string;
  description: string;
  members: TeamMember[];
}

const Doctors = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-lg text-gray-600">
            Meet our dedicated team of healthcare professionals committed to providing
            exceptional care for your family.
          </p>
        </div>

        {/* Departments */}
        {departments.map((department, index) => (
          <div 
            key={department.name}
            className="mb-16 animate-fadeIn"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-6 h-6 text-primary-blue" />
              <h2 className="text-2xl font-bold text-gray-900">{department.name}</h2>
            </div>
            <p className="text-gray-600 mb-8">{department.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {department.members.map((member) => (
                <div 
                  key={member.name}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-2xl">👨‍⚕️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-primary-blue font-medium">{member.role}</p>
                      <p className="text-gray-600 mt-1 text-sm">{member.specialization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-primary-blue">
            <Star className="w-5 h-5" />
            <span className="font-medium">Available 24/7 for Emergency Care</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const departments: Department[] = [
  {
    name: "Medical Staff",
    description: "Our medical team provides comprehensive healthcare services for patients of all ages, focusing on preventive care and long-term health management.",
    members: [
      {
        name: "Dr. Sarah Johnson",
        role: "Head of Family Medicine",
        specialization: "Primary Care & Preventive Medicine",
        image: "",
      },
      {
        name: "Dr. Michael Okonkwo",
        role: "Family Physician",
        specialization: "Pediatric & Adult Care",
        image: "",
      },
      {
        name: "Dr. Aisha Bello",
        role: "Family Physician",
        specialization: "Geriatric Care",
        image: "",
      },
    ],
  },
  {
    name: "Nursing Staff",
    description: "Our dedicated nursing team provides round-the-clock patient care with compassion and expertise.",
    members: [
      {
        name: "Nurse Joy Ojehonmon",
        role: "Head Nurse",
        specialization: "Emergency Care",
        image: "",
      },
      {
        name: "Nurse Peter Obi",
        role: "Senior Nurse",
        specialization: "Pediatric Care",
        image: "",
      },
      {
        name: "Nurse Grace Adewale",
        role: "Nurse",
        specialization: "General Care",
        image: "",
      },
    ],
  },
  {
    name: "Laboratory Staff",
    description: "Our laboratory team ensures accurate and timely diagnostic testing to support patient care.",
    members: [
      {
        name: "Dr. Chidi Okafor",
        role: "Lab Director",
        specialization: "Clinical Pathology",
        image: "",
      },
      {
        name: "Samuel Adebayo",
        role: "Senior Lab Technician",
        specialization: "Hematology",
        image: "",
      },
      {
        name: "Janet Nnamdi",
        role: "Lab Technician",
        specialization: "Biochemistry",
        image: "",
      },
    ],
  },
  {
    name: "Pharmacy",
    description: "Our pharmacy team ensures safe and effective medication management for all patients.",
    members: [
      {
        name: "Pharm. Amina Hassan",
        role: "Chief Pharmacist",
        specialization: "Clinical Pharmacy",
        image: "",
      },
      {
        name: "Pharm. David Oluwole",
        role: "Staff Pharmacist",
        specialization: "Dispensing",
        image: "",
      },
    ],
  },
  {
    name: "Administrative Staff",
    description: "Our administrative team ensures smooth operations and excellent patient service.",
    members: [
      {
        name: "Mrs. Elizabeth Ojo",
        role: "Hospital Administrator",
        specialization: "Healthcare Management",
        image: "",
      },
      {
        name: "Mr. John Adegoke",
        role: "Front Desk Manager",
        specialization: "Patient Relations",
        image: "",
      },
    ],
  },
  {
    name: "Support Staff",
    description: "Our support staff maintains a clean, safe, and welcoming environment for all patients and visitors.",
    members: [
      {
        name: "Mr. Ibrahim Musa",
        role: "Head of Maintenance",
        specialization: "Facility Management",
        image: "",
      },
      {
        name: "Mrs. Florence Eze",
        role: "Head of Housekeeping",
        specialization: "Hospital Sanitation",
        image: "",
      },
    ],
  },
];

export default Doctors;
