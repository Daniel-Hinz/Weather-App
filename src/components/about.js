import React from "react";

export const About = () => {
  return (
    <>
      <article className="about-container">
        <h1 className="about-header">About Us</h1>
        <ul>
          <li>
            This is a web application created by students: Liam Merritt, Spencer
            Murphy, Daniel Hinz, and Terra Kincy. This was created as a final
            project for the Modern Web App Development course during the Spring
            2022 semester at Kent State University. The app was created in order
            to showcase proficiency in intermediate React concepts.
          </li>
          <li>
            We created this app in order to provide our users with the ability
            to search the OpenWeatherMap API by typing in a location of their
            choosing into a search bar similar to the function of Google. We
            wanted to make our web application as simple as possible for users
            as we know accessibility is a challenge. When a user enters their
            location and presses the submit button they are then taken to our
            forecast page. On the forecast page, a user is given a detailed
            daily forecast along with an overview of the weekly forecast
            underneath.
          </li>
        </ul>
        <h1 className="about-header">Instructions for Users & Developers</h1>
        <ul>
          <li>
            <p>Users</p>
            <br />
            Type your desired location into the search bar then press enter or
            click the submit button to see the weather forecast!
          </li>
          <li>
            <p>Developers</p>
            <br />
            In order to clone our project and test it or build around it
            yourself run the following commands on terminal or shell:
            <br />
            <br />
            git clone https://github.com/Daniel-Hinz/Weather-App.git (Links to
            an external site.)
            <br />
            npm install
            <br />
            npm start
          </li>
        </ul>
        <br />
        <br />
      </article>
    </>
  );
};
