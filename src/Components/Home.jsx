// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import About from "./About";

// function Home() {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <section className="banner text-center " id="home">
//         <div className="container ">
//           <img
//             src="https://healthydietindia.com/wp-content/uploads/2021/06/logo.jpg"
//             alt="logo"
//             className="logo p-5"
//           />

//           <h1
//             className="block p-3"
//             style={{ color: "green", fontFamily: "cursive" }}
//           >
//             <b>THE TASTE OF</b>
//             <span className="d-blockk">
//               {" "}
//               <b>GOOD HEALTH</b>
//             </span>
//           </h1>
//           <img
//             src="https://healthydietindia.com/wp-content/uploads/2021/06/shape.png"
//             alt=""
//             className="shape-banner p-3"
//           />
//           <p
//             className="n-text"
//             style={{ fontFamily: "sans-serif", fontSize: "22px" }}
//           >
//             <b>Healthy Diet is a promise to create a food culture that is</b>{" "}
//             <br></br>
//             <b>
//               nutritious and delicious at the same time. So enjoy your meal from
//             </b>
//             <br></br>
//             <b>Healthy Diet and stay healthy.</b>
//           </p>
//           <span
//             className="order-info mt-4"
//             data-toggle="modal"
//             data-target="#myModal"
//           ></span>
//         </div>
//       </section>
//       <About></About>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import "./Home.css"; // Importing the CSS file
import { Carousel } from 'react-bootstrap';


function Home() {
  return (
    <div style={{backgroundImage:"url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-042.jpg)" , backgroundSize:"cover", backgroundRepeat:"none"}}>
      <Navbar />
     
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
     
         <Carousel style={{ width: "500px", height: "300px" , }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClNvLzOQQzO036a3ydDP0jVnGKo61GEsgQA&s"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to our NutriPath App</h3>
            <p>Discover the path to a healthier lifestyle with our comprehensive nutrition tools.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t3.ftcdn.net/jpg/02/69/20/50/360_F_269205000_FAvWjPBVLruUEoVzmm3nNdch9mSFdzLj.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Track Your Progress</h3>
            <p>Monitor your dietary intake and progress towards your wellness goals.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://w0.peakpx.com/wallpaper/654/542/HD-wallpaper-healthy-food-heart-of-fruits-and-vegetables-good-nutrition-diet-slimming-weight-loss.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Personalized Nutrition Plans</h3>
            <p>Receive customized meal plans tailored to your individual needs and preferences.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    
  
  
      <section className="features text-center" style={{backgroundImage:"url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-042.jpg)" , backgroundSize:"cover", backgroundRepeat:"none"}}>
  <div className="container">
    <h2 className="features-title">Discover Our Exclusive Features</h2>
    <div className="feature-cards">
      <div className="feature-card">
        <h3>Advanced Nutritional Analysis</h3>
        <p>Unlock deep insights into your nutritional intake, meticulously analyzing macronutrients (carbohydrates, proteins, fats) and micronutrients (vitamins, minerals).</p>
      </div>
      <div className="feature-card">
        <h3>Personalized Goal Management</h3>
        <p>Empower yourself with tailored nutrition objectives, meticulously crafted to align with your dietary preferences and health aspirations, on a daily basis.</p>
      </div>
      <div className="feature-card">
        <h3>Comprehensive Food Repository</h3>
        <p>Explore an extensive repository of culinary delights, simplifying the process of discovering and logging your meals effortlessly.</p>
      </div>
      <div className="feature-card">
        <h3>Seamless Progress Monitoring</h3>
        <p>Embark on a journey of self-discovery, seamlessly monitoring your evolution over time and uncovering invaluable trends in your dietary habits to propel you toward your wellness zenith.</p>
      </div>
    </div>
  </div>
</section>
     
      <Footer />
    
    </div>
  );
}

export default Home;
