import React from "react";

export const About = () => {
  return (
    <>
      <article>
        <ul>
          <br />
          <li
            className="shadow-xl drop-shadow-xl p-8 bg-white rounded 
                       dark:bg-gradient-to-b dark:from-slate-900 leading-10 
                       dark:to-slate-700 dark:border dark:text-white text-2xl"
          >
            This is a web application created by students: Liam Merritt, Spencer
            Murphy, Daniel Hinz, and Terra Kincy. This was created as a final
            project for the Modern Web App Development course during the Spring
            2022 semester at Kent State University. The app was created in order
            to showcase proficiency in React concepts.
          </li>
          <br />
          <li
            className="shadow-xl drop-shadow-xl p-8 bg-white rounded 
                       dark:bg-gradient-to-b dark:from-slate-900 leading-10 
                       dark:to-slate-700 dark:border dark:text-white text-2xl"
          >
            We created this app in order to provide our users with the ability
            to search the OpenWeatherMap API by typing in a location of their
            choosing into a search bar similar to the function of Google. We
            wanted to make our web application as simple as possible for users
            as we know accessibility is a challenge. When a user enters their
            location and presses the submit button they are then taken to our
            forecast page. On the forecast page, a user is given a detailed
            daily forecast along with an overview of the weekly forecast
            underneath. The technologies we used include: React, Tailwind CSS,
            OpenWeatherMap API, Github, and API.
          </li>
        </ul>
        <br />
        <section
          className="shadow-xl drop-shadow-xl p-8 bg-white rounded 
                     dark:bg-gradient-to-b dark:from-slate-900 leading-8 
                     dark:to-slate-700 dark:border dark:text-white text-xl"
        >
          <h1 className="text-3xl">Instructions for Users & Developers</h1>
          <br />
          <ul>
            <li className="rounded dark:border p-5">
              <p className="text-2xl">Users:</p>
              <p className="p-6">
                Type your desired location into the search bar then press enter
                or click the submit button to see the weather forecast!
              </p>
            </li>
            <br />
            <li className="rounded dark:border p-5">
              <p className="text-2xl">Developers:</p>
              <p className="p-6">
                In order to clone our project and test it or build around it
                yourself run the following commands on terminal or shell:
              </p>
              <ul className="pl-12 space-y-1">
                <li>
                  git clone https://github.com/Daniel-Hinz/Weather-App.git
                </li>
                <li>npm install</li>
                <li>npm start</li>
              </ul>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};
