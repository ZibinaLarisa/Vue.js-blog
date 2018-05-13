export const transformDate = (date) =>
  new Date(date)
    .toString()
    .split(' ')
    .slice(0, 4)
    .join(' ')
    .replace(/( \d+)$/, ',$1')

export const transformEmail = (mail) => {
  return mail.split('@').splice(0, 1).join('') + '@'
}

export const truncate = (value) => {
  if (!value) return ''
  value = value.toString()
  return value.split(' ').splice(0, 30).join(' ') + ' ...'
}
