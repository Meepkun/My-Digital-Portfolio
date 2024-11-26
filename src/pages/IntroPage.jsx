import React from 'react';
import profile from "../assets/Meep.jpg";

function IntroPage() {
  return (
    <>
    <div className="intro-page">
    <img src={profile} class="rounded-circle align-items-start d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="200" height="200" loading="lazy" />         
      <h1>Welcome to My Digital Portfolio</h1>
      <section className="personal-intro">
                
        <h2>About Me</h2>
        <p>Hi there! I'm John Michael Bustero</p>
        <p>I'm a Computer Science Student who blends a passion for arts with an appreciation for technological advancements. Driven by creativity and innovation, they thrive on exploring the intersection where imagination meets progress.</p>
      </section>
      <section className="course-overview">
        <h2>Course Overview</h2>
        <p>The Computer Graphics and Visual Computing course has been an intensive and rewarding experience. It covered a wide range of topics including:</p>
        <ul>
          <li>Fundamentals of Computer Graphics</li>
          <li>3D Modeling and Geometry</li>
          <li>Animation and Simulation</li>
          <li>Real-Time Rendering Techniques</li>
          <li>Human-Computer Interaction (HCI) and Visualization</li>
          <li>Applications in Visual Computing</li>
        </ul>
      </section>
      <section className="contents">
        <h2>Portfolio Contents</h2>
        <ul>
          <li>Introduction - An overview of myself and this course</li>
          <li>Output - A collection of my projects and assignments</li>
          <li>Summary - Reflection on my progress and future goals</li>
        </ul>
      </section>
    </div>
    </>
  );
}

export default IntroPage;

