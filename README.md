# Almond Suggestions

This repository contains starter code for the Almond Suggestions project put together for [TreeHacks 2020](https://treehacks.com). Teams can use this code as a strong starting point to develop a web application that can allow the open-source community to login, suggest features for [Almond](https://almond.stanford.edu), and vote on them.

## Getting Started

Clone this repo to your local machine and navigate to it.

```
git clone https://github.com/stanford-oval/almond-suggestions.git
cd almond-suggestions
```

Create a new repository on GitHub that will contain your code for this project. Then move code from this repo to your newly created repository.

```
rm -rf .git
git init
git add .
git commit -m "First commit"
git remote add origin <remote-repository-url>
git push origin master
```

Install npm dependencies and start the local server.

```
yarn
yarn start
```

## Development

In this guide, we assume basic familiarity with JavaScript and [React](https://reactjs.org). [Redux](https://redux.js.org) has also been integrated into the starter code, but you are not obligated to use it.

This project also uses [Next.js](https://nextjs.org/), a React framework that enables developer-friendly server-side rendering (SSR). Because we've written much of the code required to get Next.js up and running, familiarity with Next.js is not required to complete this project using the starter code.

### Creating a Page

Pages in Next.js are React components placed in the `pages` directory. Each file in `pages` must contain only one component. While class-based components are fine, we prefer if you define components functionally:

```js
import React from 'react';

export default props => {
    // Your page logic here (optional)

    return (
        <div>
            <h1>Hello world!</h1>
            <p>My name is Almond.</p>
        </div>
    );
}
```

Each page is rendered as a component placed in parent code provided by `pages/_app.js`, which provides global style and redux support. 

Associate pages to specific URL routes in `routes.js`.

```js
const APP_ROUTES = [
  {
    page: '<page_file_name_without_js_extension>',
    pattern: '<url_pattern>'
  }
]
```

### Creating Components

Create React components in `src/components`. It's good practice to name files with names of the main components contained therewithin. Please define components functionally, if at all possible.

### Database Access

In order to provide you with maximum freedom in designing a crucial part of the application, we have not provided a default database solution for you to use.

### Styling

Global styles can be written using [Sass](https://sass-lang.com) in `src/core.scss`. You can also write styles for specific components in `scss` files in the components folder. You can import these styles as if they were a JavaScript module in the component files and use the corresponding class names:

```sass
// components/Title.scss
.special-title {
    font-size: 3em;
}
```

```js
// components/Title.js
import './Title.scss';

export default props => (
    <div>
        <h1 className="special-title">I love Almond!</h1>
    </div>
);
```

## Getting Help

Visit Almond's TreeHacks [site](https://treehacks.almond.stanford.edu) to learn how you can get help.

## About Almond

Almond is the world's leading open-source virtual assistant started by researchers at Stanford University's [Open Virtual Assistant Lab](https://oval.cs.stanford.edu) led by Professor Monica Lam.
