const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "heading1"),
    React.createElement("h1", { id: "heading2" }, "heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading3" }, "heading3"),
    React.createElement("h1", { id: "heading4" }, "heading4"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root.render(parent);
root1.render(parent);
