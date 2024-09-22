import imageUrlBuilder from "@sanity/image-url"
import type { SanityImage } from "../types"

export async function sanityAPI(docType: string) {
  const id = import.meta.env.SANITY_PROJECT_ID ?? ""
  const url = generateSanityQueryURL(id, "production", docType)

  return await fetch(url)
    .then(async (res) => await res.json())
    .catch((e) => console.error(e))
}

export function generateSanityQueryURL(
  projectId: string,
  dataset: string,
  docType: string,
) {
  const query = encodeURIComponent(`*[_type == "${docType}"]`)
  const version = "v2021-10-21"

  return `https://${projectId}.api.sanity.io/${version}/data/query/${dataset}?query=${query}`
}

export function sanityImageUrl(image: SanityImage) {
  const id = import.meta.env.SANITY_PROJECT_ID ?? ""
  const dataset = "production"
  const builder = imageUrlBuilder({ dataset: dataset, projectId: id })
  return builder.image(image)
}
