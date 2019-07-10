# Redux

![Redux](./redux-1.png)

- With Redux, rather than authoring state or maintaining state inside of our React components we're going to instead extract it to this redux library

- The React library itself is all about rendering content on the screen and handling user interaction

![Redux cycle](./redux-cycle.png)

## Analogy for understanding Redux

![Redux analogy](./redux-analogy-1.png)

![Redux analogy](./redux-analogy-2.png)

- We're going to say that rather than the policies Department internally having a big binder or a big sheet of paper that lists all these customers they're going to instead store that list of policies inside of a central repository of company data that is stored outside of their department.

![Redux analogy](./redux-analogy-3.png)

- A customer is going to fill out a form handed off to the former receiver. The pharmacy will make a copy of it and then hand it off to each department along with that department's little slice of data.

![Redux analogy](./redux-analogy-4.png)
