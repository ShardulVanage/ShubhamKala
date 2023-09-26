import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Welcome to Shubham Kala Classes, your gateway to a world of creativity and self-expression!
          Our art classes offer a diverse range of artistic disciplines to nurture your passion and talent.
        </p>
        <p className="mt-4">
          At Shubham Kala Classes, we believe that art is a powerful medium of communication, and it's our mission to help you unlock your artistic potential.
          Whether you're a beginner looking to explore the world of art or an experienced artist seeking to enhance your skills,
          our classes cater to all levels.
        </p>
        <p className="mt-4">
          you'll have the opportunity to master these artistic techniques and discover your unique artistic voice.
        </p>
        <p className="mt-4">
          Our curriculum covers a wide spectrum of art forms, includs
        </p>
        <ul role="list" className="mt-8 space-y-3 [&>li>svg]:fill-red-400">
          {[
            'Drawing',
            'Sketching',
            ' Portrait Drawing',
            'Landscape Painting',
            ' Warli Art',
            'Calligraphy',
            ' Neurographic Art',
            'Elementary Drawing',
            ' Intermediate Drawing',
            ' Exam Preparation for Elementary and Intermediate Drawing',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          join us at Shubham Kala Classes and embark on a creative journey like no other.
          Unleash your imagination, enhance your skills, and become a part of our vibrant artistic community. Let's paint, draw, and create together!
        </p>

      </Container>
    </section>
  )
}
