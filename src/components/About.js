import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center" >
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hey there! My name is Daniel Currier
                        <br className="hidden lg:inline-block" /> I like full stack development.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Hi there, My name is Daniel Currier, and welcome to the rebuild of my portfolio website! As a fledgling
                        full-stack student, my goal is to use this website as a testing ground and library for all sorts of computer science projects. A
                        little more about me: I am an Eagle Scout and recent graduate from Ramapo College of New Jersey with a degree
                        in Communications-Writing. After trying my hand in the business, I decided that it was not for me, and began
                        my journey in computer programming. My ultimate goal by the end is to become a game designer, and be the
                        most capable person for the job! Hobbies include PC gaming, tabletop gaming, hiking, bouldering,literature, martial arts
                        and medieval swordsmanship.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"> Let's Work Together!
                        </a>
                        <a href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Here are some of my best works.
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    )
}