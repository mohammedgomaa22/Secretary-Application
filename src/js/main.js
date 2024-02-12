
console.log("test");

// ********** Scroll Sections **********
const scrollSections = () => {
    // Start Variables
    // variables To Scroll To Top
    let sectionSt = document.querySelector("#stats"),
        textNum = document.querySelectorAll("#stats .num"),
        started = false;
    // End Variables
        // ------------------
    // Start Coding
    function startCount(ele) {
        let num = ele.dataset.number;
        let count = setInterval(() => {
            ele.textContent++;
            if (ele.textContent == num) {
                clearInterval(count);
            }
        }, 1800 / num);
    };
    // End Coding
        // ------------------
    // Start All Scrolling
    window.onscroll = () => {
        // Scroll To Stats
        if (window.scrollY >= sectionSt.offsetTop - 300) {
            if (!started) {
                textNum.forEach((text) => startCount(text));
            }
            started = true;
        };
    };
    // End All Scrolling
};
scrollSections();
