import ShopCard from "./ShopCard";

function HomePage() {

    // This is all just for testing the navBar component
    // Please delete this
    let myArr = [];

    for (let i = 0; i < 200; i++) {
        myArr[i] = i;
    }

    return (
        <div className="content-area">
            <div id="home-page">
                {/* {myArr.map((i) => <p>{i}</p>)} */}
                <ShopCard />
            </div>
        </div>
    );
}

export default HomePage;