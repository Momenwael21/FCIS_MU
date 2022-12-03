// for arrow down btn
const iconsDown = document.querySelectorAll('.down')
const dts = document.querySelectorAll('dt')
const iconsUp = document.querySelectorAll('.up')
iconsDown[0].addEventListener('click', () => {
    arrow(0)
})
iconsDown[1].addEventListener('click', () => {
    arrow(1)
})


function arrow(indexIcon) {
    iconsUp[indexIcon].style.display = 'grid'
    iconsUp[indexIcon].addEventListener('click', () => {
        iconsUp[indexIcon].style.display = 'none'
        iconsDown[indexIcon].style.display = 'grid'

        if (indexIcon === 0) [i, z] = [0, 3]
        else [i, z] = [3, 6]
        for (; i < z; i++) {
            dts[i].style.display = 'none'
        }
    })
    iconsDown[indexIcon].style.display = 'none'
    if (indexIcon === 0) [i, z] = [0, 3]
    else [i, z] = [3, 6]
    for (; i < z; i++) {
        dts[i].style.display = 'grid'
    }
}