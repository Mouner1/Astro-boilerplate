import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Mouner Dabjan</GradientText> 👋
        </>
      }
      description={
        <>
          I’m a <strong>full-stack developer</strong> and{' '}
          <strong>engineering graduate</strong> passionate about{' '}
          <strong>automation</strong> 🤖, <strong>data-driven solutions</strong>{' '}
          📊, and <strong>logistics at scale</strong> 📦. I’ve led grassroots
          basketball leagues and built the tools behind them, streamlining
          operations with code, automating workflows, and enhancing user
          experiences. This portfolio brings together my technical skills, from{' '}
          <strong>React</strong> and <strong>Python</strong> to{' '}
          <strong>Power Platform</strong> and <strong>Azure</strong>, with
          real-world leadership that drives impact through software.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/mouner-avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/Mouner1" target="_blank">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
          <a href="mailto:mouner.be@gmail.com">
            <HeroSocial src="/assets/images/gmail-icon.png" alt="Gmail icon" />
          </a>
          <a href="https://www.linkedin.com/in/mounerdabjan/" target="_blank">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
