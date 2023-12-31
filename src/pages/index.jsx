import Hero from "../components/Hero";
import Works from "../components/works";
import TrendingNfts from "../components/trending";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";
import Subscription from "../components/subscription";
import GameDemo from "../components/game";

const Homepage = () => {
    return (
        <div className="w-full center flex-col bg-primary">
            <Hero />
            <GameDemo />
            <Subscription />
            <Works />
            <TrendingNfts />
            <Subscribe />
            <Footer />
        </div>
    );
}
 
export default Homepage;