import DoYouHave from "./DoYouHaveAQ/DoYouHave";
import LastState from "./homeSections/LastState/LastState";
import Subscription from "./homeSections/Subscription/Subscription";

const HomePage = () => {
    return (
        <>
            <LastState />
            <Subscription />
            <DoYouHave />
        </>
    );
};

export default HomePage;
