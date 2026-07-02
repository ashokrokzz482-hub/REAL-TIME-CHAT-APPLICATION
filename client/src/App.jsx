import { useEffect, useState } from "react";

import socketChannel from "./socketConnection";

import JoinRoom from "./components/JoinRoom";

import ChatWindow from "./components/ChatWindow";


function App() {

    const [participantName, setParticipantName] = useState("");

    const [hasJoinedConversation, setHasJoinedConversation] =
        useState(false);

    const [activeConversation, setActiveConversation] =
        useState([]);


    useEffect(() => {

        socketChannel.on(
            "conversation-history",
            (historyCollection) => {

                setActiveConversation(
                    historyCollection
                );

            }
        );


        socketChannel.on(
            "receive-message",
            (incomingMessage) => {

                setActiveConversation(
                    (previousMessages) => [
                        ...previousMessages,
                        incomingMessage
                    ]
                );

            }
        );


        return () => {

            socketChannel.off("conversation-history");

            socketChannel.off("receive-message");

        };

    }, []);


    function registerParticipant(displayName) {

        setParticipantName(displayName);

        setHasJoinedConversation(true);

        socketChannel.emit("request-history");

    }


    return (

        <>

            {
                hasJoinedConversation ?

                    (
                        <ChatWindow
                            participantName={participantName}
                            activeConversation={activeConversation}
                            updateConversation={setActiveConversation}
                        />
                    )

                    :

                    (
                        <JoinRoom
                            registerParticipant={registerParticipant}
                        />
                    )
            }

        </>

    );

}

export default App;