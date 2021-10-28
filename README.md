### pixel-generator
Une application javascript qui permet de dessiner sous forme de pixel-art
et d'exporter le résultat au format png.  
j'ai utilisé la librairie [html2canvas](https://html2canvas.hertzen.com/) pour pouvoir exporter la grille Html en png
### features:
* [x] choix des couleurs
* [x] export en png
* [ ] dessin en fonction d'une forme (cercle/triangle/rectangle)
* [ ] effacer le dessin
* [x] gestion de la transparence
* [ ] choix de la taille du pinceau
* [x] gomme
* [x] zoom/dézoom avec la molette
* [ ] style
* [ ] zoom centrer sur le pointeur
### Issues
la taille de l'image s'exporte en fonction du zoom  
Le dessin s'efface si l'on change le nombre de pixels
la selection reste active si l'on quitte la grille avec le click gauche pressé
### [Demo](https://adrien35240.github.io/pixel-generator/)
