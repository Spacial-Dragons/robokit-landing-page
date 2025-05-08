import { CPU, Swift, VisionPro } from "@/icons/";

const techs = [
  {
    name: "Swift",
    icon: <Swift />,
    url: "https://developer.apple.com/swift/",
    desc: "A powerful programming language for building apps on Apple platforms.",
    gradient: "animate-card-orange",
  },
  {
    name: "visionOS",
    icon: <VisionPro />,
    url: "https://developer.apple.com/visionos/",
    desc: "The spatial operating system for Apple Vision Pro apps.",
    gradient: "animate-card-blue",
  },
  {
    name: "Robotics OS",
    icon: <CPU />,
    url: "https://ros.org",
    desc: "Compatible with your preferred robotics OS or middleware, from ROS to custom stacks.",
    gradient: "animate-card-green",
  },
];

export const PoweredBy = () => {
  return (
    <div className="px-5 space-y-10">
      <div className="animate-card w-fit mx-auto rounded-lg bg-secondary text-secondary-foreground px-6 py-3 text-xl font-bold">
        Powered By
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {techs.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`animate-card bg-card group p-6 rounded-xl border border-border w-full max-w-sm ${tech.gradient} space-y-2.5`}
          >
            <div className="w-10">{tech?.icon}</div>

            <div className="flex items-center">
              <h4 className="text-lg font-semibold group-hover:underline">
                {tech.name}
              </h4>
            </div>
            <p className="text-sm">{tech.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
