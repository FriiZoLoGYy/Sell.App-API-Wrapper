// apiUtils.js
const axios = require("axios").default;
const deprecatedEndpoints = {
    "v1": {
        "invoices": "The 'invoices' endpoint in v1 is deprecated. It is HIGHLY recommended to use the and improved 'invoices' v2 endpoint instead.",
        "listings": "The V1 product endpoints are now deprecated, It is HIGHLY recommended to use the new and improved V2 product endpoints instead.",
    },
};

async function makeRequest(url, params, body, method, apiKey, store) {
    const version = url.includes("/v1/") ? "v1" : (url.includes("/v2/") ? "v2" : null);

    if (version && deprecatedEndpoints[version][params]) {
        console.warn(`Warning: ${deprecatedEndpoints[version][params]}`);
    }

    const requestOptions = {
        method: method ? method : "GET",
        url: url + params,
        data: body,
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "X-STORE": store || ""
        },
        responseType: "json",
        proxy: false
    };

    try {
        const response = await axios(requestOptions);
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    makeRequest
};
