import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Review></Review>
      <WhyChoose></WhyChoose>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Home;
