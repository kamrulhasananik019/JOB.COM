import React from 'react';

const Blog = () => {
    return (
        <div className='my-32 '>
            <div className=' p-5 gap lg:px-32'>
                <h1 className='text-3xl py-2'>when should we use context api ?</h1>
                <h1 className='font-semibold py-2'>
                    You can use the Context API in React when you
                    have data or state that needs to be shared across
                    multiple components without having to pass it down
                    manually through props. It helps to avoid prop
                    drilling and makes the code cleaner and easier to manage.
                </h1>
            </div>
            <div className=' p-5 gap lg:px-32'>
                <h1 className='text-3xl py-2'>what is react custom hook ?</h1>
                <h1 className='font-semibold py-2'>
                    A custom hook is a JavaScript function that starts with the
                    word "use" and allows you to reuse stateful logic across
                    multiple components in a React application. Custom hooks
                    are a way to extract reusable logic from components and
                    share it among them. They
                    are easy to create and can make your code more concise
                    and easier to maintain.
                </h1>
            </div>
            <div className=' p-5 gap lg:px-32'>
                <h1 className='text-3xl py-2'>what is useRef and how its work ?</h1>
                <p className='font-semibold py-2'>useRef is a React hook that allows you to create a 
                reference to a DOM element or a variable, and access 
                it throughout the component's lifecycle.</p>
                <h1 className='font-semibold py-2'> It returns
                    a mutable object that you can update without causing
                    a re-render of the component. This is useful when you
                    want to store a value between renders or access a DOM
                    element's properties or methods, like getting its height
                    or triggering a click event. It works by creating a
                    reference to the element or value and updating it
                    directly, without affecting the component's state or
                    triggering a re-render.
                </h1>
            </div>
            <div className=' p-5 gap lg:px-32'>
                <h1 className='text-3xl py-2'>what is useMemo and how its work ?</h1>
                <p className='font-semibold py-2'>useMemo is a built-in React hook that 
                    allows you to memoize the result of a function</p>
                <h1 className='font-semibold py-2'> it is only recomputed when one of its dependencies changes. 
                    It can help optimize the performance of your React components by 
                    preventing unnecessary re-rendering when a value hasn't changed.
                </h1>
            </div>
        </div>
    );
};

export default Blog;