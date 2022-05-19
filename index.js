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
