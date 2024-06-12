export interface Author {
    name: string,
    engName?: string,
    wiki?: string,
}

export interface Quote {
    eng: string,
    og?: string,
    author: Author,
}

function makeAuthor(name: string, engName?: string, wiki?: string): Author {
    return {
        name,
        engName,
        wiki,
    };
}

function makeQuote(eng: string, og?: string, auth?: Author): Quote {
    const author = auth ?? makeAuthor("Unknown");

    return {
        eng,
        og,
        author,
    }
}

export const quotes: Array<Quote> = [
    makeQuote(
        "W życiu piękne są tylko chwile.",
        "In life, only moments are beautiful",
        makeAuthor("Ryszard Riedel")
    ),

    makeQuote(
        "Kiedy śmieje się dziecko, śmieje się cały świat.",
        "When a child laughs, the whole world laughs.",
        makeAuthor("Janusz Korczak"),
    ),

    makeQuote(
        "Nie żałuj że się starzejesz. To przywilej wielu nie dany.",
        "Don't regret getting older. It's a privilege denied to many."),

    makeQuote(
        "Człowiek jest wielki nie przez to, co posiada, lecz przez to, kim jest; nie przez to, co ma, lecz przez to, czym dzieli się z innymi.",
        "A person is not great by what they own, but by what they are; not by what they have, but by what they share with others.",
        makeAuthor("Pope John Paul II - Karol Wojtyła"),
    ),

    makeQuote(
        "Lepiej zaliczać się do niektórych, niż do wszystkich.",
        "It's better to belong to some than to everyone.",
        makeAuthor("Andrzej Sapkowski"),
    ),

    makeQuote(
        "Nie ma nic lepszego niż możliwość przelania na papier myśli.",
        "There is nothing better than the ability to put thoughts on paper.",
        makeAuthor("Maria Skłodowska - Curie"),
    ),

    makeQuote(
        "Świat jest piękny, ale jeżeli ktoś wątpi w to, niech odnajdzie siebie.",
        "The world is beautiful, but if someone doubts it, let them find themselves.",
        makeAuthor("Adam Mickiewicz"),
    ),

    makeQuote(
        "Prawdziwa odwaga polega na robieniu tego, czego się boisz.",
        "True courage consists in doing what you fear.",
        makeAuthor("Józef Piłsudski"),
    ),

    makeQuote(
        "Strach nie istnieje nigdzie indziej, tylko w umyśle.",
        "Fear does not exist anywhere else but in the mind.",
        makeAuthor("Stefan Żeromski"),
    ),

    makeQuote(
        "Niech twoje życie będzie świadectwem, że niemożliwe nie istnieje.",
        "Let your life be a testimony that impossible does not exist.",
        makeAuthor("Wisława Szymborska"),
    ),

];