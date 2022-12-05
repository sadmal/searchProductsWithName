const search = () => {
    const searchinput=document.querySelector(".searchinput").value.toUpperCase();
    const storeitems=document.querySelector(".productslist");
    const products=document.querySelectorAll(".product");
    const productname=storeitems.getElementsByTagName("h4");



for(let i=0;i<=productname.length-1;i++){
    let match=products[i].getElementsByTagName("h4")[0];
    
    if(match){
        let matchtext=match.innerText || match.innerHTML;

        if(matchtext.toUpperCase().indexOf(searchinput)>-1){
            products[i].style.display="";
        }
        else{
            products[i].style.display="none";
        }
    }

}
}