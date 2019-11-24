import React, { Suspense } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import BackToTopBtn from './components/back_to_top_button';
import './App.css';

function App(props) {

  return (
    <React.Fragment>

      <Header/>

      <Suspense fallback = { <div>Loading... </div> }>
        { props.children }
      </Suspense>

      <Footer/>

      <BackToTopBtn />
    </React.Fragment>
  );
}

export default App;
