import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="landingTopContainer">
                <span className="landingHeaderContainer">
                    <h2 className="landingHeader">
                        HOME
                    </h2>
                    <h2 className="landingHeader">
                        ABOUT
                    </h2>
                    <h2 className="landingHeader">
                        PRICING
                    </h2>
                    <h2 className="landingHeader">
                        CONTACT
                    </h2>
                </span>
                <span className="landingInformation">
                    <div className="landingInformationContainer">

                        <h1 className="landingTitle">
                            Authentic Hunting Expeditions on Native Grounds
                        </h1>
                        <p>
                            Our guided expeditions on sovereign Native lands offer a unique opportunity to connect with the wilderness as never before. Led by expert guides from local communities, you'll experience hunting in its most authentic form, respecting the land and its traditions. Join us for an unforgettable adventure where heritage and the great outdoors come together for a truly remarkable experience.
                        </p>
                        <span>
                            <button>
                                SCHEDULE NOW
                            </button>
                            <button>
                                LEARN MORE
                            </button>
                        </span>
                    </div>
                </span>
            </div>
        </div>
    )
}
