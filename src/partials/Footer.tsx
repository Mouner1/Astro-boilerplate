import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <p className="text-center text-sm text-gray-400">
      © 2025 {AppConfig.site_name}. Built with hustle, heart, and hoops.
    </p>
  </Section>
);

export { Footer };
