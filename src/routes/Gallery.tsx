import { PortableText } from '@portabletext/react'
import { Link, useLoaderData } from 'react-router'
import { categoryBg } from '../lib/categories'
import { getProjects, urlFor } from '../lib/sanity'

export const loader = () => getProjects()

export default function Gallery() {
  const projects = useLoaderData<typeof loader>()

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => {
        const category = project.categories?.[0]
        return (
          <Link
            key={project._id}
            to={`/${project.slug}`}
            className="group relative flex aspect-[2/1] items-center justify-center overflow-hidden rounded-lg"
          >
            {project.mainImage && (
              <img
                src={urlFor(project.mainImage).width(1200).height(600).url()}
                alt=""
                className="absolute inset-0 size-full object-cover blur-sm brightness-50 transition group-hover:blur-none"
              />
            )}
            <div className="relative p-6 text-center">
              <span
                className={`inline-block rounded px-2 py-0.5 text-xs uppercase tracking-wide ${categoryBg(category)}`}
              >
                {project.categories?.join(' / ') ?? 'Misc.'}
              </span>
              <h2 className="mt-3 text-2xl font-semibold">{project.title}</h2>
              {project.thumbnailText && (
                <div className="mt-2 text-sm text-white/80">
                  <PortableText value={project.thumbnailText} />
                </div>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
