import React from "react";

export default function VisionMissionValues() {
    const items = [
      {
        icon: "👁️", // Replace with an image if needed
        title: "VISION",
        description:
          "To deliver a total safe, secure, Quality and cost-effective transport services to the satisfaction of our customers.",
      },
      {
        icon: "🎯",
        title: "MISSION",
        description:
          "Our priority is to satisfy every customer, every time, through outstanding, professional services.",
      },
      {
        icon: "❓",
        title: "VALUES",
        description:
          "We strive for innovation and value-added services which make us stand ahead of others.",
      },
    ];
  
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {items.map((item, index) => (
            <div
              key={index}
              className=" shadow-lg border bg-gray-100 rounded-lg p-6 text-center"
            >
              <div className="flex justify-center">
                <span className="text-5xl" role="img" aria-label={item.title}>
                  {item.icon}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  