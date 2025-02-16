import pic from '../assets/images/IMG_webban_klippt.jpg';
import '../CSS/Developer.css';

export default function Developer() {

  return (
    <div className='developer-container flex flex-column flex-center color-primary'>
      <h2 id='developer'>Developer</h2>
      <div className='developer-content flex flex-center'>
        <img src={pic} alt="Developer" className="developer-img" />
        <p>I started my journey as a developer in 2021 by taking a course in C#.<br />
          I then continued my studies at IT-Högskolan to become a .Net developer in 2022.<br />
        </p>
        <div className='education-container flex flex-column'>
          <h3>Education</h3>
          <h5>.Net developer, IT-Högskolan 2022-2024</h5>
          <div> During two years I studied a work-preparing program to become a .Net developer.<br />
            Courses included:<br />
            <li>Introduction to C#</li>
            <li>Database and database administration</li>
            <li>Web development, part one<p>Database, API and UI</p></li>
            <li>Agile development, including creating a project and project management</li>
            <li>Clean code</li>
            <li>LIA 1 (internship)</li>
            <li>Consulting, customer understanding and reporting</li>
            <li>LIA 2 (internship)</li>
            <li>Examination project</li>
          </div>
        </div>
      </div>
    </div>
  );
};