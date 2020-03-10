import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeDataEn from './resumeDataEn';
import resumeDataKo from './resumeDataKo';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  let query = useQuery();
  let resumeData = resumeDataKo;
  let lang = "ko";
  if (query.get("lang") != null && query.get("lang").toLowerCase() === "en") {
    resumeData = resumeDataEn;
    lang = "en";
  }
    
  return (
    <div className="App">
      <Header resumeData={resumeData} lang={lang}/>
      <About resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      <Portfolio resumeData={resumeData}/>
      <Testimonials resumeData={resumeData}/>
      <ContactUs resumeData={resumeData}/>
      <Footer resumeData={resumeData}/>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <Home />
      </Router>
    );
  }
}

export default App;