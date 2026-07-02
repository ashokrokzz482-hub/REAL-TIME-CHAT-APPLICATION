const {
    storeConversationEntry,
    retrieveConversationArchive
} = require("./chatMemory");


function establishSocketListeners(io) {

    io.on("connection", (socketInstance) => {

        console.log("User Connected:", socketInstance.id);


        /*
            Send Existing History
        */
        socketInstance.on(
            "request-history",
            () => {

                const existingMessages =
                    retrieveConversationArchive();

                socketInstance.emit(
                    "conversation-history",
                    existingMessages
                );

            }
        );


        /*
            Receive New Message
        */
        socketInstance.on(
            "submit-message",
            (messagePayload) => {

                storeConversationEntry(
                    messagePayload
                );

                io.emit(
                    "receive-message",
                    messagePayload
                );

            }
        );


        /*
            User Disconnect
        */
        socketInstance.on(
            "disconnect",
            () => {

                console.log(
                    "User Disconnected:",
                    socketInstance.id
                );

            }
        );

    });

}


module.exports = {
    establishSocketListeners
};