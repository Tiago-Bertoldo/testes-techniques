let pegandoBody = document.querySelector('.pointer')
let effacerBtn = document.querySelector('.btn-effacer')
let restaurer = document.querySelector('.btn-restaurer')
let positionValueDom = [];
let positionEffacer = [];

const handleGetPositionPage = (e) => {
    let axeX = e.clientX
    let axeY = e.clientY
    return handleFixPointer(axeX, axeY)
}

const handleFixPointer = (axeX, axeY) => {
    const newObjet = {
        axeX: axeX - 12,
        axeY: axeY - 10
    }
    positionValueDom.push(newObjet)
    return handleAffichePointer()
}

const handleAffichePointer = () => {
    let createTT = document.createElement('div')
    createTT.setAttribute('class', 'pinter-add')
    positionValueDom.map(element => {
        createTT.style.left = `${element.axeX}.px`
        createTT.style.top = `${element.axeY}.px`
        createTT.style.borderRadius = '50%'
        pegandoBody.appendChild(createTT)
    })
}


const handleEffacer = () => {
    if (positionValueDom.length <= 0) { return }
    let getUnshift = positionValueDom.pop()
    positionEffacer.push(getUnshift)
    pegandoBody.removeChild(pegandoBody.lastChild)
}

const handleRestare = () => {
    if (positionEffacer.length <= 0) { return }
    let getRestaure = positionEffacer.pop()
    positionValueDom.push(getRestaure)
    handleAffichePointer()
}

effacerBtn.addEventListener('click', e => handleEffacer())
restaurer.addEventListener('click', e => handleRestare())
pegandoBody.addEventListener('click', e => handleGetPositionPage(e))