// blacklists.js
const { makeRequest } = require("@utils/request");

class Tickets {
    constructor(api_key, store) {
        this.api_key = api_key;
        this.url = "https://sell.app/api/v1/";
        this.store = store;
    }

	/**
	 * @returns Retrieves a list of all the tickets received.
	 */
    async getAllTickets() {
        try {
            const params = `tickets`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Retrieves a section by the entered ID.
	 */
    async getTicket(id) {
        try {
            const params = `tickets/${id}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {string} id Retrieves a list of all the messages within a ticket by its entered ID.
	 */
    async getAllTicketMessages(id) {
        try {
            const params = `tickets/${id}/messages`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Retrieves a specific message within a ticket by their respective entered IDs.
	 * @param {string} messageId Message's ID that you want to retrieve with
	 */
    async getTicketMessage(id, messageId){
        try {
            const params = `tickets/${id}/messages/${messageId}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Creates a message to a ticket by its entered ID and returns the created message.
	 * @param {object} fields Response's field ([More info](https://developer.sell.app/#tag/Ticket-Messages/paths/~1api~1v1~1tickets~1{ticket}~1messages/post))
	 */
    async respondTicket(id, fields) {
        try {
            const params = `tickets/${id}/messages`;
            return await makeRequest(this.url, params, fields, "POST", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = Tickets;
