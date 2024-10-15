async function fetchData(num) {
  let headersList = {
    Accept: "*/*",
  };

  let response = await fetch(`https://swapi.dev/api/people/${num}`, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();

  return data;
}

export default fetchData;
