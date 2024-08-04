import data from '../data/data.json'

export const DataForChart = (value) => {
    const dataValue = data.map(row => row[value])
    return dataValue
}
