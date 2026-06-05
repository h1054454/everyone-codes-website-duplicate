// i18n label lookup — everyone codes
//
// Phase 4 scaffold: the site is English-only for now. `en` is the single
// source of truth; `de` is intentionally empty so every lookup falls back to
// English (the language can be switched, but the content stays EN until the
// translation sprint). To turn German on later, fill `de` with the ready
// strings listed in the comment block below.

export type Lang = 'en' | 'de';

const en = {
  'nav.about': 'About Us',
  'nav.mission': 'Mission',
  'nav.stories': 'Stories',
  'nav.testimonials': 'Testimonials',
  'nav.awards': 'Prizes & Awards',
  'nav.team': 'Team',
  'nav.contact': 'Contact',
  'nav.career': 'Career',
  'nav.programmes': 'AMS Programmes',
  'nav.programme_sd': 'Software Development (Vienna)',
  'nav.companies': 'For Companies',
  'cta.work_with_us': 'Work with us',
  'cta.hire_graduates': 'Hire our graduates',
  'banner.hiring': "We're hiring!",
  'footer.programmes': 'Programmes',
  'footer.imprint': 'Imprint',
  'footer.privacy': 'Privacy',
  'footer.donate': 'Donate',
} as const;

export type UiKey = keyof typeof en;

// Ready first translation batch — drop these into `de` during the
// translation sprint (keep real umlauts ä/ö/ü/ß):
//   'nav.about': 'Über uns',          'nav.mission': 'Mission',
//   'nav.stories': 'Stories',         'nav.testimonials': 'Erfahrungsberichte',
//   'nav.awards': 'Auszeichnungen',   'nav.team': 'Team',
//   'nav.contact': 'Kontakt',         'nav.career': 'Karriere',
//   'nav.programmes': 'AMS-Programme', 'nav.programme_sd': 'Softwareentwicklung (Wien)',
//   'nav.companies': 'Für Unternehmen','cta.work_with_us': 'Zusammenarbeit',
//   'cta.hire_graduates': 'Absolvent*innen anstellen',
//   'banner.hiring': 'Wir stellen ein!',
//   'footer.programmes': 'Programme',  'footer.imprint': 'Impressum',
//   'footer.privacy': 'Datenschutz',   'footer.donate': 'Spenden',
const de: Partial<Record<UiKey, string>> = {};

const dict: Record<Lang, Partial<Record<UiKey, string>>> = { en, de };

/** Look up a UI label; falls back to English when a translation is missing. */
export function t(lang: Lang, key: UiKey): string {
  return dict[lang][key] ?? en[key];
}

/** Coerce Astro.currentLocale (string | undefined) into a known Lang. */
export function toLang(locale: string | undefined): Lang {
  return locale === 'de' ? 'de' : 'en';
}

/**
 * Strip the deploy base path and any locale prefix from a pathname to get the
 * in-site logical path ('/', '/programmes/...'). Base-aware so it works under
 * the GitHub Pages sub-path. Trailing slash is normalised away (except root).
 */
export function toLogicalPath(pathname: string, lang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let p = pathname;
  if (base && p.startsWith(base)) p = p.slice(base.length);
  if (lang === 'de') p = p.replace(/^\/de(?=\/|$)/, '');
  if (!p.startsWith('/')) p = `/${p}`;
  if (p.length > 1) p = p.replace(/\/$/, '');
  return p;
}

// Logical paths (locale- and base-stripped) that have a translated twin.
// The language switcher only renders for paths listed here, so it never
// links to a page that does not exist yet. Add entries as DE pages are built.
export const translatedPaths = new Set<string>(['/']);
