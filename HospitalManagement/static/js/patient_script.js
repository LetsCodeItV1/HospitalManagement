/**
 * Porfolio isotope and filter
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

const containerPatientIn = document.getElementById("container-patient-in");
const containerPatientOut = document.getElementById("container-patient-out");

window.addEventListener('load', () => {
    let patientContainer = select('.patient-container');
    console.info("Window loaded!!");

    if (patientContainer) {
        const patientFilters = document.getElementById("patient-flters")
        const filters = patientFilters.querySelectorAll("li");
        console.info([...filters]);

        [...filters].forEach((li) => {

            li.addEventListener('click', () => {
                filters.forEach((el) => el.classList.remove("filter-active"))
                li.classList.add("filter-active")

                //     display
                const dataFilter = li.getAttribute("data-filter")
                console.info("Data filter is : " + dataFilter);

                if (dataFilter.toString() === ".patient-in") {

                    containerPatientIn.style.display = "block";
                    containerPatientOut.style.display = "none";
                } else {
                    containerPatientIn.style.display = "none";
                    containerPatientOut.style.display = "block";
                }
            })
        });

    }

});

