import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Drawing & Sketching': {
    'Pencil Drawing': "",
    'Charcoal Drawing': "",
    'Pastel Drawing': "",
    'Storyboard Sketch ': "",
    'Architectural Sketch': "",
    'Character Sketch': "",
  },
  'Portrait Drawing': {
    'Realistic Portrait Drawing': "",
    'Charcoal Portrait Drawing': "",
    'Graphite Portrait Drawing': "",
    'Digital Portrait Drawing': "",
    'Illustrative Portrait Drawing': "",
  },
  'Landscape Painting': {
    ' Abstract Landscape Painting': "",
    'Contemporary Landscape Painting': "",
    'Tonalist Landscape Painting': "",
    'Miniature Landscape Painting': "",
  },

  'Warli Art': {
    'Traditional Warli Art': "",
    'Warli Mural Art': "",
    'Warli Fabric and Textile Art': "",
    'Warli Jewelry': "",
  },
  'Calligraphy': {
    'talic Calligraphy': "",
    'Copperplate Calligraphy': "",
    'Brush Calligraphy': "",
    'Modern Calligraphy': "",
  },
  'Neurographic Art': {
    'Mandala Neurographic Art': "",
    'Emotive Neurographic Art': "",
    'Symmetrical Neurographic Art': "",
    '  Nature-Inspired Neurographic Art': "",
  },
  'Calligraphy': {
    'talic Calligraphy': "",
    'Copperplate Calligraphy': "",
    'Brush Calligraphy': "",
    'Modern Calligraphy': "",
  },
  'Calligraphy': {
    'talic Calligraphy': "",
    'Copperplate Calligraphy': "",
    'Brush Calligraphy': "",
    'Modern Calligraphy': "",
  },

}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="" id="table-of-contents-title">
          What we teach
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          At Shubham Kala Classes, we offer a diverse range of art courses designed to cater to individuals of all skill levels and ages.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Our courses are structured to provide a well-rounded art education,
          covering a variety of artistic disciplines. Here's what you can expect to learn in our classes:

        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-mono text-slate-400"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
