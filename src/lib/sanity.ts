import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { PortableTextBlock } from '@portabletext/react'

export const client = createClient({
  projectId: '3ptjvz2p',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})

const builder = createImageUrlBuilder(client)
export const urlFor = (source: SanityImage) => builder.image(source)

export type SanityImage = {
  _key?: string
  asset: { _ref: string }
}

export type ProjectSummary = {
  _id: string
  slug: string
  title: string
  year?: string
  categories?: string[]
  mainImage?: SanityImage
  thumbnailText?: PortableTextBlock[]
}

export type Project = ProjectSummary & {
  client?: string
  link?: string
  shownAt?: string[]
  body?: PortableTextBlock[]
  carouselImages?: SanityImage[]
}

// Projects flagged `protected` are hidden from the listing. The dataset is
// publicly readable, so this hides them from casual visitors only.
export const getProjects = () =>
  client.fetch<ProjectSummary[]>(
    `*[_type == "project" && protected != true && slug.current != "oof"] | order(year desc) {
      _id, "slug": slug.current, title, year, mainImage, thumbnailText,
      "categories": categories[]->title
    }`,
  )

export const getProject = (slug: string) =>
  client.fetch<Project | null>(
    `*[_type == "project" && slug.current == $slug][0] {
      _id, "slug": slug.current, title, year, client, link, shownAt, body, carouselImages,
      "categories": categories[]->title
    }`,
    { slug },
  )
