// blacklists.js
const { makeRequest } = require("../utils/request");

class Variants {
    constructor(api_key, store) {
        this.api_key = api_key;
        this.url = "https://sell.app/api/v2/";
        this.store = store;
    }

	/**
	 * @param {string} id Retrieves all variants of listing/product by the entered ID.
	 */
    async getAllVariants(id) {
        try {
            const params = `products/${id}/variants`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Retrieve a product variant
	 * @param {string} vid Variants ID.
	 */
    async getVariant(id, vid) {
        try {
            const params = `products/${id}/variants/${vid}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {string} id listing/product ID.
	 * @param {object} fields Product's field ([More info](https://developer.sell.app/#tag/Listings/paths/~1api~1v1~1listings/post))
	 */
    async createProductVariant(id, fields) {
        try {
            const params = `products/${id}/variants`;
            return await makeRequest(this.url, params, fields, "POST", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Updates a listing/product variant by the entered ID.
	 * @param {string} vid Variants ID.
	 * @param {object} fields Product's field. ([More info](https://developer.sell.app/#tag/Listings/paths/~1api~1v1~1listings~1{listing}/patch))
	 */
    async updateProductVariant(id, vid, fields){
        try {
            const params = `products/${id}/variants/${vid}`;
            return await makeRequest(this.url, params, fields, "PATCH", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Deletes a listing/product by the entered ID.
	 * @param {string} vid Variants ID.
	 */
    async deleteProductVariant(id, vid) {
        try {
            const params = `products/${id}/variants/${vid}`;
            return await makeRequest(this.url, params, null, "DELETE", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = Variants;
