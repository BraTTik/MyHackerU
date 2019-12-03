import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './components/footer';
import Header from './components/header';
import BackToTopBtn from './components/back_to_top_button';
import { updateGoods, updateCart } from './store/actions';
import './App.css';

function App(props) {

  const dispatcher = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('_fashe_cart')){
      let data = JSON.parse(localStorage.getItem('_fashe_cart'));
      if(data.items.length > 0){
        dispatcher({
          type: updateCart.getType(),
          payload: JSON.parse(localStorage.getItem('_fashe_cart')),
        });
      }
    }
  }, []);

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
