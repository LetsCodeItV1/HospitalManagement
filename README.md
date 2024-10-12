
# Hospital Management System

Ce projet est basé sur Django et est conçu pour gérer diverses opérations hospitalières telles que l'enregistrement des patients, les rendez-vous, et bien plus encore.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés :
- Python 3.x
- Git

## Étapes pour exécuter l'application (Windows)

1. Cloner le dépôt
   ```bash
   git clone https://github.com/LetsCodeItV1/HospitalManagement.git
   ```
   
2. Naviguer dans le répertoire du projet
   ```bash
   cd HospitalManagement
   ```

3. Activer l'environnement virtuel
   ```bash
   cd HospitalManagement/Scripts
   activate
   cd ../
   ```

4. Exécuter le serveur de développement Django
   ```bash
   py ./manage.py runserver
   ```

Cela démarrera l'application, et vous pourrez y accéder en naviguant vers `http://127.0.0.1:8000/reception` dans votre navigateur web.

## Informations supplémentaires

- Assurez-vous que l'environnement virtuel est activé avant d'exécuter le serveur.
- Si des migrations sont nécessaires, exécutez `py ./manage.py migrate` avant de démarrer le serveur.
