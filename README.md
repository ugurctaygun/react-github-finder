Tutorial Project

npx create-react-app

npm install axios

npm install react-router-dom

npm i -g netlify-cli

COMPONENT TYPES

UserItem.js for function based component and object deconstruction to avoid using "this." method.

While using function based components every function within the component needs to be declared (using const fn =)

While using class based components functions can be passed as methods and they dont require declaring.

REACT ROUTER

React router allows client-side routing, using 'Route' tag inside 'Router'.

'Switch' tag looks through its children 'Route's and renders the first one that matches the current URL.
  
Using 'Route exact' exact key to display only the wanted component.
  
NODE JS

.env.local for keeping api keys that are not to be published.

HOOKS

Hooks are functions that let us hook into the React state and lifecycle features from function components ,with access to the React state ,Hooks makes it easier to perform navigation from inside your components.

useState hook to mimic componentDidMount() lifecycle.

CONTEXT

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

As the app grows, passing the props up and down (prop drilling) starts to become harder, using context,reducer and state we can gather
the functions and props on a different file structure allowing the main files to stay cleaner

Context is primarily used when some data needs to be accessible by many components at different nesting levels. 
Apply it sparingly because it makes component reuse more difficult.

NETLIFY

npm i -g netlify

netlify init

npm run build

netlify deploy --prod

MISC.

Spinner.js imports the gif file with webpack.

NavBar.js uses PropTypes to type-check the props that are passed in.
