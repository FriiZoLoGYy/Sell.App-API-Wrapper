// blacklists.js
const { makeRequest } = require("@utils/request");

class Blacklists {
    constructor(api_key, store) {
        this.api_key = api_key;
        this.url = "https://sell.app/api/v1/";
        this.store = store;
    }

    /**
	 * @returns Returns a list of all the blacklists created.
	 */
    async getAllBlacklists() {
        try {
            const params = `blacklists`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

    /**
	 * @param {string} id Retrieves a blacklist by the entered ID.
	 */
    async getBlacklist(id) {
        try {
            const params = `blacklists/${id}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

    
	/**
	 * @param {string} type One of the following - "EMAIL", "IP", or "COUNTRY"
	 * @param {string} data Depending on the type you chose, you can enter an IP address, email address, or country code here.
	 * @param {string} description A description that will help you remember why this blacklist rule was created.
	 */
    async createBlacklist(type, data, description) {
        try {
            let blacklist = {
                "type": type.toUpperCase(),
                "data": data,
                "description": description
            };
            const params = `blacklists`;
            return await makeRequest(this.url, params, blacklist, "POST", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

    
	/**
	 * @param {string} id ID of Blacklists to edit.
	 * @param {string} type One of the following - "EMAIL", "IP", or "COUNTRY"
	 * @param {string} data Depending on the type you chose, you can enter an IP address, email address, or country code here.
	 * @param {string} description A description that will help you remember why this blacklist rule was created.
	 */
    async updateBlacklist(id, type, data, description){
        try {
            let blacklist = {
                "type": type.toUpperCase(),
                "data": data,
                "description": description
            };
            const params = `blacklists/${id}`;
            return await makeRequest(this.url, params, blacklist, "PATCH", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Deletes a blacklist by the entered ID.
	 */
    async deleteBlacklist(id) {
        try {
            const params = `blacklists/${id}`;
            return await makeRequest(this.url, params, null, "DELETE", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Blacklists;
