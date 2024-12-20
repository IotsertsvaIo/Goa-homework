const bookstore = new Map([
    [1, { title: "მატრიცა", author: "ნეო ჯონსი", genre: "ფანტასტიკა", price: 20, inCollection: false }],
    [2, { title: "დეტექტივის საიდუმლო", author: "ჰოლმსი", genre: "დეტექტივი", price: 15, inCollection: false }],
    [3, { title: "სიყვარულის ისტორია", author: "ანნა სმიტი", genre: "დრამა", price: 10, inCollection: false }],
]);

const collection = new Map(); 


const booksList = document.getElementById("books-list");
const collectionList = document.getElementById("collection-list");
const filterButton = document.getElementById("filter-button");


function displayBooks(map, container, isCollection = false) {
    container.innerHTML = "";
    for (const [id, book] of map) {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>ავტორი: ${book.author}</p>
            <p>ჟანრი: ${book.genre}</p>
            <p>ფასი: ${book.price} ₾</p>
            ${!isCollection ? `<button onclick="addToCollection(${id})">კოლექციაში დამატება</button>` : `<button onclick="removeFromCollection(${id})">წაშლა კოლექციიდან</button>`}
        `;
        container.appendChild(bookCard);
    }
}


function addToCollection(id) {
    if (!collection.has(id)) {
        const book = bookstore.get(id);
        if (book) {
            book.inCollection = true;
            collection.set(id, book);
            displayBooks(bookstore, booksList);
            displayBooks(collection, collectionList, true);
        }
    }
}


function removeFromCollection(id) {
    if (collection.has(id)) {
        const book = collection.get(id);
        if (book) {
            book.inCollection = false;
            collection.delete(id);
            displayBooks(bookstore, booksList);
            displayBooks(collection, collectionList, true);
        }
    }
}


filterButton.addEventListener("click", () => {
    const genre = document.getElementById("genre").value;
    const author = document.getElementById("author").value.toLowerCase();
    const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
    const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;

    const filteredBooks = new Map([...bookstore].filter(([id, book]) => {
        return (
            (genre === "" || book.genre === genre) &&
            (author === "" || book.author.toLowerCase().includes(author)) &&
            book.price >= minPrice &&
            book.price <= maxPrice &&
            !book.inCollection
        );
    }));

    displayBooks(filteredBooks, booksList);
});


displayBooks(bookstore, booksList);
displayBooks(collection, collectionList, true);
