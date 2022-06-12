async function fetchData() {
    const res = await fetch ("https://api.sledilnik.org/api/summary");
    const record = await res.json();
    console.log(record.casesToDateSummary.value);
}

fetchData();