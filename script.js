const calculatrice = document.querySelector(".Calculatrice");
const boutons = calculatrice.querySelector(".Button");
const affichage = document.querySelector(".Affichage");


boutons.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const bouton = e.target
        const action = bouton.dataset.action

        const boutonContenu = bouton.textContent
        const afficherNumero = affichage.textContent
        const ancienBouton = calculatrice.dataset.previousKeyType

        if (!action) {
            calculatrice.dataset.previousKeyType = '0'
            if (afficherNumero === '0' || ancienBouton === 'operateur') {
                affichage.textContent = boutonContenu
            } else {
                affichage.textContent = afficherNumero + boutonContenu
            }
        } else {
            switch (action) {
                case 'clear':
                    affichage.textContent = '0'
                    break;
                case 'decimale':
                    affichage.textContent = afficherNumero + ','
                    break;
                case 'divise':
                case 'plus':
                case 'soustraire':
                case 'fois':
                    calculatrice.dataset.previousKeyType = 'operateur'
                    calculatrice.dataset.premiereValeur = afficherNumero
                    calculatrice.dataset.operateur = action
                    break;
                case 'egal':
                    const deuxiemeValeur = afficherNumero
                    const premiereValeur = calculatrice.dataset.premiereValeur
                    const operateur = calculatrice.dataset.operateur

                    affichage.textContent = calculate(premiereValeur, operateur, deuxiemeValeur)
                    break;
            }
        }


    }
})

const calculate = (n1, operateur, n2) => {
    let resultat = ''

    switch (operateur){
        case 'divise':
            resultat = parseFloat(n1) / parseFloat(n2)
            break;
        case 'plus':
            resultat = parseFloat(n1) + parseFloat(n2)
            break;
        case 'soustraire':
            resultat = parseFloat(n1) - parseFloat(n2)
            break;
        case 'fois':
            resultat = parseFloat(n1) * parseFloat(n2)
            break;
    }
    return resultat
}