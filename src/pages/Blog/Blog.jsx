import React from "react";
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className="my-8">
      <Pdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => (
          <div className="text-center mb-3 ">
            <button className="btn btn-outline" onClick={toPdf}>
              <FaDownload className="mr-2 " />
              <span className="text-sm">Download This Blog</span>
            </button>
          </div>
        )}
      </Pdf>
      <div ref={ref} className="w-8/12 mx-auto lg:mt-12">
        <h1 className="mtext-primary text-gray-800 text-center mb-16">
          Explore Our Blog here
        </h1>
        <div>
          {/* first ans  */}
          <div className="mt-8">
            <h2 className="mb-5  text-3xl text-gray-900 my-font">
              How to validate React props using PropTypes?
            </h2>
            <p className="mtext-secondary">
              PropTypes is React’s internal mechanism for adding type checking
              to component props. React components use a special property called
              propTypes to set up type checking.
              <img
                className="my-3 w-6/12 rounded-md"
                src="https://i.ibb.co/zrQMsnn/code.png"
                alt=""
              />
              In this example, we define a MyComponent function that takes in a
              props. Here: PropType.string works for validates the prop is a
              string. PropTypes.number works for validates the prop is a number.
              In PropTypes there are many props like this
            </p>
          </div>
          <div className="mt-8">
            <h2 className="mb-5 text-3xl text-gray-900 my-font">
              Differences between uncontrolled and controlled components
            </h2>
            <p className="mtext-secondary">
              Uncontrolled components refers to component that manage their own
              state internally. Their value is not controlled by react. Instead
              it is controlled by DOM. It's value retrieve through a ref. <br />
              A controlled component refers to components that have their own
              state and behavior controlled by the parent component. Their value
              is control by react. We can use an onchange pror to update value.
            </p>
          </div>

          {/* third ans  */}

          <div className="mt-8">
            <h2 className="mb-5 text-3xl text-gray-900 my-font">
              What is a custom hook, and why will you create a custom hook?
            </h2>
            <p className="mtext-secondary">
              Custom hooks is a Javascript function whice we can create by
              ourselves. Hooks are reusable funtions. When we need to share
              logic or data between other Javascript function or Components we
              use hook. Custom hook starts with 'use'. Custom hooks can help
              simplify code, improve code organization, and reduce repetition
              and the time to write code. It also enhances the rendering speed
              if the code as a custom hook doesn't need to be rendered again and
              again. And we can use anywhere in our component where we need to
              use.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="mb-5 text-3xl text-gray-900 my-font">
              Difference between nodejs and express js
            </h2>
            <p className="mtext-secondary">
              Node.js is an open source server environment, cross-platform
              runtime environment That allows to developers to build server side
              application using Javascript. It is build on the Crome V8 Engive.
              Node.js provides a non-blocking I/O model that makes it highly
              scalable . Where Express js is a minimal and flexible Node.js web
              application framework that provides a set of features for building
              web applications, including middleware for routing, handling
              request and responses. It's highly extensible and easier to build
              web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
