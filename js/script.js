var technologies = ['javascript','react','vue','ejs<br>&<br>hbs','linux/vm/<br/>digital-ocean', 'docker', 'css/css-libs','html','sql/no-sql'];
var flash_h1 = document.querySelector(".flash-h1");
var counter = 0;

function flashTechnologies(){


    flash_h1.innerHTML = technologies[counter]
    counter++;

    if(counter >= technologies.length){
        counter = 0;
    }
}


setInterval(flashTechnologies,2000);