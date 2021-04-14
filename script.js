const panels = document.querySelectorAll('.panel')

// NOTE - Função que vai colocar o seletor active na div que contem a classe 'panel'
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClassse()
        panel.classList.add('active')
    })
})

// NOTE - Função que vai tirar o seletor active da div que contem a classe 'panel'
function removeActiveClassse() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}