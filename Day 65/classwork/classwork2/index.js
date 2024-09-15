function manuelGetElementById(id) {
    const atribute = document.all;

    for (let i = 0; i < atribute.length; i++) {
        if (atribute[i].id === id) {
            return atribute[i]
        }
    }
}