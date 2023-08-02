import type { AppProps } from 'next/app'
import mixpanel from 'mixpanel-browser';

// import { Analytics } from '@vercel/analytics/react'
// import type { LayoutProps } from '@vercel/examples-ui/layout'

// import { getLayout } from '@vercel/examples-ui'

import '@vercel/examples-ui/globals.css'

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ?? '', { debug: true, track_pageview: true, persistence: 'localStorage'});

function App({ Component, pageProps }: AppProps) {
  // const Layout = getLayout<LayoutProps>(Component)

  return (
      <Component {...pageProps} />
  )
}

export default App
