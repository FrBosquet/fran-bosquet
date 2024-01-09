'use client'

import { useEffect, useState } from "react";

type Props = {
  children: string,
  onDone?: () => void
}

const Cursor = () => <span className="animate-blink">_</span>

const STARTUP_TIME = 2000
const FIXED_TIME = 200
const VARIABLE_TIME = 150

export const TypedHeader = ({ children, onDone }: Props) => {
  const [str, setStr] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const addChar = () => {
    setStr(prev => {
      const prevLength = prev.length

      return children.slice(0, prevLength + 1)
    })
  }

  useEffect(() => {
    if (str === children) {
      setTimeout(() => {
        setShowCursor(false)
        onDone?.()
      }, STARTUP_TIME)
    } else {
      const interval = str.length === 0
        ? STARTUP_TIME
        : FIXED_TIME + VARIABLE_TIME * Math.random()
      setTimeout(addChar, interval)
    }
  }, [str])

  const isDone = str === children

  return <p className={"text-8xl"}>{str}{showCursor ? <Cursor /> : null}</p>
}