// blacklists.js
const { makeRequest } = require("../utils/request");

class Coupons {
    constructor(api_key, store) {
        this.api_key = api_key;
        this.url = "https://sell.app/api/v1/";
        this.store = store;
    }

	/**
	 * @returns Returns a list of all the coupons created.
	 */
    async getAllCoupons() {
        try {
            const params = `coupons`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Retrieves a coupon by the entered ID.
	 */
    async getCoupon(id) {
        try {
            const params = `coupons/${id}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {object} fields Coupon's field ([More info](https://developer.sell.app/#tag/Coupons/paths/~1api~1v1~1coupons/post))
	 */
    async createCoupon(fields) {
        try {
            const params = `coupons`;
            return await makeRequest(this.url, params, fields, "POST", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {string} id Updates a coupon by the entered ID.
	 * @param {object} fields Coupon's field. ([More info](https://developer.sell.app/#tag/Coupons/paths/~1api~1v1~1coupons/post))
	 */
    async updateCoupon(id, fields){
        try {
            const params = `coupons/${id}`;
            return await makeRequest(this.url, params, fields, "PATCH", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Deletes a coupon by the entered ID.
	 */
    async deleteCoupon(id) {
        try {
            const params = `coupons/${id}`;
            return await makeRequest(this.url, params, null, "DELETE", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Coupons;
