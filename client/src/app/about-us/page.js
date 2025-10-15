import React from 'react'
import AboutBanner from './AboutBanner'
import TheJourney from './TheJourney'
import Experience from './Experience'
import MissionValues from './MissionValues'
import GalleryMedia from './GalleryMedia'

export default function page() {
  return (
    <div>
        <AboutBanner/>
        <TheJourney/>
        <Experience/>
        <MissionValues/>
        <GalleryMedia/>
    </div>
  )
}
