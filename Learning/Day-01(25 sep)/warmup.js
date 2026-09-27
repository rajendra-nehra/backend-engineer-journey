async function fetchData() {
    console.time("sequencial");
    const data1 = await fetch("https://example.com");
    const data2 = await fetch("https://example.com")
    console.timeEnd("sequencial");
    // console.log(data1)
}
fetchData();

async function fetchDataAll() {
    console.time("parallel")
    const data1 = fetch("https://example.com")
    const data2 = fetch("https://example.com")
    
    const data = await Promise.all([data1, data2])
    console.timeEnd("parallel")

}
fetchDataAll()