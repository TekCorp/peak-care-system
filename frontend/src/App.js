import Home from './screens/HomeScreen/Home'
import { Routes, Route } from 'react-router-dom';
import ThankYou from './screens/ThankYouScreen/ThankYou';
import NotFound from './screens/NotFoundScreen/NotFound';
import { Fragment } from 'react';

function App() {
  return ( 
    <Routes>
      <Fragment>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Fragment>
    </Routes>
  );
}

export default App;