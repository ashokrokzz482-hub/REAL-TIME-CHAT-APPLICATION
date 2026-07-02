const conversationArchive = [];

/*
    Save New Message
*/
function storeConversationEntry(messageObject) {

    conversationArchive.push(messageObject);

}

/*
    Return Message History
*/
function retrieveConversationArchive() {

    return conversationArchive;

}

/*
    Export Functions
*/
module.exports = {
    storeConversationEntry,
    retrieveConversationArchive
};