import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeadingStyledComponent from './components/headingStyledComponents/HeadingStyledComponent';
import Footer from './components/footer/Footer';
import Heading from './components/heading/Heading';

const root = ReactDOM.createRoot(document.getElementById('root'));
const companyData={
  email: "contact@example.com",
  city: "Warsaw",
  street: "ujazdowskie"
}
root.render(
  <React.StrictMode>
    <HeadingStyledComponent/>
    <Heading headerTitle="Welcome on page"/>
    <App />
    <Footer companyData={companyData} contactEmail="admin@exapmle.com"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
