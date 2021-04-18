import React from "react";
import FeaturedService from "../FeaturedService/FeaturedService";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Admission from "../Admission/Admission";
import Testimonials from "../Testimonials/Testimonials";
import Blogs from "../Blogs/Blogs";
import Contract from "../Contract/Contract";
import Trainers from "../Trainers/Trainers";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeaturedService></FeaturedService>
      <Admission></Admission>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <Trainers></Trainers>
      <Contract></Contract>
      <Footer></Footer>
    </div>
  );
};

export default Home;
