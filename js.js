gsap.config({ trialWarn: false });
let select = s => document.querySelector(s),
    toArray = s => gsap.utils.toArray(s),
    mainSVG = select('#mainSVG'),
    allEll = toArray('.ell'),
    colorArr = ['#359EEE', '#FFC43D', '#EF476F', '#03CEA4']

let colorInterp = gsap.utils.interpolate(colorArr);

gsap.set(mainSVG, {
    visibility: 'visible'
})

function animate(el, count) {
    let tl = gsap.timeline({
        defaults: {
            ease: 'sine.inOut'
        },
        repeat: -1
    });
    gsap.set(el, {
        opacity: 1 - count / (allEll.length),
        stroke: colorInterp(count / (allEll.length))
    })

    tl.to(el, {
        attr: {
            ry: `-=${count * 2.3}`,
            rx: `+=${count * 1.4}`
        },
        ease: 'sine.in'
    })
        .to(el, {
            attr: {
                ry: `+=${count * 2.3}`,
                rx: `-=${count * 1.4}`
            },
            ease: 'sine'
        })
        .to(el, {
            duration: 1,
            rotation: -180,
            transformOrigin: '50% 50%'
        }, 0).timeScale(0.5)
}
allEll.forEach((c, i) => {
    gsap.delayedCall(i / (allEll.length - 1), animate, [c, i + 1])
})
gsap.to('#aiGrad', {
    duration: 4,
    delay: 0.75,
    attr: {
        x1: '-=300',
        x2: '-=300'
    },
    scale: 1.2,
    transformOrigin: '50% 50%',
    repeat: -1,
    ease: 'none'
})
gsap.to('#ai', {
    duration: 1,
    scale: 1.1,
    transformOrigin: '50% 50%',
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
})




function Dong_ho() {
    let gio = document.getElementById("gio");
    let phut = document.getElementById("phut");
    let giay = document.getElementById("giay");
    let period = document.getElementById("am");
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    if (hour >= 12) {
        period = "PM"
    } else {
        period = "AM"
    }
    if (hour == 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour -= 12;
        }
    }
    gio.innerHTML = hour;
    phut.innerHTML = minute;
    giay.innerHTML = second;
    am.innerHTML = period;
}
let Dem_gio = setInterval(Dong_ho, 1000);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("mybtn").style.display = "block";
    } else {
        document.getElementById("mybtn").style.display = "none";
    }
}

// Khi người dùng click vào button thì cuộn lên đầu tài liệu
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// $ chỉ là một phím tắt của jQuery


// 
function clickbtn() {
    alert("No action");
}