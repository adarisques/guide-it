---
title: Développeur PHP - API
weight: 1
---

## L'outil à développer

La <a href="https://enet.ada-risques.fr" target="_blank">version actuelle</a> d'<a class="app-name">e-net</a>, application web privative de l'AdA Risques qui permet notamment de gérer les membres et les adhésions, est de conception ancienne (pas du tout MVC) qui ne pourra que difficilement évoluer.

L'objectif est donc de faire table rase et séparer le problème en deux avec une approche <i>JAMstack</i> :

- les données seront consommées dans une API RESTful au format JSON ;
- l'application web (type <i>single-page application</i>) sera modernisée et plus simple d'utilisation.

L'API permettra de centraliser les flux de données consommés par les différents outils (site vitrine, <a class="app-name">e-net</a>, HelloAsso...) en exposant le contenu de la base de données tout en assurant l'authentification et la traçabilité des accès, ainsi que la validation des entrées.

Elle permettra aussi d'agir sur les diverses ressources comme les listes de diffusion ou les droits éditoriaux sur le site vitrine.

Étant contraints par l'hébergement (mutualisé chez OVH), l'outil devra s'exécuter en PHP et consommer une base de données MySQL.

La reprise des données de l'actuelle base de données de l'AdA sera également à effectuer.

## L'avancée du projet

L'API et les structures de données souhaitées en base sont partiellement spécifiés (documentation disponible sur demande au chargé de mission « Outils informatiques »), mais le développement n'est pas sérieusement commencé.

La piste actuelle est d'utiliser le <i>micro-framework</i> <a href="https://lumen.laravel.com/" target="_blank">Lumen</a> mais toutes les options sont encore envisageables.

## Le profil recherché

Tu parles PHP LV2 avec des notions de MySQL, et tu utilises Git en équipe.