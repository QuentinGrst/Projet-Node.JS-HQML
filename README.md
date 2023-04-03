# Projet API NodeJS
## Introduction   
Ce repository correspond au travail réalisé dans le cadre du projet de réseau social d'entreprise du cours "API NodeJS".

L'équipe se compose des personnes suivantes : 

- BERLEUR Hugo
- GRANSART Quentin
- RIBREAU Lucas

## Récupération du projet   
Avant d'effectuer des modifications sur le projet, ne pas oublier de récupérer les dépendances via la commande `npm install`


## Contrôleurs   

L'API se compose de 3 contrôleurs distincts : 

- Post : `post.controller.js`   
- Commentaire : `com.controller.js`   
- Authentification : `auth.controller.js`   
- Utilisateurs : `user.controller.js`   

## Endpoints
**Authentification**   
`POST /auth/login` : Connexion   
`POST /auth/signin` : Inscription   

**Posts**   
`POST/post/` : Crée un post   
`GET /post/` : Récupère tous les posts   
`GET /post/<id>` : Récupère un post via son id   
`PUT /post/<id>` : Met à jour un post via son id   
`DELETE /post/<id>` : Supprime un post via son id   
`GET /post/user/<id>` : Récupère tous les posts écrits par un utilisateur via son id  

**Commentaires**   
`POST /post/<id>/comment` : Récupère les commentaires d'un post via son id   
`DELETE /comment/<id>` : Supprime un commentaire via son id   

**Utilisateurs**   
`GET /user/` : Récupère tous les utilisateurs     

## Utilisation de Postman
Les requêtes Postman pré-écrites peuvent être retrouvées dans le dossier ./POSTMAN.
Chaque fichier *.json* correspond à une configuration de collection (triées par contrôleur).