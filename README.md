# 23andme [![NPM version](http://img.shields.io/npm/v/23andme.svg?style=flat-square)](https://www.npmjs.org/package/23andme)

JavaScript wrapper for the [23andMe API](https://api.23andme.com).

## Installation

Install the package with NPM:

```bash
$ npm install 23andme
```

## Usage

Minimal example:

```javascript
import API from "23andme";

let clientId = "fake_client_id";
let clientSecret = "fake_client_secret";
let redirectUri = "http://localhost:9000/receive_code";
let scope = ["ancestry"];
let api = new API(clientId, clientSecret, redirectUri, scope);

function receiveCode(code) {
  api.auth(code)
  .then(() => api.ancestry())
  .then(ancestry => console.log(ancestry))
  .catch(err => console.error(err));
}
```

As can be seen, the package exposes an API wrapper class that can be instantiated. This class has the following methods:

* `constructor(clientId, clientSecret, redirectUri, scope)`
  * Creates an instance of the class.
* `auth(code)`
  * Authenticates with the 23andMe API by exchanging an authorization code for an authorization token.
  * Returns a Promise of the authorization token.
  * Call this method first before you make any API requests!
* `user()`
  * Retrieves data from the API's `/user` endpoint.
  * Returns a Promise of the endpoint's response data.
* `names()`
  * Retrieves data from the API's `/names` endpoint.
  * Returns a Promise of the endpoint's response data.
* `haplogroups()`
  * Retrieves data from the API's `/haplogroups` endpoint.
  * Returns a Promise of the endpoint's response data.
* `ancestry()`
  * Retrieves data from the API's `/ancestry` endpoint.
  * Returns a Promise of the endpoint's response data.
* `familyMembers()`
  * Retrieves data from the API's `/family_members` endpoint.
  * Returns a Promise of the endpoint's response data.
* `relatives()`
  * Retrieves data from the API's `/relatives` endpoint.
  * Returns a Promise of the endpoint's response data.

And the following properties:

* `authUri`
  * The URI to redirect the user's Web browser to in order for them to login to 23andMe and be granted an authorization code. (When 23andMe sends the authorization code to your server, pass it to the `auth()` method!)
* `baseUri`
  * The base URI of the 23andMe API.
* `token`
  * The authorization token granted when `auth()` was called.

## Disclaimer

The package is not officially affiliated with 23andMe in any way. Use at own risk.
