import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  const [categories] = useState([
    {name: 'About', id: 'about'}
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderCategory = () => {
    switch(currentCategory.name){
      default: 
      return <About/>
    }
  }
  return (
    <div>
        <Header/>
        <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}/>
        <main>
          {renderCategory()}
        </main>
        <Footer/>
    </div>
  );
}

export default App;
