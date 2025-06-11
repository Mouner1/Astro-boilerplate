import { GradientText, Section } from 'astro-boilerplate-components';

import { SkillTicker } from '@/partials/SkillTicker';

const Sponsors = () => (
  <Section
    title={
      <>
        Technical <GradientText>Skills</GradientText>
      </>
    }
  >
    <SkillTicker />
  </Section>
);

export { Sponsors };
