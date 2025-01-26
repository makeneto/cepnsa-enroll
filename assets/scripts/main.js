'use strict'

// Number counting animation
function numbersCount() {
    const courses = document.getElementById('courses-num')
    const tutors = document.getElementById('expert-tutors')
    const hourTeaching = document.getElementById('hour-teaching')
    const students = document.getElementById('active-students')
    const bookstore = document.getElementById('bookstore')
    const studentsCongrated = document.getElementById('students-congrated')

    courses.textContent = '0'
    tutors.textContent = '0'
    hourTeaching.textContent = '0'
    students.textContent = '0'
    bookstore.textContent = '0'
    studentsCongrated.textContent = '0'

    const updateCounter = () => {
        const target1 = +tutors.getAttribute('data-target')
        const a = +tutors.textContent
        const increment1 = target1 / 1000

        const target2 = +hourTeaching.getAttribute('data-target')
        const b = +hourTeaching.textContent
        const increment2 = target2 / 1000

        const target3 = +courses.getAttribute('data-target')
        const c = +courses.textContent
        const increment3 = target3 / 1000

        const target4 = +students.getAttribute('data-target')
        const d = +students.textContent
        const increment4 = target4 / 1000 

        const target5 = +bookstore.getAttribute('data-target')
        const e = +bookstore.textContent
        const increment5 = target5 / 1000 

        const target6 = +studentsCongrated.getAttribute('data-target')
        const f = +studentsCongrated.textContent
        const increment6 = target6 / 1000 
        
        if (a < target1 && b < target2 && c < target3 && d < target4 && e < target5 && f < target6) {
            tutors.textContent = `${Math.ceil(a + increment1)}`
            hourTeaching.textContent = `${Math.ceil(b + increment2)}`
            courses.textContent = `${Math.ceil(c + increment3)}`
            students.textContent = `${Math.ceil(d + increment4)}`
            bookstore.textContent = `${Math.ceil(e + increment5)}`
            studentsCongrated.textContent = `${Math.ceil(f + increment6)}`
            setTimeout(updateCounter, 150)
        }
        else {
            tutors.textContent = target1
            hourTeaching.textContent = target2
            courses.textContent = target3
            students.textContent = target4
            bookstore.textContent = target5
            studentsCongrated.textContent = target6
        }
    }
    return updateCounter()
}

// Animation during scroll
document.addEventListener('scroll', () => {
    let text1 = document.getElementById('description1')
    let image1 = document.getElementById('image1')
    let darkBg1 = document.getElementById('dark1')

    let text2 = document.getElementById('description2')
    let image2 = document.getElementById('image2')
    let darkBg2 = document.getElementById('dark2')

    let scrollTop = document.querySelector('.scroll-top')

    let scrollPosition = window.scrollY
    let triggerPoint1 = 180
    let triggerPoint2 = 3839
    let triggerPoint3 = 6800

    // Numbers Advants Count
    if (scrollPosition > triggerPoint1 && scrollPosition < 190) {
        return numbersCount()
    }

    // Scroll-top Button
    if (scrollPosition > 1100) {
        scrollTop.style.display = 'flex'
    }
    else {
        scrollTop.style.display = 'none'
    }

    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    // Testemunhal 1
    if (scrollPosition > triggerPoint2 && scrollPosition < triggerPoint3) {
        text1.classList.add('show')
        image1.classList.add('blur')
        // darkBg1.classList.add('overlay')
    }
    else {
        text1.classList.remove('show')
        image1.classList.remove('blur')
        darkBg1.classList.remove('overlay')
    }

    // Testemunhal 2
    if (scrollPosition > triggerPoint3) {
        text2.classList.add('show')
        image2.classList.add('blur')
        darkBg2.classList.add('overlay')
    }
    else {
        text2.classList.remove('show')
        image2.classList.remove('blur')
        darkBg2.classList.remove('overlay')
    }
})

// Get dates with Moment.JS 
function getDate() {
    const now = moment()
    const footerYear = document.querySelector('.currentYear')
    footerYear.textContent = now.year()
}

getDate()