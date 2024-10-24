import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div className="main">
<nav>
    <div class="navbar">
    <a href=""><img src="data:image/jpeg;base64,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" alt="" /></a>
         <form class="search-form" action="#" method="get">
            <input type="text" placeholder="Search..." aria-label="Search"/>
            <button type="submit">Search</button>
        </form>
        <ul class="navbar-links">
       
            <li class="dropdown">
                <a href="#">Invest</a>
                <ul class="dropdown-menu">
                    <li><a href="#">Mutual Fund</a></li>
                    <li><a href="#">All Mutual fund</a></li>
                    <li><a href="#">Equity fund</a></li>
                    <li><a href="#">Index fund</a></li>
                    <li><a href="#">Debt fund</a></li>
                    <li><a href="#">Hybrid fund</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#">Features</a>
                <ul class="dropdown-menu">
                    <li><a href="#">Calculator</a></li>
                    <li><a href="#">Brockrage Calculator</a></li>
                    <li><a href="#">Swp Calculator</a></li>
                    <li><a href="#">Returns Calculator</a></li>
                    <li><a href="#">Mutual fund calculator</a></li>
                    <li><a href="#">Lumpsump Calculator</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#">Market</a>
                <ul class="dropdown-menu">
                    <li><a href="#">NIFTY FIFTY</a></li>
                    <li><a href="#">BANK NIFTY</a></li>
                    <li><a href="#">Market today</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#">Pricing Disclosure</a>
                <ul class="dropdown-menu">
                    <li><a href="#">Complaint Status</a></li>
                    <li><a href="#">Sevi investor</a></li>
                    <li><a href="#">More</a></li>
                </ul>
            </li>
            <li><a href="#login" class="login-button">Log In</a></li>
            <li><a href="#open-demat" class="demat-button">Open Demat Account</a></li>
            <li class="dropdown">
                <a href="#"><img src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000" alt=" " /></a>
                <ul class="dropdown-menu">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">User Profile</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Recent Transaction</a></li>
                    <li><a href="#">Sip Overview</a></li>
                    <li><a href="#">Investment Performance</a></li>
                </ul>
            </li>
        </ul>
       
    </div>
</nav>

<div class="container">
        <div class="card">
            <img src="https://media.licdn.com/dms/image/D5612AQG-rGEy6MONWA/article-cover_image-shrink_720_1280/0/1714624687551?e=2147483647&v=beta&t=voQTUjAszVzRP0H9DumZ2eA42G4eSwwXb-A363wLRI0" alt="Image 1"/>
            <h3>Mutual Fund 1</h3>
            <p>Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management, making investing accessible for individuals. 1.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="card">
            <img src="https://media.licdn.com/dms/image/D5612AQG-rGEy6MONWA/article-cover_image-shrink_720_1280/0/1714624687551?e=2147483647&v=beta&t=voQTUjAszVzRP0H9DumZ2eA42G4eSwwXb-A363wLRI0" alt="Image 2"/>
            <h3>Mutual fund 2</h3>
            <p>Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management, making investing accessible for individuals. 2.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="card">
            <img src="https://media.licdn.com/dms/image/D5612AQG-rGEy6MONWA/article-cover_image-shrink_720_1280/0/1714624687551?e=2147483647&v=beta&t=voQTUjAszVzRP0H9DumZ2eA42G4eSwwXb-A363wLRI0" alt="Image 3"/>
            <h3>Mutual Fund 3</h3>
            <p>Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management, making investing accessible for individuals. 3.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="card2">
            <img src="https://media.licdn.com/dms/image/D5612AQG-rGEy6MONWA/article-cover_image-shrink_720_1280/0/1714624687551?e=2147483647&v=beta&t=voQTUjAszVzRP0H9DumZ2eA42G4eSwwXb-A363wLRI0" alt="Image 4"/>
            <h3>Mutual Fund 4</h3>
            <p>Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management, making investing accessible for individuals. 4.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="card2">
            <img src="https://media.licdn.com/dms/image/D5612AQG-rGEy6MONWA/article-cover_image-shrink_720_1280/0/1714624687551?e=2147483647&v=beta&t=voQTUjAszVzRP0H9DumZ2eA42G4eSwwXb-A363wLRI0" alt="Image 5"/>
            <h3>Mutual Fund 5</h3>
            <p>Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management, making investing accessible for individuals. 5.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="card2">
            <img src="https://media.licdn.com/dms/image/D5612AQG-rGEy6MONWA/article-cover_image-shrink_720_1280/0/1714624687551?e=2147483647&v=beta&t=voQTUjAszVzRP0H9DumZ2eA42G4eSwwXb-A363wLRI0" alt="Image 6"/>
            <h3>Mutual Fund 6</h3>
            <p>Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management, making investing accessible for individuals. 6.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="card3">
            <img src="https://media.licdn.com/dms/image/D5612AQG-rGEy6MONWA/article-cover_image-shrink_720_1280/0/1714624687551?e=2147483647&v=beta&t=voQTUjAszVzRP0H9DumZ2eA42G4eSwwXb-A363wLRI0" alt="Image 7"/>
            <h3>Mutual fund 7</h3>
            <p>Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management, making investing accessible for individuals. 7.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="card3">
            <img src="https://media.licdn.com/dms/image/D5612AQG-rGEy6MONWA/article-cover_image-shrink_720_1280/0/1714624687551?e=2147483647&v=beta&t=voQTUjAszVzRP0H9DumZ2eA42G4eSwwXb-A363wLRI0" alt="Image 8"/>
            <h3>Mutual Fund 8</h3>
            <p>Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management, making investing accessible for individuals. 8.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="card3">
            <img src="https://media.licdn.com/dms/image/D5612AQG-rGEy6MONWA/article-cover_image-shrink_720_1280/0/1714624687551?e=2147483647&v=beta&t=voQTUjAszVzRP0H9DumZ2eA42G4eSwwXb-A363wLRI0" alt="Image 9"/>
            <h3>Mutual fund 9</h3>
            <p>Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management, making investing accessible for individuals. 9.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="card3">
            <img src="https://media.licdn.com/dms/image/D5612AQG-rGEy6MONWA/article-cover_image-shrink_720_1280/0/1714624687551?e=2147483647&v=beta&t=voQTUjAszVzRP0H9DumZ2eA42G4eSwwXb-A363wLRI0" alt="Image 7"/>
            <h3>Mutual fund 10</h3>
            <p>Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management, making investing accessible for individuals. 7.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="card3">
            <img src="https://media.licdn.com/dms/image/D5612AQG-rGEy6MONWA/article-cover_image-shrink_720_1280/0/1714624687551?e=2147483647&v=beta&t=voQTUjAszVzRP0H9DumZ2eA42G4eSwwXb-A363wLRI0" alt="Image 8"/>
            <h3>Mutual Fund 11</h3>
            <p>Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management, making investing accessible for individuals. 8.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="card3">
            <img src="https://media.licdn.com/dms/image/D5612AQG-rGEy6MONWA/article-cover_image-shrink_720_1280/0/1714624687551?e=2147483647&v=beta&t=voQTUjAszVzRP0H9DumZ2eA42G4eSwwXb-A363wLRI0" alt="Image 9"/>
            <h3>Mutual fund 12</h3>
            <p>Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management, making investing accessible for individuals. 9.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
    </div>
    
