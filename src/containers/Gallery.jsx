import React, { useEffect, useState } from 'react'
import { client } from '../utils/sanityIO'
import GalleryItem from '../components/GalleryItem'
import HiddenProjectNotification from '../components/HiddenProjectNotification/HiddenProjectNotification'

export default function Gallery(props) {
  const [projects, setProjects] = useState([])
  const [allProjectsView, setAllProjectsView] = useState(false)

  const loadData = ({ allProjects }) => {
    const query = allProjects
      ? '*[_type == "project"]{ "categories": categories[]->title, _id, slug, mainImage, title, thumbnailText, body}'
      : '*[_type == "project" && protected == false]{ "categories": categories[]->title, _id, slug, mainImage, title, thumbnailText, body}'
    const params = {}

    client.fetch(query, params).then((results) => {
      setProjects(results)
    })
  }

  useEffect(() => {
    loadData({ allProjects: allProjectsView })
  }, [allProjectsView])

  const handleItemClick = (slug) => {
    props.handleGalleryItemSelect(slug)
  }

  const handlePasswordInput = (pw) => {
    const PW = 'dubplate'

    if (pw === PW) {
      console.log('passwords matched')
      setAllProjectsView(true)
    } else {
      console.log('nomatch')
    }
  }

  const galleryItemList = projects.map((el) => {
    return (
      <GalleryItem key={el._id} data={el} handleItemClick={handleItemClick} />
    )
  })

  return (
    <div className="gallery-container">
      <HiddenProjectNotification handlePasswordInput={handlePasswordInput} />
      {galleryItemList}
    </div>
  )
}

//_id, slug, mainImage, title, thumbnailText, body
