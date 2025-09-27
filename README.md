### ✅ Readme: 
Create a README file to answer the following question-

 - What is JSX, and why is it used?
 - What is the difference between State and Props?
 - What is the useState hook, and how does it work?
 - How can you share state between components in React?
 - How is event handling done in React?

---
Answer:
1. What is JSX, and why is it used?
 JSX হলো JavaScript XML। এটি React-এ একটি syntax extension, যেটি HTML এর মতো দেখতে কোড লিখতে দেয় JavaScript-এর ভেতরে।
 JSX ব্যবহার করলে UI লেখা অনেক সহজ হয় এবং কোড পড়তেও সুবিধা হয়।

2. What is the difference between State and Props?
State:
 * State হলো component-এর ভেতরের data যেটা change হতে পারে এবং সেই change হলে UI re-render হয়।

Props:
 * Props হলো parent component থেকে child component-এ পাঠানো data, যেটা child শুধু পড়তে পারে (read-only)।

3. What is the useState hook, and how does it work?
 useState হলো React-এর একটি hook, যা function component-এর মধ্যে state তৈরি করতে ব্যবহৃত হয়।

Syntax:
const [count, setCount] = useState(0);

here,
* count হলো বর্তমান state-এর মান।
* setCount হলো একটি function, যেটা দিয়ে state update করা হয়।
* যখন state update হয়, তখন component আবার render হয়।

4. How can you share state between components in React?

 * Lifting State Up → common parent component-এ state রাখা হয় এবং props দিয়ে child-এ পাঠানো হয়।

 * Context API → state বা data অনেক স্তরের component-এ পাঠানোর জন্য।

 * State Management Libraries → Redux, Zustand, Recoil ইত্যাদি ব্যবহার করা যায়।

5. How is event handling done in React?
 React-এ event handling করা হয় JavaScript event এর মতোই, তবে attribute গুলো camelCase এ লেখা হয়।

Example:
function Button() {
  const handleClick = () => {
    alert("Button Clicked!");
  };
  return <button onClick={handleClick}>Click Me</button>;
}

here,
 * onClick হলো React event handler।
 * Event function (handleClick) define করে সেটি button এ attach করা হয়েছে।

---


