// apiUtils.js
const axios = require("axios").default;

async function makeRequest(url, params, body, method, apiKey, store) {
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
