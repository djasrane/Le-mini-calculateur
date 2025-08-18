# Calculateur de Marge Bénéficiaire Agricole

## Description
Outil web permettant aux agriculteurs de calculer automatiquement leur marge bénéficiaire à partir des coûts de production et du prix de vente.

## Fonctionnalités
- Calcul instantané de la marge
- Affichage coloré (vert/rouge) selon le résultat
- Validation des entrées
- Interface mobile-friendly

## Technologies
- **Frontend** : HTML5, CSS3, JavaScript
- **Versioning** : Git & GitHub
- **Éditeur** : VS Code

## Réponses pédagogiques

### 1. Pourquoi une fonction dédiée ?
javascript
// Fonction isolée pour :
function calculateMargin(cost, price) {
    return ((price - cost) / cost * 100).toFixed(2);
}
