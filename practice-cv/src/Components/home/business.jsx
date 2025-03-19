import '../../CSS/Business.css';
import BusinessPic from '../../assets/images/Business-guy.jpg';

export default function Business() {

    return (
        <div className="business-container flex flex-column flex-center">
            <h2 id='business'>Business and sales</h2>
            <div className='business-profile flex flex-center flex-column'>
                <img src={BusinessPic} alt="Business picture" className="business-img" />
                <div className='business-text flex flex-column'>
                    <p>Ever since I was a toddler I have been conducting business.
                        It started with countless flea markets and local sales with my mother, introducing bargaining and being a salesman from a young age.
                        To earn money for the weekend candy as a young boy, I would go out and sell old toys on the street with my friends.
                        I later used and refined my skills on vacations, bargaining for the best prices from taxi rides to souvenirs. In my late teens,
                        starting out as a telemarketer, I had the opportunity to apply and sharpen these skills professionally. Additionally I learned the process of selling over the phone
                        and connecting with customers.
                        More recently, I have started to see the true power of online marketing and sales. I gathered information
                        from various sources and in 2024 I started my first e-commerce business selling products online.
                    </p>
                </div>
            </div>
            <div className='education-container flex flex-column flex-center'>
                <h3>Education</h3>
                <h5 className='text-center'>Economics and social science program, Tyresö gymnasium 2007-2010</h5>
                <p> A part of the program was Ung Företagsamhet (UF), which is running a business for a year as adolescents. In this, my role was head of sales.
                    We got awarded with a teachers choice award in our school and a top 3 award in the Stockholm region for the annual report.
                </p>
            </div>
            <div className='bank-container flex flex-column flex-center'>
            <h3>Bank and finance</h3>
            <p>My first bank job was a summer job in 2009 at Swedbank's then current investment bank called Swedbank Markets.
                I returned there in winter 2009 for an internship during the gymnasium program.
                After graduating and working a couple of years in telemarketing, I started a new employment in Marginalen Bank in 2012. 
                There, I worked in customer service until Januari 2015. I was then promoted to the Products department, 
                working as a coordinator with mainly credit card products.
                There I had many responsibilities, ranging from campaign follow-up and execution to assisting on projects and supporting partners in different ways. 
                Educating and distributing information to my fellow colleagues from the leaderboard was also part of my responsibilities.
                </p>
            </div>
            <p>I started studying in 2016 while also moving to Spain, but I returned to Sweden and Marginalen Bank in 2017 as a part time employee until 2021 while studying. 
                The first two summers I filled in as the customer complaints representative dealing with cases that are not resolved by first instance.
                After my studies in 2021 I started working at AddSecure with contracts and billing, also serving as 2nd line support.
                In the fall of 2022, I started pursuing a new career as a software developer.
            </p>

        </div>

    )
};
