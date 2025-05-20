

// Write your JavaScript code.
var dict = []; // Create an empty array

dict.push({
    key: "1",
    value: "../ images / artiste programmation/1.jpeg"
},
    {
        key: "2",
        value: "../ images / artiste programmation/2.jpg"
    },
    {
        key: "3",
        value: "../ images / artiste programmation/3.jpg"
    },
    {
        key: "4",
        value: "../ images / artiste programmation/4.jpg"
    },
    {
        key: "5",
        value: "../ images / artiste programmation/5.webp"
    },
    {
        key: "6",
        value: "../ images / artiste programmation/6.jpg"
    },
    {
        key: "7",
        value: "../ images / artiste programmation/7.jpg"
    },
    {
        key: "8",
        value: "../ images / artiste programmation/8.jpg"
    },
    {
        key: "9",
        value: "../ images / artiste programmation/9.jpg"
    },
    {
        key: "10",
        value: "../ images / artiste programmation/10.jpg"
    },
    {
        key: "11",
        value: "../ images / artiste programmation/11.webp"
    });


articles.forEach(element => {
    if (element.article_etiquettes[0] == "1") {
        let carouselItem = document.createElement("div");
        carouselItem.className = "carousel-item";
        // Ajoute la classe 'active' au premier élément si besoin

        let link = document.createElement("a");
        // Utilise l'id de l'article pour générer le lien
        link.href = '/Concert/Artiste?id=' + element.field_article;

        let image = document.createElement("img");
        image.src = "../images/artiste programmation/" + element.nid + ".jpg";
        image.className = "d-block rounded mx-auto";
        image.alt = element.titre || "Artiste";

        link.appendChild(image);
        carouselItem.appendChild(link);

        // Ajoute le carouselItem à la div .carousel-inner
        document.querySelector('.carousel-inner').appendChild(carouselItem);
    }
});