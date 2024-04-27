<img src="https://boostplanet.net/images/Sell.App.gif" align="right" width="40" height="40"/>

# Sell.app API Wrapper
> [!WARNING]  
> This Wrapper is an advanced updated version of the current Sell.app Wrapper that was made and archived in ``9/17/2023`` by [t6c](https://github.com/t6c). You can reference this wrapper [here](https://github.com/t6c/sellapp-api-wrapper).

> [!NOTE]  
> Because this is a new wrapper for Sell.app it currently supports all Sell.app API endpoints.

## Requirements

> [!IMPORTANT]  
> -   Sell.app API Key ([Get it here](https://sell.app/user/api-tokens))
> -   Sell.app store name *(optional)*
> -   npm >=8.3.0
> -   node >=16.0.0

## Installation

> [!IMPORTANT]
> npm i sellapp-node

## Usage

```javascript
const Sellapp = require("sellapp-node");
const API = new Sellapp.API("YOUR_API_KEY");

API.products.getAllProducts().then((res) => {
	console.log(res); // returns a list of all products
});

API.blacklists.createBlacklist("email", "hi@example.com", "evil user").then((res) => {
	console.log(res); // blacklisting the said user with the string "evil user" as description
});
```
## Multi-Store Support

Say you are part of multiple stores and want to access `bob.sell.app`, you would pass the slug `bob` as your store.

## Endpoints & Examples of Usage
> [!IMPORTANT]
> [Documentation](https://friizologyy.gitbook.io/sell.app-api-wrapper/)