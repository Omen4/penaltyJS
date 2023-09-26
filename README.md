TP 02
=====
Penalty Shoot Out
====================
World Cup
=========

Fonction Pure + Totale - Curryfication - Composition
----------------------------------------------------

Consignes
---------

Réalisez un programme permettant de simuler le déroulé d'une séance de tirs au but.

Une séance de tirs au but se déroule à la fin d'un match de football en cas de score de parité
après les prolongations.

Dans une séance de tirs au but, chaque équipe effectue un tir, l'une après l'autre. Si le tir au
but est marqué, le score de l'équipe augmente d'une unité.

L'équipe qui a le score le plus élevé après 5 tirs a gagné.

Si au cours de la séance des 5 tirs au but, une équipe dispose d'un avantage qui ne pourra
pas être rattrapé par l'équipe adverse, la séance se termine immédiatement et la victoire lui
est accordée.

En cas d'égalité après les 5 tirs au but, la séance se poursuit. Si l'une des 2 équipes prend
l'avantage après chacune ait tiré, la victoire lui est accordée.

Simulez le résultat de chaque tir (penalty marqué / penalty manqué).

Conservez un historique du déroulé, permettant de retracer l'évolution du score.

Faites en sorte que la méthode retournant le résultat de chaque tir soit pure.

Employez les patterns de Programmation Fonctionnelle suivants :

● Fonction Pure + Fonction Totale : fonction ne produisant aucun effet de bord et
retournant toujours une valeur,

● Prédicat : fonction retournant une valeur booléenne,

● Curryfication : les fonctions ne doivent recevoir qu'un seul paramètre d'entrée,

● Composition : créez une une fonction de tri générique acceptant un prédicat en
paramètre afin de personnaliser le critère de tri.

Vérifiez le fonctionnement de votre code en programmant les tests unitaires utiles.