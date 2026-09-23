import { PortableText } from '@portabletext/react'
import { useLoaderData, type LoaderFunctionArgs } from 'react-router'
import { categoryBg } from '../lib/categories'
import { getProject, urlFor } from '../lib/sanity'

export async function loader({ params }: LoaderFunctionArgs) {
  const project = await getProject(params.slug!)
  if (!project) throw new Response('Not found', { status: 404 })
  return project
}

export default function ProjectPage() {
  const project = useLoaderData<typeof loader>()
  const category = project.categories?.[0]

  const details = [
    ['Year', project.year],
    ['Client', project.client],
    ['Shown at', project.shownAt?.join(', ')],
  ].filter(([, value]) => value)

  return (
    <article className="max-w-3xl">
      <h1 className="text-4xl font-semibold">{project.title}</h1>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        {category && (
          <span className={`rounded px-2 py-0.5 uppercase tracking-wide ${categoryBg(category)}`}>
            {category}
          </span>
        )}
        {details.map(([label, value]) => (
          <span key={label}>
            <b>{label}:</b> {value}
          </span>
        ))}
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="underline">
            {project.link}
          </a>
        )}
      </div>

      {project.body && (
        <div className="mt-8 space-y-4 leading-relaxed text-white/90">
          <PortableText value={project.body} />
        </div>
      )}

      <div className="mt-10 space-y-6">
        {project.carouselImages?.map((image) => (
          <img
            key={image._key}
            src={urlFor(image).width(1600).url()}
            alt=""
            className="w-full rounded-lg"
          />
        ))}
      </div>
    </article>
  )
}
