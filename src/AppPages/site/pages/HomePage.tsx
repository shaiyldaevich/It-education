import DoYouHave from "./DoYouHaveAQ/DoYouHave";
import LastState from "./homeSections/LastState/LastState";
import Request from "./homeSections/Request/Request";
import Subscription from "./homeSections/Subscription/Subscription";

const HomePage = () => {

    return (
        <>
            <LastState />
            <Subscription />
            <DoYouHave />
            <Request />
        </>
    );
};

export default HomePage;
