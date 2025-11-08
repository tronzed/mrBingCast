import Lottie from "lottie-react";

import animationData from "../assets/img/lotti/Weather.json";

export default function Loader({loader}) {


    if (!loader) return null;


    return (

        <>
            <div className="loader_box_cover">
                <div className="lotti_box">
                    <Lottie animationData={animationData} loop={true} />
                </div>
            </div>
        </>

    );

}