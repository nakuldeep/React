 const heading = React.createElement("h1", {}, "Hello WOlrd from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)

const parent = React.createElement("div", { id: 'parent' }, [
    React.createElement("div", { id: 'Child1' }, [
        React.createElement("h1", {} , "I am an H1 Tag"),
        React.createElement("h2", {} , "I am an H1 Tag")
    ]),
    React.createElement("div", { id: 'Child2' }, [
        React.createElement("h1", {} , "I am an H1 Tag"),
        React.createElement("h2", {}, "I am an H1 Tag")
    ])
])

console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);