---
title: Développeur front-end - enet
weight: 2
---

## L'outil à développer

La <a href="https://enet.ada-risques.fr" target="_blank">version actuelle</a> d'<a class="app-name">e-net</a>, application web privative de l'AdA Risques qui permet notamment de gérer les membres et les adhésions, est de conception ancienne (pas du tout MVC) qui ne pourra que difficilement évoluer.

L'objectif est donc de faire table rase et séparer le problème en deux avec une approche <i>JAMstack</i> :

- les données seront consommées dans une API RESTful au format JSON ;
- l'application web (type <i>single-page application</i>) sera modernisée et plus simple d'utilisation.

Le nouvel <a class="app-name">e-net</a> devra globablement conserver les fonctionnalités actuelles :

- gestion de sa fiche membre
- trombinoscope / annuaire des anciens
- gestion des membres, des adhérents et des rôles spécifiques au sein de l'association (bureau, conseil d'administration)
- (à discuter) offres d'emploi et de stages

## L'avancée du projet

Une première maquette, partielle et statique, a été réalisée pour définir et présenter le concept aux membres du bureau.

Elle sert de base à la suite du développement, en complétant les fonctionnalités retenues et développant les composants JavaScript nécessaire à son animation.

## Le profil recherché

Tu parles couramment HTML, CSS et JavaScript, tu utilises Git en équipes et tu as idéalement une expérience avec Bootstrap, SASS et VueJS.