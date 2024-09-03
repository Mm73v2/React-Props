import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <>
      <h2>
        This is parent component and underneath me is the child component.
      </h2>
      <ChildComponent text="Hello from child component !!!!" />
    </>
  );
};

export default ParentComponent;
