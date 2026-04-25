import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#134901" />
        {/* JSON-LD Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Quadri Ismail',
              url: 'https://quadriismail.com',
              jobTitle: 'Senior Product Designer',
              description:
                'Senior Product Designer with 6+ years shipping SaaS across Fintech, GovTech, and AI. Platforms designed for 40M+ users worldwide.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lagos',
                addressCountry: 'NG',
              },
              sameAs: [
                'https://linkedin.com/in/quadriismail',
                'https://behance.net/quadriismail',
              ],
              email: 'quadrihorlar@gmail.com',
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
