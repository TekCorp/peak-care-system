import React from 'react'
import CommonHeroBanner from '../../components/CommonHeroBanner/CommonHeroBanner'
import { useLanguageContent } from '../../components/Utils/MultilingialContent'

function About() {
  const GetLanguageContent = useLanguageContent()
  return (
     <CommonHeroBanner
      backgroundImage="/images/"
      heading={GetLanguageContent?.home?.aboutHeroContent?.heading}
    />
  )
}

export default About