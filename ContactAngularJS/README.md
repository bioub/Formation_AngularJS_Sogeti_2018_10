# Exercice

* Créer un fichier `src/contacts/contact.service.js` qui contient un classe `ContactService` (reprendre `StarWarsService`)

* ce fichier doit contenir un module `contact.service`

* ce module doit enregistrer la class `ContactService` dans Angular (au choix via `.service()` ou `.factory()`)

* pensez à créer la balise <script>

* ajouter `contact.service` dans les dépendances de `contact.module`

* dans le composant `ContactList` ajouter un controller qui dépend du service créé

* au chargement du composant `ContactList` (dans le constructeur) appeler la méthode du service qui envoit la requete au serveur et afficher les résultats dans le template avec `ng-repeat`
