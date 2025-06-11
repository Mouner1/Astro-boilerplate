import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <>
    {/* Court-Side Projects */}
    <Section
      title={
        <>
          Court-Side <GradientText>Projects</GradientText>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        <Project
          name="University Basketball League Operator"
          description="I ran weekly leagues for 200+ students across 4 seasons. Scheduling conflicts? I fixed them. Fairness issues? Built rotation logic. No-shows? Created check-in sheets. I treated every league day like game day and used feedback to boost retention by 15%. Click to read more!"
          link="/"
          img={{
            src: '/assets/images/basketball.svg',
            alt: 'Basketball League Ops',
          }}
          category={
            <>
              <Tags color={ColorTags.SKY}>Scheduling</Tags>
              <Tags color={ColorTags.LIME}>Leadership</Tags>
              <Tags color={ColorTags.INDIGO}>Excel</Tags>
            </>
          }
        />
        <Project
          name="Automation Developer @ Fidelity"
          description="Automated practice scheduling, inventory tracking, and athlete data collection for Fidelity Sports Group using Power Platform and Python, saving 4,000+ hours yearly. Click to read more."
          link="/"
          img={{
            src: '/assets/images/data.svg',
            alt: 'FSG Automation',
          }}
          category={
            <>
              <Tags color={ColorTags.EMERALD}>Power Automate</Tags>
              <Tags color={ColorTags.FUCHSIA}>Python</Tags>
              <Tags color={ColorTags.SKY}>Power BI</Tags>
            </>
          }
        />
        <Project
          name="Middle Eastern Basketball Tournament"
          description="Organized a 150+ person, gender-inclusive tournament with $5K budget, full logistics, and safety planning. Reflected NBA-style community and social impact values. Click to read more."
          link="/"
          img={{
            src: '/assets/images/basketballevent.svg',
            alt: 'Community Tournament',
          }}
          category={
            <>
              <Tags color={ColorTags.YELLOW}>Event Ops</Tags>
              <Tags color={ColorTags.ROSE}>Inclusion</Tags>
              <Tags color={ColorTags.VIOLET}>Leadership</Tags>
            </>
          }
        />
      </div>
    </Section>

    <Section
      title={
        <>
          Personal <GradientText>Projects</GradientText>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        <Project
          name="Multiplayer Chess Game"
          description="Built an interactive online chess game with move validation and multiplayer support using TypeScript and React. Click to play!"
          link="https://mouner1.github.io/chess-game/"
          img={{
            src: '/assets/images/Chess-rafiki.svg',
            alt: 'Chess Game',
          }}
          category={
            <>
              <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
              <Tags color={ColorTags.INDIGO}>TypeScript</Tags>
              <Tags color={ColorTags.ROSE}>Game Dev</Tags>
            </>
          }
        />
        <Project
          name="Smart Aerator Web Platform"
          description="Developed a web interfact that enables real-time control and monitoring of the GryphGrow Smart Aerator Tool. Click to read more!"
          link="https://github.com/Mattman453/aerator-website"
          img={{
            src: '/assets/images/loT.svg',
            alt: 'Chess Game',
          }}
          category={
            <>
              <Tags color={ColorTags.GREEN}>Rust (Rocket)</Tags>
              <Tags color={ColorTags.RED}>JavaScript</Tags>
              <Tags color={ColorTags.ORANGE}>Node.js</Tags>
            </>
          }
        />
      </div>
    </Section>
  </>
);

export { ProjectList };
