# redux-toolkit-practice

This App is Built using React 18+ version with TypeScript, so there are few changes in index.ts (entry point)

# 1
// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');

//If you use JS
const root = createRoot(container); 

//if you use TypeScript
const root = createRoot(container!);

root.render(<App tab="home" />);
