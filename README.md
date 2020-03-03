Tutorial Project

npx create-react-app

npm install axios

npm install react-router-dom

COMPONENT TYPES

UserItem.js for function based component and object deconstruction to avoid using "this." method.

While using function based components every function within the component needs to be declared (using const fn =)

While using class based components functions can be passed as methods and they dont require declaring.

REACT ROUTER

React router allows client-side routing, using <Route> tag inside <Router> and using <Switch> tag makes sure
only the matched component to be displayed while keeping the state of the non displayed components.
  
Using <Route exact> exact key to display only the wanted component.
  
NODE JS

.env.local for keeping api keys that are not to be published.

HOOKS

useState hook to mimic componentDidMount() lifecycle.

MISC.

Spinner.js imports the gif file with webpack.

NavBar.js uses PropTypes to type-check the props that are passed in.
