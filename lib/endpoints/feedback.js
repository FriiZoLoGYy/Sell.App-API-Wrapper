// blacklists.js
const { makeRequest } = require("@utils/request");

class Feedback {
    constructor(api_key, store) {
        this.api_key = api_key;
        this.url = "https://sell.app/api/v1/";
        this.store = store;
    }

    /**
	 * @returns Returns a list of all the blacklists created.
	 */
    async getAllFeedback() {
        try {
            const params = `feedback`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

    /**
	 * @param {string} id Retrieves a feedback by the entered ID.
	 */
    async getFeedback(id) {
        try {
            const params = `feedback/${id}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {string} id Responds to a given feedback by the entered ID.
	 * @param {string} replyMessage A reply message that was left by the store owner who received this rating
	 */
    async replyFeedback(id, replyMessage) {
		const message = {
			"reply": replyMessage
		};
        try {
            const params = `feedback/${id}`;
            return await makeRequest(this.url, params, message, "PATCH", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = Feedback;
