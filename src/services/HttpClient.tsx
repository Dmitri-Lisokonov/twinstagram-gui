export class HttpClient {
    public Get(url: string) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        });
    }

    public Post(url: string, body: {}) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        });
    }

    public Delete(url: string) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        });
    }
}