import React, { useState } from 'react';
import NavTabs from './NavTabs/NavTabs';
import Resume from './Resume/Resume';
import About from './About/About';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
    
  );
}
