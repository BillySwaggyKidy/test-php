# Test web Majordhom

## Pré-requis

git, docker, et un IDE

## Démarrer

Cloner le repo github
> git clone https://github.com/Majordhom/test-php.git

Lancer la stack LAMP
> docker compose up -d

Apache est ouvert sur le port :80 (http://localhost:80).\
Phpmyadmin est ouvert sur le port :8080 (http://localhost:8080)\
Mysql est ouvert sur :3306\
\
Utilisateur et mdp mysql: `root` et `verysecurepassword`

## Exercice

*Pas de limite de temps, vous pourrez terminer l'exercice chez vous si cela vous semble pertinent.*

![alt text](./maquette.png)

Vous devez intégrer cette maquette au site web de l'agence, enregistrez les données du formulaire dans la base de
données.
Nous voulons voir votre façon d'intégrer une maquette de manière *responsive*, comment vous organisez votre code (split des fichiers, commentaires, balises html, écriture des fonctions ...), et
comment vous
gérez la sécurité de celui-ci.

Le but n'est pas forcement de terminer la maquette et de tout intégrer, mais de montrer ce que vous savez faire:
connaissance d'un framework
(SASS, React, Angular, Typescript, Laravel, Symfony ...) ou autres outils (Google ReCaptcha), design pattern, etc.

Ne vous inquiètez ne vous jugerons pas uniquement sur ce test, vous pourrez aussi nous faire parvenir par exemple le
code source de vos projets d'études ou projets perso.

Bonne chance !

--------------------------------------------------------------------------------------------------------------------------------------------------------------------


C'est une maquette d'un page de contact d'une agence immobilière développpé avec le framework Next.js.

# Rendu

En premier, installer les paquets npm nécessaires du projet:

```
npm install
```

Ensuite lancer le docker-compose.yml (pensez à avoir démarrer docker avant):

```
docker compose up -d
```

## Les environnements

Il faut savoir que le projet possède deux environnements, un pour le développement et un pour le déploiement en production.

### Mode développement:

Pour lancer l'application next.js en mode développement, exécuter:

```
npm run dev
```

Les liens sont les suivants:
- http://localhost:3000 est le lien url pour accèder à l'application web dans le navigateur
- http://localhost:8080 est le lien url pour accèder au portail phpmyadmin (host: root, password: verysecurepassword) et le nom de la base de donnée est: maquette_db_dev

### Mode production:

Pour lancer l'application next.js en mode production, exécuter:

```
npm run build
```
```
npm run start
```

Les liens sont les suivants:
- http://localhost:3000 est le lien url pour accèder à l'application web dans le navigateur
- http://localhost:8081 est le lien url pour accèder au portail phpmyadmin (host: root, password: verysecurepassword) et le nom de la base de donnée est: maquette_db_prod





