# 🎢 PARC_ATTRACTION - Lantz Nathan  
**Auteurs** : LANTZ Nathan 

## 🚀 Environnement utilisé  
- **GitHub** et **Docker** pour la gestion du projet et des conteneurs.  

---

## 🎉 Bienvenue dans mon projet  
Vous trouverez ici tout le contenu du site Parc-Attraction. Ce document détaille les éléments et fichiers disponibles dans ce dépôt.

---

### 🌐 2. Dossier `parc`  
Contient tout le code côté client, développé avec **Angular**.  

- Les fichiers applicatifs sont situés dans `client/src/app/` :  
  - **HTML** : Structure des pages.  
  - **SCSS** : Styles de l'application.  
  - **TS** : Logique métier.  
  - **Spec.ts** : Tests unitaires.  
- Un fichier `Dockerfile` est présent pour construire l'application Angular, accessible via [http://localhost:4200](http://localhost:4200).  

---

### 🔧 3. Dossier `python`  
Contient tout le code côté serveur, développé avec **Python**.  

- **Code serveur** : Situé dans `python/app.py`, il gère l'API et lance le serveur sur [http://localhost:5000](http://localhost:5000).  
- **Base de données** : Le fichier `sql_file/init.sql` contient les données pour créer les tables de la base de données.  
- **Dockerfile** : Permet de lancer le serveur via la commande `docker-compose up --build`.  

---

### 🗂️ 4. Racine du projet  
À la racine, vous trouverez le fichier **`docker-compose.yml`** qui orchestre les `Dockerfile` des dossiers `parc` et `python`, facilitant le lancement complet de l'application.  

---

## 🐳 Lancement du projet via Docker

1. Clonez le projet complet depuis GitHub ou alors télécharger le dossier en ZIP :  
   ```bash
   git clone https://github.com/NathanLANTZ57/SAE5_LANTZ_CHEVALIER.git
   ```
2. Accédez à la racine du projet (le dossier contenant `parc`, et `python`).  
3. Ouvrez un terminal PowerShell.  
4. Lancez la commande suivante :  
   ```bash
   docker-compose up --build
   ```