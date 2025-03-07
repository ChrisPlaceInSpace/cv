import pic from '../assets/images/IMG_webban_klippt.jpg';
import '../CSS/Developer.css';

export default function Developer() {

  return (
    <div className='developer-container flex flex-column flex-center color-primary'>
      <h2 id='developer'>Developer</h2>
      <div className='developer-content flex flex-center flex-column'>
        <img src={pic} alt="Developer" className="developer-img" />
        <p>I started my journey as a developer in 2021 by taking a course in C#.<br />
          In 2022 I then started a higher vocational education program in IT-Högskolan to become a .Net developer.<br />
        </p>
        </div>
        <div className='education-container flex flex-column flex-center'>
          <h3>Education</h3>
          <h5 className='text-center'>.Net developer, IT-Högskolan 2022-2024</h5>
          <div className='education-text flex flex-column'>
            <p>During two years I studied a work-preparing program to become a .Net developer.<br />
          The program included several courses and two periods of internship (LIA), where you actually learn 
          to use your skills in the worklife a company or organization.</p><br />
            Courses included:
            <li>Programming in C#</li>
            <li>Database development and database administration (including frameworks and API).</li>
            <li>Web development, part one: Database, API and UI.<br/>
              <p>An advancement of the previous course, where we learned to build a fullstack application using C#, ASP.NET and Entity Framework code first,
              with a relational SQL database, an API and a web interface with Razor pages.</p>
            </li>
            <li>Web development, part two: HTML, CSS Javascript and React.</li>
            <li>Agile development (including project). 
              <p>Using SCRUM method, including sprints, standups and retrospective, for approximately 10 weeks we ran a project creating a React frontend recipe app called GlobeGrub. 
              The team consisted of six developers and two project leaders acting as project owner and SCRUM master.
            To see our school project result, click: <a href='https://globegrub.netlify.app/'>here.</a>
            </p>
            </li>
            <li>Clean code.</li>
            <li>LIA 1 (internship).</li>
            <li>Consultancy, customer understanding and reporting.</li>
            <li>LIA 2 (internship).</li>
            <li>Examination project.</li>
          </div>
          <p>I used my two turns of LIA internship in a web company called Web Express AB, between september-december 2023
            and januari-may 2024.
            During that period I worked exclusively with developing a project management system for the company,
            called Project Manager 2.0 (a new version of an existing system).
            The system was built with C# in the backend using ASP.NET Core and .Net 6, and included a relational SQL database and a user interface build with HTML, CSS and Javascript.
            In other words, I got to work fullstack with the entire development process.
          </p>
        </div>      
    </div>
  );
};