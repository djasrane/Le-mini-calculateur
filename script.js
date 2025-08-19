document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page
        calculateProfitMargin();
    });
});

function calculateProfitMargin() {
    const cost = parseFloat(document.getElementById('cost').value);
    const price = parseFloat(document.getElementById('price').value);
    const resultDiv = document.getElementById('result');

    // Validation
    if (isNaN(cost) || isNaN(price)) {
        resultDiv.innerHTML = 'Veuillez entrer des nombres valides !';
        return;
    }
    if (cost <= 0) {
        resultDiv.innerHTML = 'Le coût doit être supérieur à 0 !';
        return;
    }

    // Calcul de la marge
    const profitMargin = ((price - cost) / cost) * 100;
    const roundedMargin = profitMargin.toFixed(2);

    // Affichage dynamique avec couleur
    if (profitMargin > 0) {
        resultDiv.innerHTML = `Marge bénéficiaire : <span class="profit">${roundedMargin}%</span> (Profit)`;
    } else if (profitMargin === 0) {
        resultDiv.innerHTML = `Marge bénéficiaire : <span class="neutral">${roundedMargin}%</span> (Équilibre)`;
    } else {
        resultDiv.innerHTML = `Marge bénéficiaire : <span class="loss">${roundedMargin}%</span> (Perte)`;
    }
}
