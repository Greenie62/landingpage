var h1Header = document.querySelector("#h1-header")
var h5Header = document.querySelector("#h5-header")


h1Header.onclick=(e)=>{
    let new_name = prompt("Name?")

    h1Header.innerHTML = new_name;
}