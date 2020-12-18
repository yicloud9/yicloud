;(function run(global) {
    const bgNode = document.getElementById('bg')
    const timerNode = document.getElementById('timer')

    const nextBtn = document.querySelector('.nav .next')
    const prevBtn = document.querySelector('.nav .prev')

    let storyIndex = 0
    const timeList = [
        { year: 2020, month: 10, day: 4, id: 1},
        { year: 2020, month: 10, day: 6, id: 2},
    ]
    let oldTime = null

    initTapLove()
    const {next, prev } = initSlider()
    toggleBg(storyIndex)
    setTimer(storyIndex)
    typed(storyIndex)

    nextBtn.onclick = function() {
        // next()
        storyIndex++
        typed(storyIndex)
        return
        if(storyIndex >= timeList.length) {
            destroyedSlider(()=> {
                const slider = document.querySelector('.slider-wrap')
                document.getElementById('app').removeChild(slider)
                toggleBg()
            })
        } else {
            toggleBg(storyIndex)
            setTimer(storyIndex)
            typed(storyIndex)
        }
    }
    prevBtn.onclick = function () {
        prev()
        storyIndex++
        if(index >= 0) {
            toggleBg(storyIndex)
            setTimer(storyIndex)
            typed(storyIndex)
        }
    }

    function toggleBg(id) {
        if(id === undefined) {
            bgNode.style.backgroundImage = ''    
        } else {
            bgNode.style.backgroundImage = 'url(./img/bg' + (id+1) + '.jpeg)'
        }
    }
    function setTimer(index) {
        const nowTime = timeList[index]
        if(!oldTime) {
            oldTime = timeList[index]
        }
        if(oldTime.id === nowTime.id) {
            update(oldTime)
            return
        }
        anime({
            targets: oldTime,
            ...nowTime,
            round: 1,
            easing: 'linear',
            update: function () {
                update(oldTime)
            }
        })
        function update(newTime) {
            timerNode.querySelector('.year').innerHTML = newTime.year
            timerNode.querySelector('.month').innerHTML = newTime.month
            timerNode.querySelector('.day').innerHTML = newTime.day
        }
    }

})(window)

function initTapLove() {
    $('body').on('click', function (e) {
        const love = document.createElement('div')
        love.className = 'love'
        love.style.animation = 'heart-burst steps(28) 0.8s both'
        const halfWidth = 50
        love.style.left = e.pageX - halfWidth + 'px'
        love.style.top = e.pageY - halfWidth + 'px'
        love.addEventListener(
            'animationend',
            function () {
                document.body.removeChild(love)
            },
            false
        )
        $('body').append(love)
    })
}
function initSlider() {
    const slider = document.querySelector('.slider')
    
    const items = slider.querySelectorAll('.slider .item')

    let current = 0

    items.forEach((item) => {
        const textWrapper = item.querySelector('.wrap')
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        )
    })

    function anim(current, next, callback) {
        const currentImgs = current.querySelectorAll('.img')
        const currentText = current.querySelectorAll('.content .letter')
        const nextImgs = next.querySelectorAll('.img')
        const nextText = next.querySelectorAll('.content .letter')

        const duration = 400
        const offset = '-=' + 300
        const imgOffset = duration * 0.8

        const tl = anime.timeline({
            easing: 'easeInOutQuint',
            duration: duration,
            complete: callback,
        })

        // Add children
        tl.add({
            targets: currentText,
            translateY: [0, '-.75em'],
            /* clipPath: [
                'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
            ], */
            opacity: [1, 0],
            easing: 'easeInQuint',
            duration: 600,
            delay: (el, i) => 10 * (i + 1),
        }).add(
                {
                    targets: currentImgs[0],
                    translateY: -600,
                    rotate: [0, '-15deg'],
                    opacity: [1, 0],
                    easing: 'easeInCubic',
                },
                offset
            )
            .add(
                {
                    targets: currentImgs[1],
                    translateY: -600,
                    rotate: [0, '15deg'],
                    opacity: [1, 0],
                    easing: 'easeInCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: currentImgs[2],
                    translateY: -600,
                    rotate: [0, '-15deg'],
                    opacity: [1, 0],
                    easing: 'easeInCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: currentImgs[3],
                    translateY: -600,
                    rotate: [0, '15deg'],
                    opacity: [1, 0],
                    easing: 'easeInCubic',
                },
                '-=' + imgOffset
            )
            .add({
                targets: current,
                opacity: 0,
                duration: 10,
                easing: 'easeInCubic',
            })
            .add(
                {
                    targets: next,
                    opacity: 1,
                    duration: 10,
                },
                offset
            )
            .add(
                {
                    targets: nextImgs[0],
                    translateY: [600, 0],
                    rotate: ['15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                offset
            )
            .add(
                {
                    targets: nextImgs[1],
                    translateY: [600, 0],
                    rotate: ['-15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: nextImgs[2],
                    translateY: [600, 0],
                    rotate: ['15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: nextImgs[3],
                    translateY: [600, 0],
                    rotate: ['-15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: nextText,
                    translateY: ['.75em', 0],
                    /* clipPath: [
                        'polygon(0 0, 100% 0, 100% 0, 0 0)',
                        'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    ], */
                    opacity: [0, 1],
                    easing: 'easeOutQuint',
                    duration: 600,
                    delay: (el, i) => 10 * (i + 1),
                },
                offset
            )
    }

    let isPlaying = false

    function updateSlider(newIndex) {
        const currentItem = items[current]
        const newItem = items[newIndex]

        function callback() {
            currentItem.classList.remove('is-active')
            newItem.classList.add('is-active')
            current = newIndex
            isPlaying = false
        }

        anim(currentItem, newItem, callback)
    }

    function next() {
        if (isPlaying) return
        isPlaying = true
        const newIndex = current === items.length - 1 ? 0 : current + 1
        updateSlider(newIndex)
    }

    function prev() {
        if (isPlaying) return
        isPlaying = true
        const newIndex = current === 0 ? items.length - 1 : current - 1
        updateSlider(newIndex)
    }
    
    return {
        next,
        prev
    }
}

function typed(index) {
    var options = [
        {strings: ['<i>First</i> sentence.'], typeSpeed: 40},
        {strings: [' second sentence.'], typeSpeed: 100},
    ]
      
    new Typed('#typed', options[index]);
}

function destroyedSlider(cb) {
    anime({
        targets: '.slider-wrap',
        scale: 1.2,
        opacity: 0,

        easing: 'easeInOutQuad',
        complete: ()=> {
            cb()
        }
    })
}
