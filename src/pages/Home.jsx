import { useState } from "react"

import emailjs from '@emailjs/browser'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Footer from "../Footer"

import HuntingImg from "../images/hunting_behind_photo.jpg"
import DeerImg from "../images/deer_photo.jpg"
import CoupleImg from "../images/couple_walking_photo.jpg"

import Arrow from "../icons/arrow_circle_right.png"

export default function Home() {




    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [messageInput, setMessageInput] = useState("")

    function sendEmail(e) {
        e.preventDefault();

        const message = {
            name: nameInput,
            email: emailInput,
            message: messageInput
        }

        emailjs.send(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, message, import.meta.env.VITE_APP_USER_ID)
            .then((result) => {
                toast.success('Message Sent!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log(result.text);
            }, (error) => {
                toast.error('Error Sending Message', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log(error.text);
            });
    }
    function getModal() {

        return (
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Reach Out!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="name" className="mt-2 form-label">Name</label>
                            <input
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                                type="text" className="form-control" id="name"
                            />
                            <label htmlFor="email" className="mt-2 form-label">Email</label>
                            <input
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                type="email" className="form-control" id="email"
                            />
                            <label htmlFor="message" className="mt-2 form-label">Message</label>
                            <textarea
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                className="form-control" id="message" rows="3"
                            ></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button
                                onClick={sendEmail}
                                data-bs-dismiss="modal"
                                type="button" className="btn btn-primary">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <div>
            {getModal()}
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
                            <button type="button" className="scheduleNowBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                SCHEDULE NOW
                            </button>
                            <span type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="learnMoreBtn">
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
                <button type="button" className="scheduleNowBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    CONTACT US
                </button>
            </div>
            <ToastContainer />
            <Footer />
        </div>
    )
}
