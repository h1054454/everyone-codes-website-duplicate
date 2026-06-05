// schema.org EducationalOrganization JSON-LD for the homepage (EN + DE share it).
// Absolute URLs use the production domain; they resolve correctly after the
// Phase 6 cutover (apple-touch-icon.png is emitted to the site root).
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'everyone codes gGmbH',
  alternateName: 'everyone codes',
  url: 'https://everyonecodes.io',
  logo: 'https://everyonecodes.io/apple-touch-icon.png',
  description:
    'Coding academy for everyone — preparing diverse people for careers in IT.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Muthgasse 58/60',
    addressLocality: 'Vienna',
    postalCode: '1190',
    addressCountry: 'AT',
  },
  sameAs: [
    'https://www.linkedin.com/company/everyonecodes',
    'https://www.facebook.com/everyonecodes',
    'https://www.instagram.com/everyonecodes',
    'https://github.com/everyonecodes',
  ],
};
