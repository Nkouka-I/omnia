# Omnia Athletica

Site vitrine d'une entreprise fictive, **Omnia Athletica**, qui propose des patchs connectés (les « Omnis ») et une application mobile (« Omnia App ») pour analyser les mouvements des sportifs et limiter les blessures.

Projet pédagogique réalisé dans le cadre du BUT Informatique à l'IUT de Fontainebleau (UPEC). Les produits, témoignages et formulaires sont fictifs : aucune donnée n'est envoyée ni enregistrée.

**Auteurs :** Ildevert Nkouka (design et intégration web), Amine Abbaz (communication et contenu)

## Pages

| Page | Contenu |
|---|---|
| `index.html` | Accueil : concept, valeurs, témoignages, téléchargement de l'application |
| `produit.html` | Présentation des patchs Omnis, utilisateurs visés, mode d'emploi |
| `partenaires.html` | Carte des partenaires et formulaire de partenariat (partenaire ou magasin) |
| `contact.html` | Formulaire de contact |
| `faq.html` | Questions fréquentes |
| `equipe.html` | Présentation de l'équipe, avec liens vers les CV |
| `charte.html` | Charte graphique : couleurs, typographie, images |
| `legal.html` | Mentions légales |
| `plan.html` | Plan du site |

## Fonctionnalités

- Header et footer communs, chargés dynamiquement dans chaque page (`header.html`, `footer.html`)
- Mise en évidence de la page courante dans le menu
- Menu burger sur mobile, mise en page responsive
- Bouton « retour en haut » qui apparaît au défilement
- Formulaire de partenariat qui change selon le type choisi (partenaire ou magasin)

## Technologies

HTML5, CSS3 et JavaScript, sans framework ni bibliothèque.

## Lancer le site en local

Le header et le footer sont chargés avec `fetch()`, qui ne fonctionne pas en ouvrant directement les fichiers (`file://`). Il faut passer par un petit serveur local :

```bash
cd omnia
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000 dans le navigateur.

L'extension **Live Server** de VS Code fonctionne aussi.

## Organisation

```
omnia/
├── *.html            pages du site (+ header.html et footer.html)
├── css/
│   ├── base.css          styles communs, header, footer
│   ├── main_pages.css    accueil et produit
│   ├── second_pages.css  pages secondaires
│   ├── bot_top.css       bouton retour en haut
│   └── cv_ildevert.css   CV
├── js/main.js        header/footer, menu burger, retour en haut, formulaires
└── assets/
    ├── icones/       logos et icônes
    └── images/       photos et illustrations
```

## Charte graphique

| Rôle | Couleur |
|---|---|
| Primaire / logo | `#A51E19` |
| Accent (survol) | `#8A1915` |
| Fond principal | `#EEE3D3` |
| Badges / thèmes | `#E8D7CE` |

Le détail est sur la page `charte.html`.
