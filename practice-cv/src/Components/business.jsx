import '../CSS/business.css';
import BusinessPic from '../assets/images/Business-guy.jpg';

export default function Business() {

    return (
        <div className="business-container flex flex-column flex-center">
            <h2 id='business'>Business and sales</h2>
            <div className='business-profile flex flex-center'>
                <img src={BusinessPic} alt="Business picture" className="business-img" />
                <div className='business-text flex flex-column'>
                    <p>Ever since I was a toddler I have been conducting business.
                        It started with countless flee markets and other local sales with my mom, introducing bargaining and being a salesman from a young age.
                        To earn money for the weekend candy I was sometimes selling old toys on the street with a friend.
                        I later used those skills on abroad trips for bargaining prices on things, from souvenirs to cab rides. When getting
                        a job within telemarketing I could apply some of the same skills and quickly learned the process of selling over the phone.
                    </p>
                </div>
            </div>
            <div className='education-container flex flex-column flex-center'>
                <h3>Education</h3>
                <h5>Economics and social science program, Tyresö gymnasium 2007-2010</h5>
                <p>
                    <br />A part of the program was UF, which is running a business for a year. I was head of sales.
                    We got awarded with a teachers choice price and a top 3 price in the Stockholm region for the annual report.
                </p>
            </div>
            <h3>Bank and finance</h3>
            <p>My first bank job was a summer job in 2009 at Swedbank's then current investment bank called Swedbank Markets.
                I returned there in winter 2009 for an internship during gymnasium.
                When searching jobs in 2012 I ended up in Marginalen Bank where I worked in customer service until
                early 2015 when I got promoted to the Products department, working with credit cards as a coordinator.
                There I was in charge of campain offers and executions, also assisting in projects, partners, backoffice and customer service,
                making sure deals went down properly.</p>
            <p>I started studying in 2016 but return to Marginalen Bank as a part time employee in 2017 until 2021. The first two summers
                I filled in as the customer complaints representative dealing with cases that is not resolved by first instances.
                After my studies in 2021 I started working for AddSecure with contracts and billing, also serving as 2nd line support,
                until fall 2022 when I started pursuing a new career as a software developer.
            </p>

        </div>

    )
};
