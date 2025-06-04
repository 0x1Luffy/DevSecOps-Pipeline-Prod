import MetaTags from "./meta-tags"
import Favicons from "./favicons"
import StructuredData from "./structured-data"

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
}

export default function SEO({ title, description, canonical, ogImage, ogType }: SEOProps) {
  return (
    <>
      <MetaTags title={title} description={description} canonical={canonical} ogImage={ogImage} ogType={ogType} />
      <Favicons />
      <StructuredData />
    </>
  )
}
