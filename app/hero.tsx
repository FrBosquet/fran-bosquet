'use client'

import { TypedHeader } from "components/TypedHeader"
import Image from "next/image"
import FranBosquet from 'public/images/fran-bosquet.webp'
import { useState } from "react"
import { twMerge } from "tailwind-merge"

export const Hero = () => {
  const [isDone, setIsDone] = useState(false)

  const handleDone = () => setIsDone(true)

  return <section className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
    <Image
      width={300}
      height={300}
      className={twMerge("transition duration-1000 rounded-full shadow-xl border-2 border-teal-200/25", isDone ? "opacity-100 rotate-0" : "opacity-0 rotate-12")}
      src={FranBosquet}
      alt="Fran Bosquet"
    />
    <div className="flex flex-col gap-4 text-neutral-300 text-lg">
      <TypedHeader onDone={handleDone}>Hi! This is Fran</TypedHeader>
      <p className={twMerge("transition duration-1000 text-balance", isDone ? "opacity-100" : "opacity-0")}>I&apos;m a software engineer with more than 6 years of experience building web apps. I focus on <strong>code quality</strong> and <strong>developer experience</strong> as my goal is to create better products by increasing the joy of working on them. I developed my coding career in the JavaScript ecosystem so I&apos;m proficient in React, Typescript, Webpack and Node</p>
      <p className={twMerge("transition duration-1000 text-balance", isDone ? "opacity-100" : "opacity-0")}>Coming from a different industry (construction) I built a career in the tech industry from the ground up starting from my hobby: <strong>Coding</strong></p>
    </div>
  </section>
}