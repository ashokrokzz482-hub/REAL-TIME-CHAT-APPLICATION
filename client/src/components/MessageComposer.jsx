import { useState } from "react";

import socketChannel from "../socketConnection";


function MessageComposer({
    participantName
}) {

    const [draftMessage, setDraftMessage] =
        useState("");


    function captureMessageDraft(eventObject) {

        setDraftMessage(
            eventObject.target.value
        );

    }


    function deliverOutgoingMessage() {

        const cleanedMessage =
            draftMessage.trim();


        if (cleanedMessage.length === 0) {

            return;

        }


        const currentTime =
            new Date().toLocaleTimeString(
                [],
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            );


        const messagePayload = {

            senderName: participantName,

            messageContent: cleanedMessage,

            messageTime: currentTime

        };


        socketChannel.emit(
            "submit-message",
            messagePayload
        );


        setDraftMessage("");

    }


    return (

        <div className="message-composer">

            <input
                type="text"
                placeholder="Type a message..."
                value={draftMessage}
                onChange={
                    captureMessageDraft
                }
            />

            <button
                onClick={
                    deliverOutgoingMessage
                }
            >
                Send
            </button>

        </div>

    );

}

export default MessageComposer;