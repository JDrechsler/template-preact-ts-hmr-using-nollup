import{p as l,c as e}from"./preactBundle.js";import{v as o}from"./stateManagement.js";import{c as t}from"./store.js";var n=o(class extends l{btnClick(){console.log("Click"),t.btnClicked+=1}render(){return e("section",null,e("h2",null,"Lazy loaded comp"),e("p",null,"Hello ",t.name),e("p",null,"Your favorite food is: ",t.favFood),e("p",null,"Button clicked: ",t.btnClicked))}});export default n;