import{p as o,c as t}from"./preactBundle.js";import{v as e}from"./stateManagement.js";import{c as r}from"./store.js";var l=e(class extends o{btnClick(){console.log("Click"),r.btnClicked+=1}btnClickSubtract(){console.log("Click -"),r.btnClicked-=1}getStyleColor(){return r.btnClicked<-4?"darkred":r.btnClicked>4?"red":"black"}render(){const o={blueBackground:{backgroundColor:"blue"},whiteBackground:{backgroundColor:"white",color:"black"},redishBackground:{backgroundColor:"#ffebeb"}};function e(o){return{test:{color:o},test2:{color:o,backgroundColor:"darksalmon"}}}return t("section",null,t("h2",{style:{color:"chocolate",backgroundColor:"azure"}},"Lazy"),t("p",{style:e("cornflowerblue").test},"Your favorite food is: ",r.favFood),t("p",{style:e(this.getStyleColor()).test},"Button clicked: ",r.btnClicked),t("button",{style:o.redishBackground,onClick:this.btnClickSubtract},"Click me -"),t("button",{style:o.redishBackground,onClick:this.btnClick},"Click me"))}});export default l;
