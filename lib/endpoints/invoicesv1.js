// blacklists.js
const { makeRequest } = require("@utils/request");

class Invoicesv1 {
    constructor(api_key, store) {
        this.api_key = api_key;
        this.url = "https://sell.app/api/v1/";
        this.store = store;
    }

    /**
	 * @returns Returns a list of all the invoices that have been placed.
	 */
    async getAllInvoices() {
        try {
            const params = `invoices`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} field to query in descending order.
	 * @return Returns a list of all the orders that have been placed in descending order by the passed field.
	 */
    async getAllInvoicesDesc(field) {
        try {
            const body = {
                sort: [
                    {
                        field: field,
                        direction: "desc", /* Descending Direction */
                    }
                ]
            };
            const params = `invoices/search`;
            return await makeRequest(this.url, params, body, "POST", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Retrieve a specific invoice by the entered ID.
	 */
    async getInvoice(id) {
        try {
            const params = `invoices/${id}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {object} fields Invoice's fields ([More info](https://developer.sell.app/#tag/Invoices/paths/~1api~1v1~1invoices/post))
	 */
    async createInvoice(fields) {
        try {
            const params = `listings`;
            return await makeRequest(this.url, params, fields, "POST", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Retrieve deliverables from a specific order by the entered ID.
	 */
    async getInvoiceDeliverables(id){
        try {
            const params = `invoices/${id}/deliverables`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Issue a replacement for an order by the entered ID.
	 * @param {array} fields Listing(s)' field, the listings that should be replaced. If no listings are provided, all listings will be replaced. ([More info](https://developer.sell.app/#tag/Invoices/paths/~1api~1v1~1invoices~1{invoice}~1issue-replacement/patch))
	 */
    async issueReplacement(id, fields) {
        try {
            const params = `invoices/${id}/issue-replacement`;
            return await makeRequest(this.url, params, fields, "PATCH", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} id Generates a payment session for the given order. POSTing to this endpoint will return a unique payment_url that you can pass on to your customer. Once the customer has made the payment, our system will automatically process the relevant order and deliver the product to the customer, you won't need to do anything else.
	 */
    async createPayment(id) {
        try {
            const params = `invoices/${id}/checkout`;
            return await makeRequest(this.url, params, null, "POST", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = Invoicesv1;
