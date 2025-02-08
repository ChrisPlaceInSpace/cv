import pic from '../assets/images/IMG_webban_klippt.jpg';
import '../CSS/Developer.css';

export default function Developer() {
  
    return (
    <div className='developer-container flex flex-column color-primary'>
      <h2 id='developer'>Developer</h2>
        <img src={pic} alt="Developer" className="developer-img"/>
        <p></p>
        <h3>Education</h3>
        <p>.Net developer, IT-Högskolan 2022-2024</p>
        <p> During two years I studied a work preparing program to become a .Net developer.
          Courses included:<br/>
          <li>Introduction to C#</li>
          <li>Database and database administration</li>
          <li>Web development, part one<p>Database, API and UI</p></li>
          <li>Agile development, including creating a project and project management</li>
          <li>Clean code</li>
          <li>LIA 1 (internship)</li>
          <li>Consulting, customer understanding and reporting</li>
          <li>LIA 2 (internship)</li>
          <li>Examination project</li>
        </p>
    </div>
  );
};