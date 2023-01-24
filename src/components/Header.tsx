const Header = () =>{
return(
<div className="centered-container">
<div className="text-white bg-black shadow-shadow-md">
      <nav className="flex items-center justify-between">
        {/* <div className="pl-40">
          <img
            src="https://images-workbench.99static.com/Qm4tvwqkIi50v1HYEvZNjeipmNk=/99designs-contests-attachments/45/45898/attachment_45898765"
            width="100"
            height="150"></img> </div> */}
        <ul className="submenu flex  justify-center gap-x-10 text-2xl font-normal">
            {/* <li><a href="https://communityfibre.co.uk/">Broadband</a></li>
            <li><a href="https://communityfibre.co.uk/tv">TV</a></li>
            <li><a href="https://communityfibre.co.uk/landline">Calls</a></li>
            <li><a href="https://communityfibre.co.uk/deals">Deals</a></li>
            <li><a href="https://communityfibre.co.uk/why-choose-community-fibre">Why choose us</a></li> */}
        </ul>
       
        <div className="mr-80">
          {/* <a href="https://communityfibre.co.uk/#postcode-search-modal" >Get Started</a> */}
        </div>
      </nav>
    </div>
    </div>
    );
}

export default Header;