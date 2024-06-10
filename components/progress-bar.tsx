'use client'

import { AppProgressBar } from 'next-nprogress-bar'

export const ProgressBar = () => {
  return <AppProgressBar
    height='8px'
    color='#99f6e4'
    startPosition={0.3}
    options={{
      showSpinner: false,
    }}
  />
}