import ShopCard from "./ShopCard";

function Shop() {
    return (
        <div className="content-area">
            <h1>Shop!</h1>
            <div id="shop-page">
                <div id="card-grid-container">
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                </div>
            </div>
        </div>
    );
}

export default Shop;