import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2>Question: what is the purpose of react router?</h2>
            <h4>Answer: ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</h4>

            <h2>Question: How does context api work?</h2>
            <h4>Answer: React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page</h4>

            <h2>Question: Use ref in react?</h2>
            <h4>Answer: Refs provide a way to access DOM nodes or React elements created in the render method.

                In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. <br /> There are a few good use cases for refs:

                Managing focus, text selection, or media playback. <br />
                Triggering imperative animations. <br />
                Integrating with third-party DOM libraries. <br />
                Avoid using refs for anything that can be done declaratively.</h4>
        </div>
    );
};

export default Blog;