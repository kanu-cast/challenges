const animals = [
    { id:"1", name:"fennec", species:"fox", location:"india", image:"./assets/fox.jpeg" },
    { id:"2", name:"humpback", species:"whale", location:"south africa",  image:"./assets/whale.jpeg"  },
    { id:"3", name:"common brown", species:"baboon", location:"south africa", image:"./assets/baboon.jpeg"  },
    { id:"4", name:"spotted", species:"deer", location:"amazon", image:"./assets/deer.jpeg"  }
];

const grid = document.querySelector('.quadriple-grid');

animals.forEach((animal, idx)=>{
    const content = `
        <div class="img-card relative" id="${animal.id}">
            <div class="overlay absolute" id="${animal.id}"></div>
            <img src="${animal.image}" class="fill-height fill-width gallery-img"/> 
            <div class="absolute text-wrapper">
                <div class="photo-description">
                    <span class="subject-name">${animal.name} <br> ${animal.species}</span>
                    <div class="location my-lg-5">${animal.location}</div>
                </div>
                <div class="know-more clr-aqua absolute"><a class="style-none" href="./show.html?id=${animal.id}">Know more &#8594;</a></div>
            </div>
        </div>
    `
    grid.innerHTML += content;
});