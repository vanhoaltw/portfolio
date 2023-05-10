import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'Hoa Nguyen',
  siteName: 'theodorusclarence.com',
  description:
    'An online portfolio and blog by Hoa Nguyen. Showcase of my projects, and some of my thoughts about website development.',
  url: '',
  image:
    'https://res.cloudinary.com/audio-life/image/upload/v1682937959/z4307307354915_ecf9978fe47a8defeb7affcbbb4a5315_afbroo.jpg',
  type: 'website',
  robots: 'follow, index',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  isBlog?: boolean;
  banner?: string;
  canonical?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link
        rel='canonical'
        href={meta.canonical ? meta.canonical : `${meta.url}${router.asPath}`}
      />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@th_clarence' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta name='author' property='article:author' content='vanhoaltw' />
        </>
      )}

      {/* Favicons */}
      <link rel='icon' href='/logo.svg' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}
