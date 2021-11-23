import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
// import Project from './components/Project';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    { name: 'About', description: '', },
    { name: 'Portfolio', description: 'Endlessly pursuing clean code' },
    { name: 'Contact', description: 'Slide into the DMs' },
    { name: 'Resume', description: 'Client-facing experience' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="bg">
      <Header>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      </Header>
      <main>
        {!contactSelected ? (
        <>
        <About currentCategory={currentCategory}></About>
        </>
        ) : (<ContactForm></ContactForm>)}
      <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
