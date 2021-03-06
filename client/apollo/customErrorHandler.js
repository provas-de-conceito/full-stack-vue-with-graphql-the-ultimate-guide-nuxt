export default (err, { error }) => {
  if (process.env.NODE_ENV === 'development') console.error(err)
  error({ statusCode: 304, message: 'Server error!' })
}
