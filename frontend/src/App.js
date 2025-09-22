import Home from './screens/HomeScreen/Home'
import { Routes, Route } from 'react-router-dom';
import ThankYou from './screens/ThankYouScreen/ThankYou';
import NotFound from './screens/NotFoundScreen/NotFound';
import { Fragment } from 'react';
import FloatingChatBot from './components/FloatingChatBot/FloatingChatBot';
import About from './screens/AboutScreen/About';

function App() {
  return ( 
    <>
    <Routes>
      <Fragment>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Fragment>
    </Routes>
    <FloatingChatBot/>
    </>
  );
}

export default App;