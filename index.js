let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    if (!userInput.value) {
        result.innerHTML = "Please select your birth date.";
        return;
    }

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        if (m3 < 0) {
            m3 = 11;
            y3--;
        }
        // Get number of days in previous month relative to today
        d3 = getDaysInMonth(today.getFullYear(), today.getMonth()) + d2 - d1;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
}

function getDaysInMonth(year, month) {
    // month is 0-indexed: 0 = January
    return new Date(year, month, 0).getDate();
}
