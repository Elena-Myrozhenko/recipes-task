# Recipes

Interview task for **[Front-end](http://english.stackexchange.com/questions/34447/is-it-front-end-frontend-or-front-end) JavaScript Developer position** at [**Binary Studio**](https://binary-studio.com/).

## Reference

The task is small, but it is important to treat it seriously and supply a production quality code. If you’re uncertain about any details of the project, feel free to render your own decisions – make your software opinionated.

Write a simple cookbook application in JavaScript. The application is basically a list of recipes which are sorted by date of their creation. Required features:

- display list of recipes (date created, description)
- add new recipe
- modify existing recipe
- view all previous recipe versions

Client-side must be written utilizing [**React**](https://facebook.github.io/react/) + [**Redux**](http://redux.js.org/) libraries. Server-side can be programmed in Node.js or you can also write the application using client-side storage (e.g. localStorage, IndexedDB, etc.). Server-side should provide minimum CRUD functionality to be used by client-side.
Pay special attention to markup of the page. Layout should be of production quality and look nice on mobile devices.

**Test Task Evaluation Criteria:**

| Criterion | Points | Description |
| --------- | ------ | ----------- |
| Application architecture | 25 | Decoupling and modularity, code style |
| Project infrastructure | 10 | Module and build systems configuration, folder structure |
| Data structures | 10 | Effectiveness and reliability |
| Tests | 15 | Completeness and approach |
| Performance | 10 | Layout performance / heap size on large amounts of data |
| UI / UX | 10 | Overall impression of layout, components, color and positioning |
| Responsiveness | 10 | Display adaptation for desktop, phone and tablet |
| Visual interaction | 10 | Animations, canvas, svg - presence, relevance and implementation |

## Bootstrap

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), please refer to the [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) for information on how to perform common tasks.