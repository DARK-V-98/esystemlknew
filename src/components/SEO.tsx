import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  section?: string;
}

const BASE_URL = 'https://esystemlk.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const sectionMeta: Record<string, { title: string; description: string }> = {
  services: {
    title: 'Our Services | ESYSTEMLK',
    description: 'Custom web apps, e-commerce platforms, SaaS development, mobile apps, API development, AI integration, and DevOps solutions in Sri Lanka.',
  },
  portfolio: {
    title: 'Portfolio | ESYSTEMLK',
    description: 'Explore our featured projects — SaaS dashboards, e-commerce platforms, AI chatbots, mobile apps, and cloud infrastructure built by ESYSTEMLK.',
  },
  pricing: {
    title: 'Pricing | ESYSTEMLK',
    description: 'Flexible software development pricing plans for businesses of all sizes. Basic, Professional, and Enterprise packages available.',
  },
  about: {
    title: 'About Us | ESYSTEMLK',
    description: 'ESYSTEMLK — 8+ years of elite software engineering in Sri Lanka. We build scalable digital systems for global businesses.',
  },
  contact: {
    title: 'Contact Us | ESYSTEMLK',
    description: 'Get in touch with ESYSTEMLK to start your software project. Based in Rajagiriya, Sri Lanka.',
  },
  faq: {
    title: 'FAQ | ESYSTEMLK',
    description: 'Frequently asked questions about ESYSTEMLK\'s software development process, technologies, timelines, and pricing.',
  },
};

export default function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  section,
}: SEOProps) {
  const meta = section ? sectionMeta[section] : null;

  const siteTitle = title
    ? `${title} | ESYSTEMLK`
    : meta?.title ?? 'ESYSTEMLK | Elite Software Engineering Company Sri Lanka';

  const siteDescription = description
    ?? meta?.description
    ?? 'ESYSTEMLK is Sri Lanka\'s leading software engineering company. We build custom web apps, mobile apps, SaaS platforms, e-commerce solutions, and AI integrations.';

  const canonical = section ? `${BASE_URL}/#${section}` : url;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content="software engineering sri lanka, web development sri lanka, mobile app development, SaaS development, e-commerce platform, AI integration, custom software, ESYSTEMLK, rajagiriya" />
      <meta name="author" content="ESYSTEMLK" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ESYSTEMLK" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />

      {/* Geo */}
      <meta name="geo.region" content="LK" />
      <meta name="geo.placename" content="Sri Lanka" />
    </Helmet>
  );
}
