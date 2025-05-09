import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div id="nav-bar">
            <div className="nav-bar-top">
                <h1>Lavishly Lavender</h1>
                <div className="nav-bar-buttons nav-bar-pages">
                    <Link to="/" className="route-btn">Home</Link>
                    <Link to="shop" className="route-btn">Shop</Link>
                    <Link to="cart" className="route-btn">Cart</Link>
                </div>
            </div>
            <div className="nav-bar-bottom nav-bar-buttons">
                <button>All</button>
                <button>Women's Clothing</button>
                <button>Men's Clothing</button>
                <button>Jewelry</button>
                <button>Electronics</button>
            </div>
        </div>
    );
}

export default NavBar;