const fetchData = async (fullURL: string) => {
    const rawData = await fetch(fullURL)
    const data = await rawData.text()
    const returnData = JSON.parse(data.substr(47).slice(0, -2)).table
}
export default fetchData
