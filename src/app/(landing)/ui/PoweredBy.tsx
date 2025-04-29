const techs = [
  {
    name: "Swift",
    icon: "/icons/swift.svg",
    url: "https://developer.apple.com/swift/",
    desc: "A powerful programming language for building apps on Apple platforms.",
    gradient: "animate-card-orange",
  },
  {
    name: "visionOS",
    icon: "/icons/visionos.svg",
    url: "https://developer.apple.com/visionos/",
    desc: "The spatial operating system for Apple Vision Pro apps.",
    gradient: "animate-card-blue",
  },
  {
    name: "OpenAI",
    icon: "/icons/openai.svg",
    url: "https://openai.com",
    desc: "AI services for natural language understanding and generation.",
    gradient: "animate-card-red",
  },
];

export const PoweredBy = () => {
  return (
    <div className="px-5 space-y-10">
      <div className="animate-card w-fit mx-auto rounded-lg bg-zinc-900 px-6 py-3 text-xl font-bold">
        Powered By
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {techs.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`animate-card bg-black group p-6 rounded-xl border border-white/20 w-full max-w-sm ${tech.gradient}`}
          >
            <div className="flex items-center gap-4 mb-3">
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
