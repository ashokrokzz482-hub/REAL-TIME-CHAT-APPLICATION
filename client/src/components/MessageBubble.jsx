function MessageBubble({
    senderName,
    messageContent,
    messageTime
}) {

    return (

        <div className="message-bubble">

            <div className="message-sender">

                {senderName}

            </div>

            <div className="message-content">

                {messageContent}

            </div>

            <div className="message-time">

                {messageTime}

            </div>

        </div>

    );

}

export default MessageBubble;