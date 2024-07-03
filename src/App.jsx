import React from 'react';
import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Accommodations from './components/Accommodations';
import CollapsesArticles from './components/collapses/CollapsesArticles';
import CollapsesPropos from './components/collapses/CollapsesPropos';
import Carroussel from './components/Carroussel';


function App() {

  return (
    <>
      <p>Hello</p>
      <Router/>
      <Header/>
      <Footer/>
      <Banner/>
      <Accommodations/>
      <CollapsesArticles/>
      <CollapsesPropos/>
      <Carroussel/>


    </>
  )
}

export default App
