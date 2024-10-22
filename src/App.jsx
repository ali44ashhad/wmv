import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<nav>
    <div class="navbar">
        <a class="navbar-brand" href="wmv">world market view</a>
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
            <li class="dropdown">
                <a href="#">pricing disclousure</a>
                <ul class="dropdown-menu">
                    <li><a href="#">complaint status</a></li>
                    <li><a href="#">sevi investor</a></li>
                    <li><a href="#">more</a></li>
                </ul>
            </li>
        </ul>
        <form class="search-form" action="#" method="get">
            <input type="text" placeholder="Search..." aria-label="Search"/>
            <button type="submit">Search</button>
        </form>
    </div>
</nav>

<div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_8U6-f_tDSw6t2z6AlyNfrDxSAQE8cPRMQ&s" alt="Card Image" class="card-image"/>
    <div class="card-content">
        <h2 class="card-title">Card Title</h2>
        <p class="card-description">This is a description of the card. It provides brief information about the content.</p>
        <a href="#" class="card-button">Read More</a>
    </div>
</div>
<div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_8U6-f_tDSw6t2z6AlyNfrDxSAQE8cPRMQ&s" alt="Card Image" class="card-image"/>
    <div class="card-content">
        <h2 class="card-title">Card Title</h2>
        <p class="card-description">This is a description of the card. It provides brief information about the content.</p>
        <a href="#" class="card-button">Read More</a>
    </div>
</div>
<div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_8U6-f_tDSw6t2z6AlyNfrDxSAQE8cPRMQ&s" alt="Card Image" class="card-image"/>
    <div class="card-content">
        <h2 class="card-title">Card Title</h2>
        <p class="card-description">This is a description of the card. It provides brief information about the content.</p>
        <a href="#" class="card-button">Read More</a>
    </div>
</div>

<footer>
    <div class="footer-content">
        <p>&copy; 2024 all rights reserved for world market view</p>
        <ul class="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Site map</a></li>
            <li><a href="#">Calculators</a></li>
            <li><a href="#">Mutual fund</a></li>
            <li><a href="#">Customer services</a></li>
            <li><a href="#">Carrier</a></li>
        </ul>
    </div>
</footer>

    </>
  )
}

export default App
