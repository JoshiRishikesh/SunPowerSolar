"use client";

import React, { useState } from "react";
import { Zap, MapPin, Calendar, CheckCircle, X, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const BRAND_PRIMARY_DARK = "#193f88"; // Deep Navy Blue
const BRAND_ACCENT_LIGHT = "#fdcc14"; // Bright Yellow/Gold
const BRAND_GRAY_LIGHT = "#f3f4f6"; // Light Background

interface Project {
  id: number;
  title: string;
  location: string;
  dateCompleted: string;
  powerOutput: string;
  panels: number;
  estimatedSavings: string;
  imageUrl: string;
  summary: string;
  details: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "The Smith Residence",
    location: "Miami, FL",
    dateCompleted: "October 2024",
    powerOutput: "12.5 kW",
    panels: 32,
    estimatedSavings: "$1,800/year",
    imageUrl: "/home.webp",
    summary: "A challenging ground-mount installation with high energy demands.",
    details:
      "This project featured a customized ground-mount solution to maximize sun exposure on a large suburban property. We used high-efficiency REC panels and a Tesla Powerwall for battery backup, ensuring energy independence during frequent Florida storms. Permitting was completed in a record 3 weeks.",
  },
  {
    id: 2,
    title: "Downtown Office Upgrade",
    location: "Orlando, FL",
    dateCompleted: "September 2024",
    powerOutput: "50.0 kW",
    panels: 120,
    estimatedSavings: "$8,500/year",
    imageUrl: "/carousal1.webp",
    summary: "Commercial flat-roof system dramatically reducing operating costs.",
    details:
      "Installed a large-scale, non-penetrating system on a commercial flat roof. The client saw immediate cost reductions and achieved LEED certification points. We used SolarEdge optimizers to manage shading from adjacent high-rise buildings, maximizing total energy yield.",
  },
  {
    id: 3,
    title: "Rural Farm Installation",
    location: "Gainesville, FL",
    dateCompleted: "August 2024",
    powerOutput: "8.0 kW",
    panels: 20,
    estimatedSavings: "$1,200/year",
    imageUrl: "/carousal2.webp",
    summary: "Standard residential roof mount with excellent south-facing orientation.",
    details:
      "A straightforward, high-impact installation for a family home. The roof had perfect orientation, allowing for maximum panel efficiency. The system was integrated with a smart home monitoring system, giving the owner real-time performance data via a mobile app.",
  },
  {
    id: 4,
    title: "Beachfront Modern Home",
    location: "Naples, FL",
    dateCompleted: "July 2024",
    powerOutput: "15.2 kW",
    panels: 40,
    estimatedSavings: "$2,200/year",
    imageUrl: "/carousal3.webp",
    summary: "Aesthetics-focused installation using black-on-black panels.",
    details:
      "We designed a low-profile, sleek system for a luxury home, prioritizing aesthetics. The black-on-black panels blended seamlessly with the tile roof. Due to the coastal location, all mounting hardware was specified for high corrosion resistance.",
  },
];

// ------------------- Components -------------------

const InfoItem: React.FC<{
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}> = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col">
    <span className="text-xs font-semibold text-gray-500 uppercase">{label}</span>
    <div className="flex items-center mt-1">
      <Icon className="w-5 h-5 mr-1" style={{ color: BRAND_PRIMARY_DARK }} />
      <span className="text-sm md:text-base font-medium text-gray-900">{value}</span>
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({
  project,
  onClick,
}) => (
  <motion.div
    className="bg-white rounded-3xl shadow-md overflow-hidden cursor-pointer group border-2 border-transparent hover:border-yellow-400 transition-all duration-300 hover:shadow-xl"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false, amount: 0.3 }}
  >
    <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-t-3xl">
      <Image
        src={project.imageUrl}
        alt={`Solar installation at ${project.location}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ borderTopLeftRadius: "1.5rem", borderTopRightRadius: "1.5rem" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <span className="absolute bottom-3 left-4 text-white font-bold text-lg sm:text-xl drop-shadow-lg">
        {project.title}
      </span>
    </div>
    <div className="p-5">
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-2" style={{ color: BRAND_ACCENT_LIGHT }} />
        <span className="font-medium">{project.location}</span>
      </div>
      <div className="flex items-center text-sm font-semibold text-gray-800">
        <Zap className="w-4 h-4 mr-2" style={{ color: BRAND_PRIMARY_DARK }} />
        <span>{project.powerOutput} System</span>
      </div>
      <p className="text-gray-500 text-sm mt-3 line-clamp-2">{project.summary}</p>
    </div>
  </motion.div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({
  project,
  onClose,
}) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <Image
            src={project.imageUrl}
            alt={`Solar installation at ${project.location}`}
            width={800}
            height={400}
            className="w-full h-72 object-cover rounded-t-3xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-gray-900 hover:bg-white transition-colors"
            aria-label="Close project details"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: BRAND_PRIMARY_DARK }}>
            {project.title}
          </h2>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 rounded-xl"
            style={{ backgroundColor: BRAND_GRAY_LIGHT }}
          >
            <InfoItem icon={MapPin} label="Location" value={project.location} />
            <InfoItem icon={Calendar} label="Completed" value={project.dateCompleted} />
            <InfoItem icon={Zap} label="System Size" value={project.powerOutput} />
            <InfoItem icon={CheckCircle} label="Panels" value={`${project.panels} Units`} />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed mb-6">{project.details}</p>

          <div className="flex items-center justify-between p-4 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400">
            <div className="flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-gray-800" />
              <span className="text-gray-800 text-lg">Est. Annual Savings:</span>
            </div>
            <span className="text-xl font-extrabold text-gray-800">
              {project.estimatedSavings}
            </span>
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full py-3 rounded-xl text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-opacity-90"
            style={{ backgroundColor: BRAND_PRIMARY_DARK }}
          >
            Close Details
          </button>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ color: BRAND_PRIMARY_DARK }}
          >
            Our Completed Projects (Detailed Portfolio)
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto">
            Click on any project below to view detailed specifications, scope of
            work, and estimated annual savings.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </section>
  );
}
