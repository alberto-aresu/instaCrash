const fetchDataFromApi = async () => {
    const response = await fetch("http://www.json-generator.com/api/json/get/cekPGWUzFK?indent=2");
    const data = await response.json();
    return data
}

export default fetchDataFromApi