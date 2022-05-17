import { LocalStorageManager } from "../utility/LocalStorageManager";

export class HttpClient {
    private localStorageManager = new LocalStorageManager();
    private headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": ""
    }

    public async Get(url: string) {
        this.headers.Authorization = `Bearer ${this.localStorageManager.getAuthToken()}`;
        let response = await fetch(url, {
            method: "GET",
            headers: this.headers
        })
        if (response.status === 401) {
            this.localStorageManager.deleteAuthToken();
            this.localStorageManager.deleteUser();
        }
        else {
            return await response.json();
        }
    }

    public async Post(url: string, body: {}) {
        this.headers.Authorization = `Bearer ${this.localStorageManager.getAuthToken()}`;
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: this.headers
        })
        if (response.status === 401) {
            this.localStorageManager.deleteAuthToken();
            this.localStorageManager.deleteUser();
        }
        else {
            return await response.json();
        }
    }

    public async Delete(url: string) {
        this.headers.Authorization = `Bearer ${this.localStorageManager.getAuthToken()}`;
        let response = await fetch(url, {
            method: "DELETE",
            headers: this.headers
        })
        if (response.status === 401) {
            this.localStorageManager.deleteAuthToken();
            this.localStorageManager.deleteUser();
        }
        else {
            return await response.json();
        }
    }

    public async Put(url: string, body: {}) {
        this.headers.Authorization = `Bearer ${this.localStorageManager.getAuthToken()}`;
        let response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: this.headers
        })
        if (response.status === 401) {
            this.localStorageManager.deleteAuthToken();
            this.localStorageManager.deleteUser();
        }
        else {
            return await response.json();
        }
    }
}