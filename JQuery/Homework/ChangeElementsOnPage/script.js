function changeParagraph() {
    $('p').css('background-color', 'green').text('Это параграф')
}

function changeSpan() {
    $('span').css('color', 'red').text('Это спан!')
}

function changeLi() {
    $('li').css('color', 'green').text('Это элемент списка')
}

function changePageElements() {
    changeParagraph()
    changeSpan()
    changeLi()
}