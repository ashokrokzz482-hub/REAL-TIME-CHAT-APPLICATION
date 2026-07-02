import MessageHistory from "./MessageHistory";

import MessageComposer from "./MessageComposer";


function ChatWindow({
    participantName,
    activeConversation
}) {

    return (

        <div className="chat-screen">

            <div className="chat-card">

                <div className="chat-header">

                    <h2>
                        Real-Time Chat Application
                    </h2>

                    <p>
                        Welcome, {participantName}
                    </p>

                </div>


                <MessageHistory
                    activeConversation={
                        activeConversation
                    }
                />


                <MessageComposer
                    participantName={
                        participantName
                    }
                />

            </div>

        </div>

    );

}

export default ChatWindow;