export const ageCalculator = (userData, dateTest) => {
  let now = new Date()
  if (dateTest) {
    now = dateTest
  }

  const dateNow = Number(now.getDate())
  const monthNow = Number(now.getMonth() + 1)
  const yearNow = Number(now.getFullYear())
  const daysMonth = new Date(yearNow, monthNow + 1, 0).getDate()

  const dateArrays = [yearNow, monthNow, dateNow]

  let gapDate = dateArrays[2] - userData[2]
  let gapMonth = dateArrays[1] - userData[1]
  let gapYear = dateArrays[0] - userData[0]

  if (gapMonth < 0) {
    gapYear = gapYear - 1
    gapMonth = gapMonth + 12
  }

  if (gapDate <= 0) {
    gapMonth = gapMonth - 1
    gapDate = daysMonth + gapDate
  }

  const gapDateArray = [gapYear, gapMonth, gapDate]

  return gapDateArray
}