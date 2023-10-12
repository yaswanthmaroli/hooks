## Types of Hooks

1. UseState
2. UseEffect
3. UseContext
4. UseRef
5. UseReducer
6. UseLayOutEffect
7. UseMemo
8. UseCallBack
9. CustomHooks

## What is Hooks?

Hooks are the functions to use some react features in functional components.
InOther words, Hooks are the functions that make functional components work like class component.

1. what is usestate ?
   UseState Hook is a function to add State in Functional Component.

.... What is State?
State is nothing but just values of variable of your component.

2. what is UseEffect?

UseEffect is used to perfrom side effect in our component.

... What is SideEffect?

sideEffects are actions which performed with outside the world

... Common sideEffects

Fetching data from Api
updating the Dom document & Window
Timer Function setTimeOut & Set Interval

useEffect Model

useEffect (callback, dependencies) callback are what to run and dependencies are when to run

... Variation of useEffect

UseEffect without dependencies
UseEffect with empty array
UseEffect with variables

3. What is UseContext ?

UseContext Hook is used to manage global data in react application

- Global State
- Themes
- Services
- User Settings

usecontext is used for avoid props drilling we can able to use data any where on child component with out using propdrill by using useContext.

... How to create Context

Create Context requires 3 simple steps

1. creating the context
2. providing the context
3. consuming the context

4. What is UseRef ?

... UseRef allows us to access DOM elements

... For creating mutable variables which will not re-render the component.

5. What is Usereducer ?

UseReducer is used to manage complex state in react application

6. useLayout Effect ?

useLayout Effect works exactly as the same as useEffect Also same syntax. But the difference is when its run UseEffect runs after the Dom is printed on the browser But useLayout is run before the Dom is printed on the browser.

whenever we want to run code before The dom is printed like calculate

Height,
Width,
Anything related to layout we use UseLayoutEffect.

It also run synchronously.

The most common use of useLayout is to get the dimension of the layout so it is called useLayout Effect.

7. What is UseMemo ?

useMemo hook is used to apply Memoization in React.

.. what is Memoization ?

Memoization is a technique for improving the performance of code.

it is useful to avoid expensive calculations on every render when the returned value is not change.

// we perform all side effects in useEffect hook.
// All expensive Functions, calculation in useMemo hook

8. What is UseCallback?

UseCallback is same as useMemo Usecallback is used to return memoize function while usememo returns memoize value. which improves performabce of applicaion.
