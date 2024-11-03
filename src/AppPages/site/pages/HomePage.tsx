import DoYouHave from "./homeSections/DoYouHaveAQ/DoYouHave";
import LastState from "./homeSections/LastState/LastState";
import MainBanner from "./homeSections/MainBanner/MainBanner";
import Request from "./homeSections/Request/Request";
import Subscription from "./homeSections/Subscription/Subscription";

const HomePage = () => {
    return (
        <>
            <MainBanner />
            <LastState />
            <Subscription />
            <DoYouHave />
            <Request />
        </>
    );
};

export default HomePage;
