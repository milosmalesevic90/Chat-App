

class User {
    constructor({ username, message, timestamp }) {
        this.node = document.createElement('li');
        this.node.className= 'user';



        this.username = username;
        this.message = message;
        this.timestamp = timestamp;
        let time = this.timestamp;
        function times(s) {
            return new Date(s * 1e3).toISOString().slice(-13, -5);
        }

        this.banner = document.createElement('strong');
        this.banner.textContent = this.username;

        this.txttimestamp = document.createElement('strong');
        this.txttimestamp.textContent = times(time);

        this.txtmessages = document.createElement('p');
        this.txtmessages.className='smsTitle';
        this.txtmessages.textContent = this.message;

        

        this.node.appendChild(this.banner);
        this.node.appendChild(this.txttimestamp);
        this.node.appendChild(this.txtmessages);
    }
    getNode() {
        return this.node;
    }
}
export {
    User
}