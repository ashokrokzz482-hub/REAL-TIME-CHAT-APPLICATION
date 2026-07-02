import MessageBubble from "./MessageBubble";

function MessageHistory({
    activeConversation
}) {

    return (

        <div className="message-history">

            {
                activeConversation.map(
                    (
                        conversationItem,
                        itemIndex
                    ) => (

                        <MessageBubble
                            key={itemIndex}
                            senderName={
                                conversationItem.senderName
                            }
                            messageContent={
                                conversationItem.messageContent
                            }
                            messageTime={
                                conversationItem.messageTime
                            }
                        />

                    )
                )
            }

        </div>

    );

}

export default MessageHistory;