export async function sanityAPI(docType: string) {
  // We'll always need the project ID. This will be running on Deno in
  // production, so we need a different method to grab env vars there.

  // Not running Deno locally, and things are working. Waiting on installing as
  // dependency! Turning off TS just for this line (is working but look here if
  // things break!)

  // @ts-ignore
  const id = import.meta.env.SANITY_PROJECT_ID ?? Deno?.env?.get('SANITY_PROJECT_ID')
  const url = generateSanityQueryURL(id, 'production', docType)

  return await fetch(url)
    .then(async (res) => await res.json())
    .catch((e) => console.error(e))
}

export function generateSanityQueryURL(
  projectId: string,
  dataset: string,
  docType: string
) {
  const query = encodeURIComponent(`*[_type == "${docType}"]`)
  const version = 'v2021-10-21'

  return `https://${projectId}.api.sanity.io/${version}/data/query/${dataset}?query=${query}`
}
