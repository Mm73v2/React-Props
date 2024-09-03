import ParentComponent from "./components/ParentComponent";

const App = () => {
  return (
    <div>
      <h2>What is props in react?</h2>
      <p>
        In React, props (short for "properties") are a way to pass data from one
        component to another. They are read-only attributes that allow parent
        components to pass information down to child components.
      </p>
      <h2>Key concepts:</h2>
      <p>
        <span>1- Immutable: </span>Props are immutable, meaning they cannot be
        modified by the receiving component. This ensures that the data flows in
        one direction, from parent to child.
      </p>
      <p>
        <span>2- Passing Data: </span>Props can be used to pass various types of
        data to child components, including strings, numbers, arrays, objects,
        and even functions.
      </p>
      <p>
        <span>3- Accessing Props: </span>Child components access props using
        this.props in class components or directly as arguments in functional
        components.
      </p>

      <h2>Example of Using Props:</h2>
      <ParentComponent />
    </div>
  );
};

export default App;
