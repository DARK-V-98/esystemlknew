import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title, 
  description, 
  image = 'https://ais-dev-uhfsz4nrwxsy6gq5uuvz7r-375837658547.asia-east1.run.app/og-image.jpg', 
  url = 'https://ais-dev-uhfsz4nrwxsy6gq5uuvz7r-375837658547.asia-east1.run.app' 
}: SEOProps) {
  const { t } = useLanguage();
  
  const siteTitle = title ? `${title} | ESYSTEMLK` : 'ESYSTEMLK | Elite Software Engineering Sri Lanka';
  const siteDescription = description || t.hero.subtitle;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="keywords" content="software engineering, sri lanka, web development, mobile apps, AI, ESYSTEMLK, custom software, rajagiriya" />
      <meta name="author" content="ESYSTEMLK" />
    </Helmet>
  );
}
