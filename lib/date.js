import { parse, format } from 'date-fns'

export const formatDate = (date) => {
  const convertDate = parse(date, 'dd-MM-yyyy', new Date())
  const formatDate = format(convertDate, 'MMM dd, yyyy')

  return formatDate
}

export const getCurrentYear = () => {
  return new Date().getFullYear()
}
