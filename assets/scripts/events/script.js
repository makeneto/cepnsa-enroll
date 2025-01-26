// Date
function date() {
    const now = moment()
    const yearFooter = document.querySelector('.currentYear')

    yearFooter.textContent = now.year()
}

date()