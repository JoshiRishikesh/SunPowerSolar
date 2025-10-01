import React from "react";
import { Award, Factory, Home, Sun, Shield } from "lucide-react";

const BRAND_ACCENT_LIGHT = "#fdcc14"; // Gold
const BRAND_NATURE_GREEN = "#0e6b50"; // Deep Forest Green

const timelineEvents = [
  {
    year: "2010",
    title: "Founding Vision: A Local Energy Revolution",
    description:
      "Our company was founded by a team of experienced energy engineers with the mission to bring affordable, high-quality solar power to local communities.",
    icon: Factory,
  },
  {
    year: "2014",
    title: "Achieving Tier-One Certification",
    description:
      "After years of dedicated work and successful installations, we achieved our first major industry certification, solidifying our commitment to quality materials and craftsmanship.",
    icon: Award,
  },
  {
    year: "2018",
    title: "Scaling Our Local Impact",
    description:
      "We celebrated our 100th residential solar installation. This milestone allowed us to expand our local teams and resources to serve more homeowners efficiently.",
    icon: Home,
  },
  {
    year: "2022",
    title: "Launch of the 25-Year Protection Plan",
    description:
      "Demonstrating complete confidence in our systems, we launched our industry-leading 25-year performance and workmanship warranty for all clients.",
    icon: Shield,
  },
  {
    year: "Today",
    title: "Committed to a Sustainable Future",
    description:
      "With over 600 successful projects, we continue to innovate, focusing on smart energy management and achieving permanent energy independence for our clients.",
    icon: Sun,
  },
];

export default function OurHistoryTimeline() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="absolute inset-0 bg-gradient-radial from-yellow-100/40 via-transparent to-transparent opacity-70 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: BRAND_NATURE_GREEN }}
          >
            Our Journey: A Decade of Sustainable Energy
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            From a small startup to a local leader, every milestone marks our
            commitment to quality and lasting impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop vertical line */}
          <div
            className="hidden md:block absolute left-1/2 w-1 transform -translate-x-1/2 h-full rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${BRAND_NATURE_GREEN}, ${BRAND_ACCENT_LIGHT})`,
            }}
          ></div>

          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={event.year}
                className="mb-12 flex flex-col md:flex-row items-center w-full relative"
              >
                {/* Card */}
                <div
                  className={`w-full md:w-1/2 px-4 ${
                    isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
                  style={{ order: isEven ? 1 : 3 }}
                >
                  <div
                    className="relative bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-md border border-transparent transition duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={{
                      borderImage: `linear-gradient(90deg, ${BRAND_ACCENT_LIGHT}, ${BRAND_NATURE_GREEN}) 1`,
                    }}
                  >
                    {/* Year badge */}
                    <span
                      className="absolute -top-5 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:-translate-x-0 text-sm font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: BRAND_NATURE_GREEN,
                        color: "white",
                      }}
                    >
                      {event.year}
                    </span>

                    <h3
                      className="text-xl sm:text-2xl font-bold mb-2"
                      style={{ color: BRAND_NATURE_GREEN }}
                    >
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div
                  className="md:w-auto w-full flex justify-center py-4 md:py-0 relative"
                  style={{ order: 2 }}
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-md z-10"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND_NATURE_GREEN}, ${BRAND_ACCENT_LIGHT})`,
                    }}
                  >
                    <event.icon
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      style={{ color: "white" }}
                    />
                  </div>

                  {/* Mobile vertical line */}
                  <div
                    className="absolute block md:hidden w-0.5 h-full left-1/2 top-0 transform -translate-x-1/2 z-0"
                    style={{
                      background: `linear-gradient(to bottom, ${BRAND_NATURE_GREEN}, ${BRAND_ACCENT_LIGHT})`,
                    }}
                  ></div>
                </div>

                {/* Empty block for alignment in desktop */}
                <div
                  className="hidden md:block w-1/2"
                  style={{ order: isEven ? 3 : 1 }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
