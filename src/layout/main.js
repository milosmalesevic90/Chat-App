import { getAllMessage, getSms,uploadSms } from "../utilities/service";
import { Users } from "../components/users";
//import { User } from "../components/user";
import { MessageList } from "../components/messageList"



class Main {
    constructor() {

        this.txtTitle = document.createElement('input');
        this.txtTitle.type = 'text';
        this.txtTitle.id = 'txt-title';
        this.txtTitle.placeholder = 'Username';

        this.txtTitle2 = document.createElement('input');
        this.txtTitle2.type = 'text';
        this.txtTitle2.id = 'txt-title';
        this.txtTitle2.placeholder = 'New Message';

        this.dugme = document.createElement('button');
        this.dugme.textContent = 'Load All Msg';

        this.dugme2 = document.createElement('button');
        this.dugme2.textContent = 'Load User Msg';

        this.dugme3 = document.createElement('button');
        this.dugme3.textContent = 'UpLoad User Msg';

        this.users = new Users();

        this.node = document.createElement('div');
        this.dugme.addEventListener('click', () => {
            getAllMessage().then(data => {
                this.users.loadData(data);
            })

        });

        this.user = new MessageList();
        this.dugme2.addEventListener('click', () => {
            getSms(this.txtTitle.value).then(data => {
                this.user.loadData2(data);
            })

        })

        this.dugme3.addEventListener('click', () => {
            let username = this.txtTitle.value;
            let poruka = this.txtTitle2.value;
            uploadSms(username, poruka).then(response => {
                console.log(response);
                
            })
            this.txtTitle2.value='';
        })

        this.naslov = document.createElement('h2');
        this.naslov.innerHTML = 'User Msg';
        this.naslov.id = "top";




        this.node.appendChild(this.dugme);
        this.node.appendChild(this.txtTitle);
        this.node.appendChild(this.dugme2);
        this.node.appendChild(this.txtTitle2);
        this.node.appendChild(this.dugme3);
        this.node.appendChild(this.users.getNode());
        this.node.appendChild(this.naslov);

        this.node.appendChild(this.user.getNode());








    }
    getNode() {
        return this.node
    }
}
export {
    Main
}
