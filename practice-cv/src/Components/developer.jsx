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
        <div className='education-container flex flex-column flex-center'>
          <h3>Education</h3>
          <h5 className='text-center'>.Net developer, IT-Högskolan 2022-2024</h5>
          <div> During two years I studied a work-preparing program to become a .Net developer.<br />
          The program included several courses and two periods of internship (LIA) where you actually learn 
          to use your skills in a company or organization.<br />
            Courses included:<br />
            <li>Programming in C#</li>
            <li>Database development and database administration (including frameworks and API)</li>
            <li>Web development, part one: Database, API and UI</li>
            <li>Web development, part two: HTML, CSS Javascript and React</li>
            <li>Agile development, including creating a project and project management.
            See our React school project <a href='https://globegrub.netlify.app/'>here.</a>
            </li>
            <li>Clean code</li>
            <li>LIA 1 (internship)</li>
            <li>Consultancy, customer understanding and reporting</li>
            <li>LIA 2 (internship)</li>
            <li>Examination project</li>
          </div>
          <p>I used my two turns of LIA internship in a web company called Web Express AB, from september to december 2023,
            and januari to may 2024.
          </p>
        </div>
      </div>
    </div>
  );
};