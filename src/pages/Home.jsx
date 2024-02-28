import Footer from "../Footer"

import HuntingImg from "../images/hunting_behind_photo.jpg"
import DeerImg from "../images/deer_photo.jpg"
import CoupleImg from "../images/couple_walking_photo.jpg"

import Arrow from "../icons/arrow_circle_right.png"

export default function Home() {
    return (
        <div>
            <div className="landingTopContainer">
                <span className="landingHeaderContainer">
                    <h2 className="landingHeader">
                        SAN CARLOS OUTFITTERS
                    </h2>
                    <h2>
                        (480) 204-3131
                    </h2>
                    {/* <nav className="landingLinksContainer">
                        <h2 className="landingLink">
                            HOME
                        </h2>
                        <h2 className="landingLink">
                            ABOUT
                        </h2>
                        <h2 className="landingLink">
                            PRICING
                        </h2>
                        <h2 className="landingLink">
                            CONTACT
                        </h2>
                    </nav> */}
                </span>
                <span className="landingInformation">
                    <div className="landingInformationContainer">

                        <h1 className="landingTitle">
                            Authentic Hunting Expeditions on Native Grounds
                        </h1>
                        <p className="landingBlurb">
                            Our guided expeditions on sovereign Native lands offer a unique opportunity to connect with the wilderness as never before. Led by expert guides from local communities, you'll experience hunting in its most authentic form, respecting the land and its traditions. Join us for an unforgettable adventure where heritage and the great outdoors come together for a truly remarkable experience.
                        </p>
                        <span className="landingBtnContainer">
                            <button className="scheduleNowBtn">
                                SCHEDULE NOW
                            </button>
                            <span className="learnMoreBtn">
                                LEARN MORE
                                <img src={Arrow} />
                            </span>
                        </span>
                    </div>
                </span>
            </div>
            <div className="landingMiddleContainer">
                <div className="infoContainer">
                    <img src={HuntingImg} />
                    <h3>What We Provide</h3>
                    <p>
                        Don’t have your own equipment? No worries! We rent at a premium rifles, packs, gear, and more. You can bring your own equipment, or allow us to cover all your hunting needs.
                    </p>
                </div>
                <div className="infoContainer">
                    <img src={DeerImg} />
                    <h3>Where To Go</h3>
                    <p>
                        We know where the best hunting spots are on the reservation. Want to have the best day possible, allow our guides to take you there!
                    </p>
                </div>
                <div className="infoContainer">
                    <img src={CoupleImg} />
                    <h3>An Experience Like No Other</h3>
                    <p>
                        Friends and family are all invited. We will accommodate groups and ensure everyone can have a fun day out hunting.
                    </p>
                </div>
            </div>
            <div className="landingBottomCTA">
                <h1>Questions? Please reach out!</h1>
                <button className="scheduleNowBtn">
                    CONTACT US
                </button>
            </div>
            <Footer />
        </div>
    )
}
