# Calculateur de Marge Bénéficiaire Agricole

## Description
Outil web permettant aux agriculteurs de calculer automatiquement leur marge bénéficiaire à partir des coûts de production et du prix de vente.

## Fonctionnalités
- Calcul instantané de la marge
- Validation des entrées
- resutat en pourcentage

## Technologies
- HTML5,JavaScript
- Git & GitHub
- Éditeur: VS Code

## Réponses pédagogiques

#### Ont utiliser une fonction pour le calcul 

parce qu'une fonction pour que le calcul soit réutilisable et bien organisé.

Par exemple :

Si on a une fonction calculateProfitMargin(cost, price), on peut l’utiliser plusieurs fois dans le projet sans réécrire la formule.

Si on change la formule du calcul, on n’a qu’à modifier la fonction une seule fois, et toutes les utilisations seront mises à jour automatiquement.
Exemple concret :

calculateProfitMargin(1000, 1500); => Marge : 50% (Profit)

calculateProfitMargin(1000, 1000); => Marge : 0% (Équilibre)

calculateProfitMargin(1500, 1000); => Marge : -33.33% (Perte)

La fonction garde le code propre, clair et facile à comprendre, même si le projet devient plus grand.

#### 2.Les conditions pour afficher le message selon la marge 

Si la marge est positive => afficher : “Profit” 

Si la marge est égale à zéro => afficher : “Équilibre”

Si la marge est négative => afficher : “Perte”

Ces conditions permettent à l’utilisateur de savoir rapidement si son activité rapporte, est équilibrée ou perd de l’argent.

## Les captures d'ecrant et leurs parties du codes

###  première marge profit

Formulaire initial vide avant toute saisie, montrant le début du projet avec le html.

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mini-Calculateur de Marge Agricole</title>
</head>
<body>
  <div class="calculator">
    <h1>Calculateur de Marge Bénéficiaire</h1>
    <p>Entrez vos coûts et prix de vente pour calculer votre marge.</p>

    <form id="calculator-form">
      <label for="cost">Coût de production (FCFA) :</label>
      <input type="number" id="cost" placeholder="Ex: 1000" required>

      <label for="price">Prix de vente (FCFA) :</label>
      <input type="number" id="price" placeholder="Ex: 1500" required>

      <button type="submit">Calculer</button>
    </form>

    <div id="result"></div>
  </div>

</body>
</html>

### image du capture

<img width="1837" height="934" alt="Capture d’écran du 2025-08-19 09-08-17" src="https://github.com/user-attachments/assets/4bb29d02-f005-4885-950d-250a8fededfa" />

### Deuxième partie du marge
Formulaire prêt à recevoir les valeurs avec le JavaScript actif pour le calcul.

function calculateProfitMargin(cost, price) {
    if (isNaN(cost) || isNaN(price)) return 'Veuillez entrer des nombres valides !';
    if (cost <= 0) return 'Le coût doit être supérieur à 0 !';

    const profitMargin = ((price - cost) / cost) * 100;
    const roundedMargin = profitMargin.toFixed(2);

    if (profitMargin > 0) return `Marge bénéficiaire : ${roundedMargin}% (Profit)`;
    if (profitMargin === 0) return `Marge bénéficiaire : ${roundedMargin}% (Équilibre)`;
    return `Marge bénéficiaire : ${roundedMargin}% (Perte)`;
}

### deuxiemme captures codes fonction: 

<img width="1837" height="934" alt="Capture d’écran du 2025-08-19 09-30-16" src="https://github.com/user-attachments/assets/7619209c-966d-453d-baa3-61d22d6d321b" />

### Troisieme partie 

Résultat final du calcul de la marge bénéficiaire avec affichage dynamique selon le profit, l’équilibre ou la perte

### image du capture

<img width="1837" height="934" alt="Capture d’écran du 2025-08-19 09-36-24" src="https://github.com/user-attachments/assets/b422dbaf-3f75-4b90-8761-df73e5bff97b" />

