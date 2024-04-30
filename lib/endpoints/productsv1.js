// blacklists.js
const { makeRequest } = require("../utils/request");

class Productsv1 {
    constructor(api_key, store) {
        this.api_key = api_key;
        this.url = "https://sell.app/api/v1/";
        this.store = store;
    }

	/**
	 * @returns Returns a list of all the listings/products created.
	 */
    async getAllProducts() {
        try {
            const params = `listings`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Retrieves a listing/product by the entered ID.
	 */
    async getProduct(id) {
        try {
            const params = `listings/${id}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {object} fields Product's field ([More info](https://developer.sell.app/#tag/Listings/paths/~1api~1v1~1listings/post))
	 */
    async createProduct(fields) {
        try {
            const params = `listings`;
            return await makeRequest(this.url, params, fields, "POST", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Updates a listing/product by the entered ID.
	 * @param {object} fields Product's field. ([More info](https://developer.sell.app/#tag/Listings/paths/~1api~1v1~1listings~1{listing}/patch))
	 */
    async updateProduct(id, fields){
        try {
            const params = `listings/${id}`;
            return await makeRequest(this.url, params, fields, "PATCH", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Deletes a listing/product by the entered ID.
	 */
    async deleteProduct(id) {
        try {
            const params = `listings/${id}`;
            return await makeRequest(this.url, params, null, "DELETE", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = Productsv1;
