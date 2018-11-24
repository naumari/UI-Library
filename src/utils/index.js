export const getFileName = url => {
  const start = url.indexOf('/')
  const end = url.lastIndexOf('/')
  const name = url.substring(start + 1, end)

  return name
}