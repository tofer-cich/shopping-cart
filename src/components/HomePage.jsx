
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
                <h1>Home Page!</h1>
            </div>
        </div>
    );
}

export default HomePage;