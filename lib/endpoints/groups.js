// blacklists.js
const { makeRequest } = require("../utils/request");

class Groups {
    constructor(api_key, store) {
        this.api_key = api_key;
        this.url = "https://sell.app/api/v2/";
        this.store = store;
    }

    /**
	 * @returns Returns a list of all the groups created.
	 */
    async getAllGroups() {
        try {
            const params = `groups`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

    /**
	 * @param {string} id Retrieves a groups by the entered ID.
	 */
    async getGroup(id) {
        try {
            const params = `groups/${id}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {object} fields Group's field ([More info](https://developer.sell.app/groups#create-a-group))
	 */
    async createGroup(fields) {
        try {
            const params = `groups`;
            return await makeRequest(this.url, params, fields, "POST", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Updates a group by the entered ID.
	 * @param {object} fields Group's field. ([More info](https://developer.sell.app/groups#update-a-group))
	 */
    async updateGroup(id, fields){
        try {
            const params = `groups/${id}`;
            return await makeRequest(this.url, params, fields, "PATCH", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Deletes a group by the entered ID.
	 */
    async deleteGroup(id) {
        try {
            const params = `groups/${id}`;
            return await makeRequest(this.url, params, null, "DELETE", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {object} fields Group's field ([More info](https://developer.sell.app/groups#add-products-to-group))
	 */
    async addProductToGroup(id, fields) {
        try {
            const params = `groups/${id}/products/attach`;
            return await makeRequest(this.url, params, fields, "POST", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {object} fields Group's field ([More info](https://developer.sell.app/groups#remove-products-from-group))
	 */
    async removeProductInGroup(id, fields) {
        try {
            const params = `groups/${id}/products/detach`;
            return await makeRequest(this.url, params, fields, "DELETE", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {object} fields Group's field ([More info](https://developer.sell.app/groups#list-all-products-within-group))
	 */
    async listProductsInGroup(id) {
        try {
            const params = `groups/${id}/products`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {object} fields Group's field ([More info](https://developer.sell.app/groups#list-all-products-within-group))
	 */
    async getProductInGroup(id, pid) {
        try {
            const params = `groups/${id}/product/${pid}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Groups;
