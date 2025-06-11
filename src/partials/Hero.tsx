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
          I’m a <strong>grassroots basketball operator</strong> and a graduate{' '}
          <strong>engineering student</strong> passionate about
          <strong> leadership</strong>, <strong> logistics</strong>, and{' '}
          <strong> data-driven operations</strong>. I’ve built communities, led
          leagues, and developed tools to streamline programs and enhance
          impact. Now, I’m ready to bring that same energy to the{' '}
          <strong>NBA</strong> 🏀.
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
