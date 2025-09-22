import React from 'react'
import CommonHeroBanner from '../../components/CommonHeroBanner/CommonHeroBanner'
import { getLanguageContent } from '../../components/Utils/MultilingialContent'

function About() {
  return (
     <CommonHeroBanner
      backgroundImage="/images/"
      heading={getLanguageContent()?.aboutHeroContent?.heading}
    />
  )
}

export default About