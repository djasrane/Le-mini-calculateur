document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', calculateProfitMargin);
});

function calculateProfitMargin() {
    // Récupération des valeurs
    const costInput = document.getElementById('cost');
    const priceInput = document.getElementById('price');
    const resultDiv = document.getElementById('result');
    
    const cost = parseFloat(costInput.value);
    const price = parseFloat(priceInput.value);

    // Validation des entrées
    if (isNaN(cost) || isNaN(price)) {
        resultDiv.innerHTML = ' Veuillez entrer des nombres valides !';
        return;
    }
    if (cost <= 0) {
        resultDiv.innerHTML = ' Le coût doit être supérieur à 0 !';
        return;
    }

    // Calcul de la marge
    const profitMargin = ((price - cost) / cost) * 100;
    const roundedMargin = profitMargin.toFixed(2);

    // Affichage du résultat avec style approprié
    if (profitMargin > 0) {
        resultDiv.innerHTML = `Marge bénéficiaire : <span class="profit">${roundedMargin}%</span> (Profit)`;
    } else if (profitMargin === 0) {
        resultDiv.innerHTML = `Marge bénéficiaire : <span class="neutral">${roundedMargin}%</span> (Équilibre)`;
    } else {
        resultDiv.innerHTML = `Marge bénéficiaire : <span class="loss">${roundedMargin}%</span> (Perte)`;
    }
}