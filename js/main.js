async function fetchData() {
    const res = await fetch ("https://api.sledilnik.org/api/summary");
    const record = await res.json();
    console.log(record);

    let year = record.vaccinationSummary.year;
    let month = record.vaccinationSummary.month;
    let day = record.vaccinationSummary.day;

    document.getElementById('date').innerHTML = day + '/' + month + '/' + year;
    document.getElementById('tests-hag').innerHTML = record.testsTodayHAT.value;
    document.getElementById('tests-pcr').innerHTML = record.testsToday.value;
    document.getElementById('active-cases').innerHTML = record.casesActive.subValues.in;
    document.getElementById('total-deaths').innerHTML = record.deceasedToDate.value;
    document.getElementById('hospitalised').innerHTML = record.hospitalizedCurrent.value;
    document.getElementById('in-icu').innerHTML = record.icuCurrent.value;
}
fetchData();
