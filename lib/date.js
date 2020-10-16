import { parse, format } from 'date-fns'

export const formatDate = (date, dateFormat = 'MMM dd, yyyy') => {
  const convertDate = parse(date, 'dd-MM-yyyy', new Date())
  const formatDate = format(convertDate, dateFormat)

  return formatDate
}

export const getCurrentYear = () => {
  return new Date().getFullYear()
}