<footer>
<div class="footer-content">
        <p>&copy; 2024 all rights reserved for world market view</p>
        <div class="social-media">
            
        </div>
        <div className="card5">
        <a href=" https://www.facebook.com/profile.php?id=61566368519744" target="_blank" aria-label="Facebook">
                <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt=" "/>
            </a>
            <a href="https://x.com/WorldMarket06" target="_blank" aria-label="Twitter">
                <img src="https://img.icons8.com/?size=100&id=01GWmP9aUoPj&format=png&color=000000" alt=" "/>
            </a>
            <a href="https://www.instagram.com/worldmarketview01/?hl=en" target="_blank" aria-label="Instagram">
                <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt=" "/>
            </a>
            <a href="https://www.linkedin.com/company/world-market-view/" target="_blank" aria-label="LinkedIn">
                <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt=" "/>
            </a>
            <a href="https://web.telegram.org/a/#-1002317938719" target="_blank" aria-label="Telegram">
                <img src="https://img.icons8.com/?size=100&id=oWiuH0jFiU0R&format=png&color=000000" alt=" "/>
            </a>
            <a href="https://www.tumblr.com/blog/worldmarketview" target="_blank" aria-label="Tumbler">
                <img src="https://img.icons8.com/?size=100&id=13976&format=png&color=000000" alt=" "/>
            </a>
        </div>
        <ul>
<div className="card1">
    <li> <a href="https://www.indmoney.com"> About Us</a></li>
    <li> <a href="https://maps.app.goo.gl/au3YCNGzzpR2D8cU6"> Site map</a></li>
    <li> <a href="https://www.indmoney.com/calculators/sip-calculator"> Calculators</a></li>
</div>
</ul>
<ul>
<div className="card1">
    <li> <a href="https://www.indmoney.com/blogs"> Blog</a></li>
    <li> <a href="https://www.indmoney.com/mutual-funds"> Mutual fund</a></li>
    <li> <a href="https://www.indmoney.com/privacy-policy"> Privacy policy</a></li>
</div>
</ul>
<ul>
<div className="card1">
    <li> <a href="https://www.indmoney.com/terms-of-services"> Terms and Conditions</a></li>
    <li> <a href="https://www.indmoney.com/customer-service"> Customer Services</a></li>
    <li> <a href=""> Contact Us</a></li>
</div>

</ul>

    </div>
</footer>
</div>

    </>
  )
}

export default App
