import { User } from "./user";


class Users {
    constructor() {
        this.node = document.createElement('ul');
        this.node.id= "user-container"
       
    }

    loadData(data) {
        this.node.innerHTML = '';
        data.data.forEach(element => {
            let launch = new User(element);
            this.node.appendChild(launch.getNode());
        })
    }
    getNode() {
        return this.node;
    }


}

export {
    Users
}