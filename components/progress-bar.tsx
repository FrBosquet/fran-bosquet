'use client'

import { AppProgressBar } from 'next-nprogress-bar'

export const ProgressBar = () => {
  return (
    <AppProgressBar
      color="#99f6e4"
      height="8px"
      options={{
        showSpinner: false
      }}
      startPosition={0.3}
    />
  )
}
