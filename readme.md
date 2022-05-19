### Scrimba react course

# using react and jsx only using CDN

useful for when you dont want a toolchain and just want to add components real quick to an already exsisting html css project

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React-CDN-Test</title>
  </head>
  <body>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <div id="root"></div>
    <script crossorigin="anonymous" type="text/babel" src="./index.js"></script>
  </body>
</html>
```

## index.js

```jsx
ReactDOM.render(
  <article>
    <h1>HEllo there </h1>
    <h1 style={{ color: "red" }}> GeneRAl KenoBI</h1>
  </article>,
  document.getElementById("root")
);
```

# Components and Props

This is a thing that is possible apparently in this type of setup :exploding_head:

## index.js

```js
//components
function P1(props) {
  return <h1 style={{ color: "green" }}>{props.text}</h1>;
}
function P2(props) {
  return <h1 style={{ color: "red" }}> {props.text}</h1>;
}

//composing components into page
ReactDOM.render(
  <article>
    <P1 text="heLLO tHERe" />
    <P2 text="gENErAL keNObi" />
  </article>,
  document.getElementById("root")
);
```
