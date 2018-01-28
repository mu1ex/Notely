### Installation and Run

Notely.

This app was created manually using react-native init and not expo.

You must have android simulator running before executing the below commands.

```sh
$ yarn install
$ react-native run-android
```
This app has the fllowing functionality built into it:

1) Create/add a new note
2) Edit a note
3) Star or Favourite a note
4) Delete a note by swiping the note on the home screen and pressing the delete button
5)Apply appropriate filters by clicking on the filter icon to toggle the filter drawer.
6) Do not forget to click on the apply button in the bottom to apply the filters.

### Notable Libraries used
* Redux - for in memory state management
* Recompose - Utility belt which is handy to add functionality to stateless components.
* Redux-Persist - Used to save and rehydrate redux state when app reloads
* react-navigation - Used for navigating between various screens.

### Folder Structure
```
src -|
     +--components (Contains reusable react components)
     |
     +--constants (Constants used in the app viz, filters, etc)
     |
     +--containers + (Contains react components connected to reducer)
     |             |
     |             |
     |             +-- container +
     |                           |
     |                           +--reducer.js (Containes the reducer for that container)
     |                           +--actions.js (Contains action creators used in that container)
     |
     |
     +--reducers (Root reducer that import other reducers and exports combined)
     |
     +--utils (Bunch of string utils for now)
     |
     +--routes.js (Root routes file used by react-navigation)
     |
     +--store.js (store configs)
     |
     +--App.js (the root app file)
```

### Cheers 🥂
### Johnny Peter