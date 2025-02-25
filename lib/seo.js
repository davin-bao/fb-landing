export default (options) => {
  const { title, description } = options
  useHead({ title })
  useSeoMeta({ description })
  useSchemaOrg([defineArticle({ title, description })])
}