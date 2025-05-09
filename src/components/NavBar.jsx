function NavBar() {
    return (
        <div id="nav-bar">
            <div className="nav-bar-top">
                <h1>Store Name</h1>
                <div className="nav-bar-buttons nav-bar-pages">
                    <button>Home</button>
                    <button>Shop</button>
                    <button>Cart</button>
                </div>
            </div>
            <div className="nav-bar-bottom nav-bar-buttons">
                <button>Test Button</button>
                <button>Another Button</button>
                <button>A Third Button</button>
                <button>A Different Button</button>
            </div>
        </div>
    );
}

export default NavBar;