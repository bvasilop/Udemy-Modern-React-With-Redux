# Life Cycle Methods

![component life cycle](./component-lifecycle.png)

- a component life cycle method is a function that we can optionally define inside of our class based components if we decide to implement these methods.
- They will be called automatically by react at certain points during a component's life cycle.
- A life cycle refers to the fact that a component is going to be created and then show up in the DOM or show up on the screen of our browser. Then at some point in time we might do something like call set state which will cause the component to re-render and then in theory at some point in time a component might be removed from the DOM altogether and stop showing its content on the screen. That entire series of events is referred to as the component's life cycle.

## Constructor Function

- **Constructor function** is a function that we can optionally define. If we do, it will be automatically called when a new instance of our component is created.

## Render Method

- The **render method** is not optional which is unlike all the other methods on here.
- The **render method** is the one function that we absolutely have to define.
- The **render method** is a life cycle function that gets called at some point during the life cycle of a component.
- Here's what happens: We start off with the **constructor** being called then when the **render method** will be called we return some
  amount of JSX and that content then becomes visible on the screen. After that we're going to see a series of different life cycle methods being called at different points in time.

### **`componentDidMount`**

- First off, immediately after a component shows up on the screen of our browser's life cycle method calls, **`componentDidMount`** is called.
- If we define a function inside of our class like outside of the constructor right above the render method, if we define a method **`componentDidMount`** this function will be automatically called one time when our component first gets rendered onto the screen.
- After the **`componentDidMount`** method gets called, our component essentially will sit around and wait for an update. An update is going to come in the form of calling that set state method. Anytime we call set state and update our state the component will render itself or essentially update itself.

### **`componentDidUpdate`**

- Anytime that happens another **life cycle** method is called **`componentDidUpdate`** will be called automatically.
- If we defined that function it will be called automatically any time that our component updates
  itself.
- Any time that **`componentDidUpdate`** gets called, right before it, **`render`** will be called.
- So any time our computer updates, the **`render`** method will be called and will return some JSX that will be shown on the screen and then right after that, **`componentDidUpdate`** will be invoked.
- So in general, **`render`** method is going to be called many times, anytime we decide to update our component.

### **`componentWillUnmount`**

- We might decide to stop showing a component on the screen.
- If for some reason we decide to no longer show this component, the **`componentWillUnmount`** method will be automatically called. This method will be usually used if we want to do some kind of cleanup after our component.
