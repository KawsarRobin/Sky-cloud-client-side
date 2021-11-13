import React from 'react';
import Explore from '../Home/Explore/Explore';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const ExplorePage = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Explore></Explore>
      <Footer></Footer>
    </div>
  );
};

export default ExplorePage;
