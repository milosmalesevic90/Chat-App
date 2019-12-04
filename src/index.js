
import { Dashboard } from "./layout/dashboard";
import { getAllMessage } from "./utilities/service";

const app=document.querySelector('#app');
let dashboard= new Dashboard();
app.appendChild(dashboard.getNode());

getAllMessage().then(data=>{
    console.log(data)
    
})


