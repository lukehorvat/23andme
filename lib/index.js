import got from "got";
import FormData from "form-data";

export default class API {
  constructor() {
    this.url = "https://api.23andme.com";
  }

  token(options) {
    let {clientId, clientSecret, code, redirectUri, scope} = options;
    let form = new FormData();
    form.append("client_id", clientId);
    form.append("client_secret", clientSecret);
    form.append("grant_type", "authorization_code");
    form.append("code", code);
    form.append("redirect_uri", redirectUri);
    form.append("scope", scope);

    return got(`${this.url}/token`, {
      method: "POST",
      headers: form.getHeaders(),
      body: form,
      json: true
    }).then(res => {
      return res.body.access_token;
    });
  }

  user(options) {
    let {token} = options;

    return got(`${this.url}/1/user`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` },
      json: true
    }).then(res => {
      return res.body;
    });
  }

  names(options) {
    let {token} = options;

    return got(`${this.url}/1/names`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` },
      json: true
    }).then(res => {
      return res.body;
    });
  }

  haplogroups(options) {
    let {token} = options;

    return got(`${this.url}/1/haplogroups`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` },
      json: true
    }).then(res => {
      return res.body;
    });
  }

  ancestry(options) {
    let {token} = options;

    return got(`${this.url}/1/ancestry`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` },
      json: true
    }).then(res => {
      return res.body;
    });
  }

  familyMembers(options) {
    let {token} = options;

    return got(`${this.url}/1/family_members`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` },
      json: true
    }).then(res => {
      return res.body;
    });
  }

  relatives(options) {
    let {token} = options;

    return got(`${this.url}/1/relatives`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` },
      json: true
    }).then(res => {
      return res.body;
    });
  }
}
