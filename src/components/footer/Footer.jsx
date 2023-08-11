import React from "react";


function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <p>Copyright &copy; {year}</p>
        </footer>
    )
}

export default Footer