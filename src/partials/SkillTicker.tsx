const skills = [
  { name: 'Python', icon: '/assets/icons/python.svg' },
  { name: 'Java', icon: '/assets/icons/java.svg' },
  { name: 'JavaScript', icon: '/assets/icons/javascript.svg' },
  { name: 'TypeScript', icon: '/assets/icons/typescript.svg' },
  { name: 'C', icon: '/assets/icons/c.svg' },
  { name: 'C++', icon: '/assets/icons/cplusplus.svg' },
  { name: 'ReactJS', icon: '/assets/icons/react.svg' },
  { name: 'Dart', icon: '/assets/icons/dart.svg' },
  { name: 'Flutter', icon: '/assets/icons/flutter.svg' },
  { name: 'NodeJS', icon: '/assets/icons/nodedotjs.svg' },
  { name: 'SQL', icon: '/assets/icons/mysql.svg' },
  { name: 'Power Platform', icon: '/assets/icons/powerplatform.png' },
  { name: 'Power BI', icon: '/assets/icons/power-bi.svg' },
  { name: 'ASP.NET', icon: '/assets/icons/Asp-net.png' },
  { name: 'Jira', icon: '/assets/icons/jira.svg' },
  { name: 'Unity', icon: '/assets/icons/unity.svg' },
  { name: 'Excel', icon: '/assets/icons/excel.svg' },
  { name: 'Azure', icon: '/assets/icons/azure.svg' },
  { name: 'Astro', icon: '/assets/icons/astro.svg' },
  { name: 'HTML', icon: '/assets/icons/html5.svg' },
  { name: 'CSS', icon: '/assets/icons/css.svg' },
];

const SkillTicker = () => (
  <div className="group mt-10 w-full overflow-hidden">
    <div className="flex animate-scroll gap-4 whitespace-nowrap group-hover:[animation-play-state:paused]">
      {skills.concat(skills).map((skill, index) => (
        <span
          key={index}
          title={skill.name}
          className="inline-flex items-center gap-2 rounded-full bg-gray-700 px-4 py-1 text-sm text-white transition-shadow hover:shadow-lg hover:shadow-cyan-400/40"
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="h-4 w-4 object-contain"
            loading="lazy"
          />
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

export { SkillTicker };
