import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Uberrimae Fidei</span>,
    docsRepositoryBase: 'https://github.com/inDemniFi/BitcoinDocs/issues/new',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Uberrimae Fidei',
      }
    }
  },
  project: {
    link: 'https://github.com/indemnifi/Uberrimae',
  },
  chat: {
    link: 'https://discord.com',
  },

  footer: {
    text: 'Uberrimae Fidei Insurance Documents',
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://pbs.twimg.com/profile_images/1698769141702754304/ZMVFgWud_400x400.jpg'
        : `https://twitter.com/uberimaefidei?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Bitcoin Captive Insurance"
        />
        <meta
          name="og:description"
          content="Bitcoin Captive Insurance"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="https://twitter.com/inDemniFi" />
        <meta name="twitter:url" content="https://bitcoindocs.vercel.app" />
        <meta
          name="og:title"
          content={title ? title + ' – inDemniFi' : ''}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="inDemniFi" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
}

export default config
