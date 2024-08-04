
export const ColorsForChart = (mainColor, highlightColor) => {
    let colorsArr = new Array(7);
    colorsArr = [...Array(7)].map(() => mainColor);
    const d = new Date()
    const currentDay = d.getDay()
    return colorsArr.with(currentDay - 1, highlightColor)
}
