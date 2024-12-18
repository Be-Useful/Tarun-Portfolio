import { useState, useEffect } from 'react';
import './App.css'
import profpic from './assets/profpic.jpg'
import profile from './assets/profilepic.png';
import nprofile from './assets/nprofile.png';
import profilebg from './assets/profilebg.png';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';
import project3 from './assets/project3.png';
import project21 from './assets/project21.png';
import LinkedIn from './assets/LinkedIn.png';
import Github from './assets/github.png';
import Twitter from './assets/twitter.png';
import Kaggle from './assets/kaggle.png';

function App() {
  const [dynamicText, setDynamicText] = useState("");
  
  const texts = ["Web Developer", "Competitive Programmer", "Coding Enthusiast"];
  
  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let currentText = texts[index];

    const type = () => {
      if (charIndex < currentText.length) {
        setDynamicText(currentText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        // Stop typing and prepare to switch text
        setTimeout(() => {
          index = (index + 1) % texts.length; // Move to next text
          currentText = texts[index];
          charIndex = 0;
          setDynamicText(""); // Clear for new text
        }, 100); // Pause before switching text
      }
    };

    const intervalId = setInterval(type, 100); // Typing speed

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);



  return (
    <div class="max-w-4xl py-[100px] m-auto relative">
      <header class="fixed left-0 right-0 top-0 z-20" id="home">
        <div class="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div class="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 class="font-bold text-2xl">Portfolio</h1>
            </div>
            <div>
              <ul class="flex gap-4">
                <li>
                  <a href="#projects" class="text-gray-400 hover:text-white cursor-pointer">Projects</a>
                </li>
                <li>
                  <a href="#technologies" class="text-gray-400 hover:text-white cursor-pointer">Technologies</a>
                </li>
                <li>
                  <a href="#aboutme" class="text-gray-400 hover:text-white cursor-pointer">About me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* INTRO */}
        <section>
        <div class="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
          <div>
            <h2 class="font-bold text-4xl">Hello, I'm Tarun,</h2>
            <div>
            <h2 className="font-bold text-4xl mt-2 gradient-text">
                  {dynamicText || ""}
                  <span className="cursor">|</span>
                </h2>

            </div>
            <div>
            <p className="mt-4 text-gray-400">
              Aspiring to leverage strong development skills with a focus on collaboration, effective communication, and unwavering passion for innovation.
            </p>
            <a
              href="https://drive.google.com/file/d/1WUbku2rBzGQ_gGTRw7a5JLim8CvKcDMf/view?usp=sharing" // Replace with your Google Drive file link
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security feature for opening links in new tabs
              className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 inline-block text-center"
            >
              Download Resume
            </a>
            </div>
          </div>
          <div class="relative">
            <div class="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
              <img src={profile} class="relative z-10 w-[180px] m-auto sm:w-[300px]" />
            </div>
          </div>
        </div>
        </section>
        {/*projects section */}
        <section id="projects">
          <div class="container m-auto px-4 sm:py-12">
            <h2 class="text-2xl font-semibold">Projects</h2>

            <div class="flex flex-col sm:flex-row gap-10 mt-11">
              <div class="border border-gray-500 rounded-md p-5 flex-1">
                <img src={project21} className="w-full h-auto" />
                <h3 class="text-2xl font-semibold mt-8">Password Generator</h3>
                <p class="text-gray-400 text-sm mt-2">
                  Responsive, user-friendly UI password generator website with a real-time 3-level strength indicator along with a copy option using HTML, CSS, JavaScript, BootStrap
                </p>
                <div class="flex mt-12 gap-2">
                  <a
                    href="https://be-useful.github.io/Password_Generator/" // Replace with your live preview link
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer"
                    class="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 inline-block text-center"
                  >
                    Live preview
                  </a>
                  <a
                    href="https://github.com/Be-Useful/Password_Generator" // Replace with your GitHub project link
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer"
                    class="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 inline-block text-center"
                  >
                    Checkout GitHub
                  </a>
                </div>
              </div>

              <div class="border border-gray-500 rounded-md p-5 flex-1">
                <img src={project1} className="w-full h-auto" />
                <h3 class="text-2xl font-semibold mt-8">Web Based Library Management</h3>
                <p class="text-gray-400 text-sm mt-2">
                  Full Stack Website for managing library on the website with ease using .NET Framework, C#, MS SQL Server, Data Binding
                </p>
                <div class="flex gap-2 mt-12">
                  <a
                    href="https://your-live-preview-link.com" // Replace with your live preview link
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 inline-block text-center"
                  >
                    Live preview
                  </a>
                  <a
                    href="https://github.com/Be-Useful/ProjectLibrary" // Replace with your GitHub project link
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 inline-block text-center"
                  >
                    Checkout GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Technologies */}
        <section class="py-10" id="technologies">
              <div class="container m-auto px-4">
                  <h2 class="text-2xl font-semibold">Technologies</h2>
                  <div class="mt-14">
                      <div>
                          <div class="flex justify-between items-center">
                              <h2 class="font-semibold">C/C++, DSA</h2>
                              <p class="text-gray-500">Advanced</p>
                          </div>
                          <span class="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
                      </div>
                      <div class="mt-8">
                          <div class="flex justify-between items-center">
                              <h2 class="font-semibold">HTML, CSS, Bootstrap</h2>
                              <p class="text-gray-500">Advanced</p>
                          </div>
                          <span class="w-[95%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
                      </div>
                      <div class="mt-8">
                          <div class="flex justify-between items-center">
                              <h2 class="font-semibold">JavaScript, React</h2>
                              <p class="text-gray-500">Advanced</p>
                          </div>
                          <span class="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
                      </div>
                      <div class="mt-8">
                          <div class="flex justify-between items-center">
                              <h2 class="font-semibold">Node js, MongoDB, SQL </h2>
                              <p class="text-gray-500">Intermediate</p>
                          </div>
                          <span class="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
                      </div>
                      <div class="mt-8">
                          <div class="flex justify-between items-center">
                              <h2 class="font-semibold">.Net Framework, C#, MS SQL Server</h2>
                              <p class="text-gray-500">Intermediate</p>
                          </div>
                          <span class="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
                      </div>
                      <div class="mt-8">
                          <div class="flex justify-between items-center">
                              <h2 class="font-semibold">Java, Python</h2>
                              <p class="text-gray-500">Beginner</p>
                          </div>
                          <span class="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
                      </div>
                      <div class="mt-8">
                          <div class="flex justify-between items-center">
                              <h2 class="font-semibold">OOP, DBMS</h2>
                              <p class="text-gray-500">Advanced</p>
                          </div>
                          <span class="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
                      </div>
                  </div>
              </div>
        </section>

        {/*Additional Skill*/}
        <section>
            <div class="container m-auto px-4 py-14">
              <h2 class="text-2xl font-semibold">Additional technologies and skills</h2>
              <div class="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
                <div>
                  <p class="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Git/Github
                  </p>
                </div>
                <div>
                  <p class="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Linux
                  </p>
                </div>
                <div>
                  <p class="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    MATLAB
                  </p>
                </div>
                <div>
                  <p class="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    LaTeX
                  </p>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
                <div>
                  <p class="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Quick learning
                  </p>
                </div>
                <div>
                  <p class="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Figma/Canva
                    
                  </p>
                </div>
                <div>
                  <p class="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Communication
                  </p>
                </div>
              </div>
            </div>
        </section>
          
        {/*About me */}
        <section class="py-8" id="aboutme">
        <div class="container m-auto px-4">
          <h2 class="text-2xl font-semibold">About me</h2>
          <div class="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
            
            <div class="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
              <h3 class="absolute left-0 text-lg font-semibold">2021</h3>
              <p>
                Secured admission to the Indian Institute of Information Technology, Dharwad (IIIT Dharwad) through JEE and am currently in the final year of my B.Tech in Electronics and Communication Engineering at IIIT Dharwad.
              </p>
            </div>
            <div class="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
              <h3 class="absolute left-0 text-lg font-semibold">2022</h3>
              <p>
                Began learning programming and logic-building using C and C++. Progressed into competitive programming and problem-solving, participating in various contests on platforms like CodeChef and Codeforces.              </p>
            </div>
            <div class="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
              <h3 class="absolute left-0 text-lg font-semibold">2022</h3>
              <p>
                Developed a real-world project called CPR Assistance by leveraging logic-building and programming skills, successfully transforming a real-world idea into functional code.              </p>
            </div>
            
            <div class="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
              <h3 class="absolute left-0 text-lg font-semibold">2023</h3>
              <p>
               Dived into web development, completed online courses, and built several projects, which can be explored by clicking projects.              </p>
            </div>
            
            <div class="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
              <h3 class="absolute left-0 text-lg font-semibold">2024</h3>
              <p>
                Worked as a Web Developer Intern at the National Informatics Centre (NIC), gaining hands-on experience in building and managing web applications.              </p>
            </div>

            <div class="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
              <h3 class="absolute left-0 text-lg font-semibold">2024</h3>
              <p>
                Enhanced DSA skills on LeetCode and performed well in competitive programming contests, achieving a 3-star rating on both CodeChef and GFG contests.              </p>
            </div>
            
          </div>
        </div>
        </section>
      </main>

<footer class=" text-white py-12 mt-16">
  <div class="container m-auto flex justify-between items-center px-4">
    <div class="text-center sm:text-left">
      <p class="text-sm text-gray-400">Copyright © 2024 Tarun</p>
    </div>
    <div>
      <ul class="flex justify-center sm:justify-end gap-6">
        <li>
          <a href="#" class="transition-transform transform hover:scale-110">
            <img src={LinkedIn} alt="LinkedIn Icon" class="h-8 w-8 hover:text-blue-500"/>
          </a>
        </li>
        <li>
          <a href="#" class="transition-transform transform hover:scale-110">
            <img src={Twitter} alt="Twitter Icon" class="h-8 w-8 hover:text-blue-400"/>
          </a>
        </li>
        <li>
          <a href="#" class="transition-transform transform hover:scale-110">
            <img src={Github} alt="Github Icon" class="h-8 w-8 hover:text-gray-300"/>
          </a>
        </li>
        <li>
          <a href="#" class="transition-transform transform hover:scale-110">
            <img src={Kaggle} alt="Kaggle Icon" class="h-8 w-8 hover:text-orange-500"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>



    </div>
  )
}

export default App
