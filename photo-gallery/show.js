// DOM Elements
const grid = document.querySelector('.double-grid')
const animals = [
    { id:"1", name:"fennec", species:"fox", location:"india", image:"./assets/fox.jpeg", 
        description:`The fennec fox is a small crepuscular fox native to the deserts of North Africa, ranging from Western Sahara and Mauritania to the Sinai Peninsula. Its most distinctive feature is its unusually large ears, which serve to dissipate heat and listen for underground prey. The fennec is the smallest fox species. Wikipedia
        Trophic level: Omnivorous Encyclopedia of Life
        Mass: 0.68 – 1.6 kg (Adult)
        Scientific name: Vulpes zerda
        Conservation status: Least Concern Encyclopedia of Life
        Class: Mammalia
        Domain: Eukaryota
        Family: Canidae`
    },
    { id:"2", name:"humpback", species:"whale", location:"south africa",  image:"./assets/whale.jpeg" , 
        description:`The humpback whale is a species of baleen whale. It is a rorqual and is the only species in the genus Megaptera. Adults range in length from 14–17 m and weigh up to 40 metric tons. The humpback has a distinctive body shape, with long pectoral fins and tubercles on its head. Wikipedia
        Mass: 25,000 – 30,000 kg
        Trophic level: Carnivorous Encyclopedia of Life
        Scientific name: Megaptera novaeangliae
        Conservation status: Least Concern (Population increasing) Encyclopedia of Life
        Lifespan: 45 – 100 years
        Gestation period: 11 months Encyclopedia of Life
        Length: 15 – 16 m (Female, Adult), 13 – 14 m (Male, Adult)`
    },
    { id:"3", name:"common brown", species:"baboon", location:"south africa", image:"./assets/baboon.jpeg" , 
        description:`The chacma baboon, also known as the Cape baboon, is, like all other baboons, from the Old World monkey family. It is one of the largest of all monkeys. Wikipedia
        Scientific name: Papio ursinus
        Mass: 14 kg (Female), 10 kg (Male) Encyclopedia of Life
        Conservation status: Least Concern (Population stable) Encyclopedia of Life
        Gestation period: 186 days Encyclopedia of Life
        Class: Mammalia
        Family: Cercopithecidae
        Genus: Papio`
    },
    { id:"4", name:"spotted", species:"deer", location:"amazon", image:"./assets/deer.jpeg" , 
        description:`The chital or cheetal, also known as the spotted deer, chital deer and axis deer, is a deer species native to the Indian subcontinent. It was first described and given a binomial name by German naturalist Johann Christian Polycarp Erxleben in 1777. Wikipedia
        Scientific name: Axis axis
        Mass: 36 kg (Adult) Encyclopedia of Life
        Gestation period: 227 days Encyclopedia of Life
        Conservation status: Least Concern Encyclopedia of Life
        Class: Mammalia
        Family: Cervidae
        Kingdom: Animalia`
    }
];
// Getting Id from url
const searchParams = new URLSearchParams(window.location.search);
const currentId = searchParams.get('id');
let animal = {}
if(currentId){
    animal = animals.filter(item => item.id == currentId)[0];
    const content = `
        <div class="image-box ">
            <img src="${animal.image}" class="show-img"/>
        </div>
        <div class="description-box px-lg-4 py-lg-5">
            <span class="subject-name block my-lg-5">${animal.name} ${animal.species}</span>
            <div class="block my-lg-5">${animal.description}</div>
        </div>
    `
    grid.innerHTML = content
}else{
    const content = `
        <div class="block">
            <h1 class="clr-red">Sorry! No Animal matches your search </h1>
        </div>
    `
    grid.innerHTML = content
}
