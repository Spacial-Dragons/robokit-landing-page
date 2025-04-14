import { Code, Handshake, PersonStanding } from "lucide-react";

const features = [
  {
    icon: <Code size={64} />,
    title: "Built for Developers",
    description:
      "Clean, extensible code with modern tooling for a seamless dev experience.",
    hoverShadow: "hover:shadow-[0_0_25px_#E592FB]",
  },
  {
    icon: <Handshake size={64} />,
    title: "Seamless Integration",
    description:
      "Easily connects with your existing tools, APIs, and workflows.",
    hoverShadow: "hover:shadow-[0_0_25px_#0066FF]",
  },
  {
    icon: <PersonStanding size={64} />,
    title: "Human-Centered Design",
    description:
      "Crafted with a focus on usability, accessibility, and real user needs.",
    hoverShadow: "hover:shadow-[0_0_25px_#A500F9]",
  },
];

export const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 max-w-7xl mx-auto gap-5">
      {features.map((feature) => (
        <div
          key={feature.title}
          className={`flex flex-col gap-10 items-center border border-white/20 rounded-lg p-10 transition-all hover:bg-card-hover ${feature.hoverShadow}`}
        >
          {feature.icon}

          <div className="space-y-5">
            <h3 className="text-3xl font-semibold text-center">
              {feature.title}
            </h3>

            <p className="font-light text-center">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
