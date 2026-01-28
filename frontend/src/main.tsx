import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './components/Auth/Auth.tsx';
import App from './App.tsx';
import { SKIP_AUTH } from './utils/Constants.ts';

console.log('VITE_SKIP_AUTH:', import.meta.env.VITE_SKIP_AUTH);
console.log('VITE_REACT_APP_SOURCES:', import.meta.env.VITE_REACT_APP_SOURCES);
console.log('All env vars:', import.meta.env);
console.log('VITE_TEST_VAR:', import.meta.env.VITE_TEST_VAR);
console.log('This is a frontend test created by silva@atb-bremen.de');
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    {SKIP_AUTH ? (
      <App />
    ) : (
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    )}
  </BrowserRouter>
);
