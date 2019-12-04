import { User } from "./user";

class MessageList {
    constructor() {
        this.node = document.createElement('ul');
        this.node.id = 'message-container';


    }
    loadData2(data) {
        this.node.innerHTML = '';
        data.messages.forEach(element => {
            let launch = new User(element);
            this.node.appendChild(launch.getNode());
        })
    }
       

    addTask(task) {
        this.node.appendChild(task.getNode());
    }
    
    getNode() {
        return this.node;
    }
}

export {
    MessageList
}