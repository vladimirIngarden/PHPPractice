class Server {
    constructor() {
        this.token;
    }

    async send(params = {}) {
        const query = Object.keys(params).map(key => 
          `${key}=${params[key]}`).join('&');
        console.log(query);
        const result = await fetch(`../api/?${query}`);
        const answer = await result.json();
        return(answer.result === 'ok') ? answer.data : null;
    }

    async login(login, password) {
        if (login && password) {
            const data = await this.send({ method: 'login', login, password });
            this.token = data.token;
            delete data.token;
            return data;
        }
        return null;
    }
}