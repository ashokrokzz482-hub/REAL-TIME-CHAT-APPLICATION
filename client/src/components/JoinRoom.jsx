import { useState } from "react";

function JoinRoom({ registerParticipant }) {

    const [enteredName, setEnteredName] =
        useState("");


    function captureParticipantName(eventObject) {

        setEnteredName(
            eventObject.target.value
        );

    }


    function initiateConversationAccess() {

        const cleanedName =
            enteredName.trim();


        if (cleanedName.length === 0) {

            alert(
                "Please enter your name."
            );

            return;

        }


        registerParticipant(
            cleanedName
        );

    }


    return (

        <div className="join-screen">

            <div className="join-card">

                <h1>
                    Real-Time Chat App
                </h1>

                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={enteredName}
                    onChange={
                        captureParticipantName
                    }
                />

                <button
                    onClick={
                        initiateConversationAccess
                    }
                >
                    Join Chat
                </button>

            </div>

        </div>

    );

}

export default JoinRoom;