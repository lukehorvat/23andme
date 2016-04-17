import got from "got";
import FormData from "form-data";

export default class API {
  constructor(clientId, clientSecret, redirectUri, scope) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;
    this.scope = scope;
    this.token = null; // Is set once auth() is called.
    this.baseUri = "https://api.23andme.com";
  }

  get authUri() {
    return `${this.baseUri}/authorize?client_id=${encodeURIComponent(this.clientId)}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${encodeURIComponent(this.scope)}&response_type=code`;
  }

  auth(code) {
    let form = new FormData();
    form.append("grant_type", "authorization_code");
    form.append("code", code);
    form.append("client_id", this.clientId);
    form.append("client_secret", this.clientSecret);
    form.append("redirect_uri", this.redirectUri);
    form.append("scope", this.scope);

    return got(`${this.baseUri}/token`, {
      method: "POST",
      headers: form.getHeaders(),
      body: form,
      json: true
    }).then(res => {
      return this.token = res.body.access_token;
    });
  }

  user() {
    return got(`${this.baseUri}/1/user`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${this.token}` },
      json: true
    }).then(res => {
      return res.body;
    });
  }

  names() {
    return got(`${this.baseUri}/1/names`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${this.token}` },
      json: true
    }).then(res => {
      return res.body;
    });
  }

  haplogroups() {
    return got(`${this.baseUri}/1/haplogroups`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${this.token}` },
      json: true
    }).then(res => {
      return res.body;
    });
  }

  ancestry() {
    return got(`${this.baseUri}/1/ancestry`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${this.token}` },
      json: true
    }).then(res => {
      return res.body;
    });
  }

  familyMembers() {
    return got(`${this.baseUri}/1/family_members`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${this.token}` },
      json: true
    }).then(res => {
      return res.body;
    });
  }

  relatives() {
    return got(`${this.baseUri}/1/relatives`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${this.token}` },
      json: true
    }).then(res => {
      return res.body;
    });
  }
}
