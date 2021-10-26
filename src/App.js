import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Staff from './components/Staff';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  const [categories] = useState([
    {name: 'About', id: 'about'},
    {name: 'Staff', id: 'staff'},
    {name: 'Services', id: 'services'},
    {name: 'Contact', id: 'contact'}
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderCategory = () => {
    switch(currentCategory.name){
      case 'Staff':
        return <Staff/>;
      case 'Services':
        return <Services/>;
      case 'Contact':
        return <Contact/>;
      default: 
      return <About/>
    }
  }
  return (
    <div>
        <Header/>
        <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}/>
        <main className="main-window">
          {renderCategory()}
        </main>
        <Footer/>
    </div>
  );
}

export default App;
