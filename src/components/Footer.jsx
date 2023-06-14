import "../styles/footer.css"
import navData from "../local-json/data.json"
const Footer = () =>{
    return(
        <footer>
      <div class="otherLinks">
      <div class="aboutUs">
        <div className="company-data">
        <img class="footer-logo" src={navData.companyInfo[0].CompanyLogo} />
        <p>{navData.companyInfo[0].ComanyDescribtion}</p>
        </div>
        <form action="">
            <input className="search-bar" type="text" placeholder="Enter email" />
            <button>Subscribe</button>
        </form>
      </div>
      <div class="sectionOne">
      <div class="community">
        <h2>Company</h2>
        <a href="">About us</a>
        <a href="">Terms of use</a>
        <a href="">Privacy Policy</a>
        <a href="">Community Rules</a>
        <a href="">Disclaimer </a>
        <a href="">Methodology</a>
      </div>
      <div class="community">
        <h2>Socials</h2>
        <a href="">Socials</a>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
        <a href="">Youtube</a>
        <a href="">Telegram </a>
      </div>
    </div>
      </div>
      <span class="copyright">© 2021 Copyright By XYZ Services Pvt. Ltd.</span>
    </footer>
    )
}

export default Footer