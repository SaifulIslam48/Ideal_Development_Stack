# Dev Stack Builder

## About The Project
Dev Stack Builder is an interactive web application that helps developers explore various frontend, backend, and tooling options. Users can browse different tools, compare them, and visually put together their ideal technology stack for their next big project.

## Technologies Used
* React (UI Framework)
* TypeScript (Static Typing)
* Vite (Build Tool)
* Tailwind CSS (Styling)

## Key Features
1. **Interactive Stack Builder:** Users can click to select and add specific technologies to build their own custom "Your Stack" list.
2. **Dynamic Data Loading:** Automatically fetches and displays technology details from a structured JSON file.
3. **Fully Responsive:** The layout seamlessly adapts to look perfect on both mobile phones and desktop screens.

## Q & A

**1. What is JSX, and why is it used in React?**
**Ans.:** JSX stands for JavaScript XML. It is a syntax extension that allows us to write HTML tags directly inside our JavaScript files. It is used in React because it makes it visually easier to build and understand user interfaces.

**2. What is the difference between props and state?**
**Ans.:** Props : (short for properties) are used to pass data down from a parent component to a child component, and the child cannot change them (they are read-only). State : is local data managed inside a component that can change over time (like tracking if a button was clicked).

**3. What does the `useState` hook do, and where did you use it in this project?**
**Ans.:** The `useState` hook allows a React component to remember and track data between renders. When the state changes, React automatically updates the screen. In this project, I used `useState` to keep track of the array of technologies a user has added to their "Your Stack" list.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
**Ans.:** `useEffect` lets us run side effects or background tasks (like fetching data) in our components. I needed it to load the JSON data because it ensures the data is fetched exactly once when the component first loads, preventing the app from accidentally reloading the data over and over on every render.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
**Ans.:** React uses the unique `key` prop to keep track of individual list items. If an item is added, removed, or changed, the key helps React efficiently update only that specific item in the DOM instead of re-drawing the entire list.

**6. What is conditional rendering? Show one place you used it.**
**Ans.:** Conditional rendering is when you use JavaScript conditions (like `if` statements or the `&&` operator) to decide whether to show or hide a piece of the UI. In this project, I used it in the "Your Stack" component: if the stack array length is 0, it renders the text ("Your stack is empty"); otherwise, it renders the list of selected technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
**Ans.:** Data is passed from a parent to a child using props (e.g., `<ChildComponent title="Hello"/>`). To send data back to the parent, the parent must pass down a function as a prop. The child then calls that function and passes its data in as an argument, which updates the parent.