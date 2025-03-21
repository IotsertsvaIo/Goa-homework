class Statistic {
    constructor(name,value){
        this.name = name;
        this.value = value;
    }

    render() {
        let div = document.createElement("div")
        div.className = "statistic"

        let name = document.createElement("h1")
        name.textContent = this.name

        let score = document.createElement("p")
        score.textContent = this.value

        div.appendChild(name)
        div.appendChild(score)

        return div;
    }
}
const stats = [
    new Statistic("იოანე",100),
    new Statistic("გურამი", 90),
    new Statistic("გიორგი", 50),
    new Statistic("მარიამი", 90),
    new Statistic("თამარი", 50)
]
let container = document.getElementById('statistics-container')
for(let i of stats){
    container.appendChild(i.render());
}