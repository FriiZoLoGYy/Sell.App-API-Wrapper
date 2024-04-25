const Blacklists = require('@endpoints/blacklists');
const Coupons = require('@endpoints/coupons');
const Feedback = require('@endpoints/feedback');
const Groups = require('@endpoints/groups');
const Invoicesv1 = require('@endpoints/invoicesv1');
const Invoices = require('@endpoints/invoices');
const Productsv1 = require('@endpoints/productsv1');
const Products = require('@endpoints/products');
const Variants = require('@endpoints/variants');
const Sections = require('@endpoints/sections');
const Tickets = require('@endpoints/tickets');

class Sellapp {
    constructor(api_key, store) {
        this.api_key = api_key;
        this.store = store;

        this.blacklists = new Blacklists(api_key, store);
        this.coupons = new Coupons(api_key, store);
        this.feedback = new Feedback(api_key, store);
        this.groups = new Groups(api_key, store);
        this.invoicesv1 = new Invoicesv1(api_key, store);
        this.invoices = new Invoices(api_key, store);
        this.productsv1 = new Productsv1(api_key, store);
        this.products = new Products(api_key, store);
        this.variants = new Variants(api_key, store);
        this.sections = new Sections(api_key, store);
        this.tickets = new Tickets(api_key, store);
    }
}

module.exports = Sellapp;