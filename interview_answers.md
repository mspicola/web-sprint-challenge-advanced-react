# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

A functional (stateless) component does not manage its own state and is not able to keep track of changing data, usually using props. A stateful component has state and is able to keep track of changing data, and can also use props sometime

2. When does a componentWillMount function be called? What about a componentWillUpdate?

The `componentWillMount` function is called before the render method is executed. The `componentWillUpdate` function is called as soon as the `shouldComponentUpdate` returns true. 

3. Define stateful logic.

Stateful logic is any code that is used to manipulate or create data. It's a way to drive and manipulate data that is separate from the display of that data in your application.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange, render the component you are testing. Act: find the specific element you are targeting. Assert: pass the test if the element exists in the component (or whatever else you are testing)