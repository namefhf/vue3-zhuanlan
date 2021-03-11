export function generateFitUrl(data, width, height, format = ['m_pad']) {
  if (data && data.url) {
    const formatStr = format.reduce((prev, current) => {
      return current + ',' + prev
    }, '')
    data.fitUrl =
      data.url +
      `?x-oss-process=image/resize,${formatStr}h_${height},w_${width}`
  }
}

export function addColumnAvatar(data, width, height) {
  if (data.avatar) {
    generateFitUrl(data.avatar, width, height)
  } else {
    const parseCol = data
    data.avatar = {
      fitUrl: require(parseCol.title
        ? '@/assets/column.jpg'
        : '@/assets/avatar.jpg')
    }
  }
}

export function beforeUploadCheck(file, condition) {
  const { format, size } = condition
  const isValidFormat = format ? format.includes(file.type) : true
  const isValidSize = size ? file.size / 1024 / 1024 < size : true
  let error = null
  if (!isValidFormat) {
    error = 'format'
  }
  if (!isValidSize) {
    error = 'size'
  }
  return {
    passed: isValidFormat && isValidSize,
    error
  }
}

const testData = [
  { _id: '1', name: 'a' },
  { _id: '2', name: 'b' }
]

export const arrToObj = arr => {
  return arr.reduce((prev, current) => {
    if (current._id) {
      prev[current._id] = current
    }
    return prev
  }, {})
}
const result = arrToObj(testData)
console.log(result)
export const objToArr = obj => {
  return Object.keys(obj).map(key => obj[key])
}
const testData2 = {
  1: { _id: '1', name: 'a' },
  2: { _id: '2', name: 'b' }
}

const result2 = objToArr(testData2)
console.log(result2)
