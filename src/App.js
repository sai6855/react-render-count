import React from "react";

const A = ({ children }) => {
  const names = [];
  const getComponentNames = (parent, name = "") => {
    if (name) {
      names.push(name);
    }
    if (parent) {
      React.Children.forEach(parent, (child) => {
        const Child = child.type;
        if (typeof Child === "function" && React.isValidElement(<Child />)) {
          getComponentNames(child?.props?.children || "", Child.name);
        }
      });
    }
  };
  // console.log(children);
  getComponentNames(children);
  console.log(names);
  // console.log(React.isValidElement(<BB />));
  return children;
};

const Div = ({ children }) => <div>{children}</div>;
const H1 = ({ children }) => <h1>{children}</h1>;
const P = ({ children }) => <p>{children}</p>;

export default function App() {
  return (
    <A>
      <Div>
        <H1>
          <H1>
            <P>f</P>
          </H1>
        </H1>
        <P>Start editing to see some magic happen :)</P>
      </Div>
    </A>
  );
}
