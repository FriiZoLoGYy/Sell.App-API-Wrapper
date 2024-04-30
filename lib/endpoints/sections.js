// blacklists.js
const { makeRequest } = require("../utils/request");

class Sections {
    constructor(api_key, store) {
        this.api_key = api_key;
        this.url = "https://sell.app/api/v1/";
        this.store = store;
    }

	/**
	 * @returns Returns a list of all the listings created.
	 */
    async getAllSections() {
        try {
            const params = `sections`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Retrieves a section by the entered ID.
	 */
    async getSection(id) {
        try {
            const params = `sections/${id}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {object} fields Section's field ([More info](https://developer.sell.app/#tag/Sections/paths/~1api~1v1~1sections/post))
	 */
    async createSection(fields) {
        try {
            const params = `sections`;
            return await makeRequest(this.url, params, fields, "POST", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Updates a section by the entered ID.
	 * @param {object} fields Section's field. ([More info](https://developer.sell.app/#tag/Sections/paths/~1api~1v1~1sections~1{section}/patch))
	 */
    async updateSection(id, fields){
        try {
            const params = `sections/${id}`;
            return await makeRequest(this.url, params, fields, "PATCH", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Deletes a section by the entered ID.
	 */
    async deleteSection(id) {
        try {
            const params = `sections/${id}`;
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

module.exports = Sections;
