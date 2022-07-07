// fetching and manipulating the general data
async function fetchGenData() {
    const res = await fetch ("https://api.sledilnik.org/api/summary");
    const record = await res.json();

    console.log(record);

    let year = record.vaccinationSummary.year;
    let month = record.vaccinationSummary.month;
    let day = record.vaccinationSummary.day;

    let monthName;
    switch (month) {
        case 1:
            monthName = 'januar'
            break;
        case 2:
            monthName = 'februar'
            break;
        case 3:
            monthName = 'marec'
            break;
        case 4:
            monthName = 'april'
            break;
        case 5:
            monthName = 'maj'
            break;
        case 6:
            monthName = 'junij'
            break;
        case 7:
            monthName = 'julij'
            break;
        case 8:
            monthName = 'avgust'
            break;
        case 9:
            monthName = 'september'
            break;
        case 10:
            monthName = 'oktober'
            break;
        case 11:
            monthName = 'november'
            break;
        case 12:
            monthName = 'december'
            break;
        default:
            dayName = month;
    }

    document.getElementById('date').innerHTML = day + '. ' + monthName + '<br>' + year;
    document.getElementById('tests-hag').innerHTML = record.testsTodayHAT.value;
    document.getElementById('tests-pcr').innerHTML = record.testsToday.value;
    document.getElementById('active-cases').innerHTML = record.casesActive.subValues.in;
    document.getElementById('total-deaths').innerHTML = record.deceasedToDate.value;
    document.getElementById('hospitalised').innerHTML = record.hospitalizedCurrent.value;
    document.getElementById('in-icu').innerHTML = record.icuCurrent.value;
}
fetchGenData();

// fetching and manipulating the vaccination data
async function fetchVaxData() {
    const res = await fetch ("https://api.sledilnik.org/api/vaccinations");
    const record = await res.json();

    let secondToLast = record[record.length - 2];
    console.log(secondToLast);

    document.getElementById('1st-vax-day-administered').innerHTML = '<small>danes</small>' + secondToLast.administered.today;
    document.getElementById('1st-vax-total-administered').innerHTML = '<small>skupno</small>' + secondToLast.administered.toDate.toLocaleString();

    document.getElementById('2nd-vax-day-administered').innerHTML = '<small>danes</small>' + secondToLast.administered2nd.today;
    document.getElementById('2nd-vax-total-administered').innerHTML = '<small>skupno</small>' + secondToLast.administered2nd.toDate.toLocaleString();

    document.getElementById('3rd-vax-day-administered').innerHTML = '<small>danes</small>' + secondToLast.administered3rd.today;
    document.getElementById('3rd-vax-total-administered').innerHTML = '<small>skupno</small>' + secondToLast.administered3rd.toDate.toLocaleString();

    document.getElementById('used-doses-to-date').innerHTML = secondToLast.usedToDate.toLocaleString();
}
fetchVaxData();
