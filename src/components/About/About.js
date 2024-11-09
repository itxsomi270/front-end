import React from 'react';
import './About.css'; // Import the external CSS

const About = () => {
  return (
    <div className="about-container">
      <h1 className="heading">About Us</h1>
      <p className="intro">
        Welcome to **Find A Hostel**! We provide a user-friendly platform that helps you find the perfect hostel accommodation, especially for students, job holders, and travelers looking for budget-friendly places to stay. Whether you're in search of a quiet place to study or a vibrant location to connect with like-minded individuals, **Find A Hostel** makes it easy to find accommodation that fits your needs.
      </p>

      <h2 className="subheading">About Find A Hostel</h2>
      <p className="paragraph">
        **Find A Hostel** is the ideal solution for students and young professionals seeking affordable and comfortable accommodation. The platform allows users to search for hostels in any city and its subareas, making it easier to find accommodation in specific neighborhoods that suit your lifestyle. Whether you are looking for a place in a posh area or a more economical option in a central or suburban location, we provide all the options in one place.
      </p>

      <p className="paragraph">
        Our app offers a wide variety of areas and neighborhoods to choose from, ensuring that everyone—from students on a tight budget to working professionals seeking luxury—can find the perfect place to stay. The platform includes listings in popular and less-known areas of big cities, catering to all types of users, including:
      </p>

      <ul className="areas-list">
        <li><strong>Posh and Elite Areas:</strong> For those who seek comfort, luxury, and a premium lifestyle.</li>
        <li><strong>Central Areas:</strong> Ideal for those who prefer to be in the heart of the city, close to schools, universities, or workplaces.</li>
        <li><strong>Suburban Areas:</strong> Budget-friendly options in quieter, more peaceful areas for a more relaxed living experience.</li>
        <li><strong>Working-Class Areas:</strong> Perfect for job holders looking for affordable yet comfortable accommodation near their workplace.</li>
        <li><strong>Student-Friendly Areas:</strong> Affordable options close to universities and educational institutions with a vibrant, social atmosphere.</li>
      </ul>

      <h2 className="subheading">Qualities of Find A Hostel</h2>
      <p className="paragraph">
        **Find A Hostel** offers a range of features that make it stand out as the go-to platform for affordable accommodation:
      </p>
      <ul className="features-list">
        <li><strong>Easy Search:</strong> Quickly find hostels in your desired city or neighborhood using our powerful search tool.</li>
        <li><strong>Variety of Options:</strong> Whether you're on a budget or looking for a premium experience, we have listings that cater to every need.</li>
        <li><strong>User-Friendly Interface:</strong> Our clean and intuitive design makes it easy to navigate through listings, view details, and make bookings.</li>
        <li><strong>Detailed Listings:</strong> Each hostel listing includes comprehensive details, photos, amenities, and user reviews to help you make an informed decision.</li>
        <li><strong>Safe and Secure:</strong> We prioritize your safety with verified hostels and secure payment options, ensuring a smooth experience from start to finish.</li>
        <li><strong>Affordable Prices:</strong> Whether you're a student or a professional, you'll find budget-friendly accommodation options without compromising on quality.</li>
        <li><strong>Multi-Platform Access:</strong> Access **Find A Hostel** on web, mobile, or tablet for seamless experience wherever you are.</li>
      </ul>

      <h2 className="subheading">About the Developer</h2>
      <p className="paragraph">
        I am <strong>Usama Madni</strong>, a passionate <strong>Software Developer</strong> with 1 year of experience in <strong>Web Development</strong>. I specialize in developing interactive, responsive, and user-friendly web applications using the latest technologies like React.js, Redux, and more. My goal is to provide simple yet powerful solutions to meet the needs of users, especially students and young professionals.
      </p>
      
      <h2 className="subheading">Skills and Technologies</h2>
      <ul className="skills-list">
        <li><strong>HTML:</strong> Building structured, semantic, and accessible webpages.</li>
        <li><strong>CSS:</strong> Styling web pages to create beautiful, responsive layouts with CSS and modern frameworks like Bootstrap.</li>
        <li><strong>JavaScript:</strong> Writing dynamic, interactive scripts to enhance web functionality.</li>
        <li><strong>Bootstrap:</strong> Building responsive, mobile-first websites quickly using Bootstrap components.</li>
        <li><strong>React:</strong> Developing scalable, maintainable web applications with React.js.</li>
        <li><strong>Redux:</strong> Managing complex state in React applications with Redux for seamless state management across components.</li>
      </ul>

    </div>
  );
};

export default About;
