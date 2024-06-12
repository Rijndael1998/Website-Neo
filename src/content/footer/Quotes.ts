export class Quote {
    constructor(
        public readonly og: string | null,
        public readonly eng: string,
        public readonly author?: string,
        public readonly authorURL?: string,
    ) { }
}

export const quotes: Array<Quote> = [
    new Quote(
        "W życiu piękne są tylko chwile.",
        "In life, only moments are beautiful",
        "Ryszard Riedel"),

    new Quote(
        "Kiedy śmieje się dziecko, śmieje się cały świat.",
        "When a child laughs, the whole world laughs.",
        "Janusz Korczak"),

    new Quote(
        "Nie żałuj że się starzejesz. To przywilej wielu nie dany.",
        "Don't regret getting older. It's a privilege denied to many."),

    new Quote(
        "Człowiek jest wielki nie przez to, co posiada, lecz przez to, kim jest; nie przez to, co ma, lecz przez to, czym dzieli się z innymi.",
        "A person is not great by what they own, but by what they are; not by what they have, but by what they share with others.",
        "Pope John Paul II - Karol Wojtyła"),

    new Quote(
        "Lepiej zaliczać się do niektórych, niż do wszystkich.",
        "It's better to belong to some than to everyone.",
        "Andrzej Sapkowski"),

    new Quote(
        "Nie ma nic lepszego niż możliwość przelania na papier myśli.",
        "There is nothing better than the ability to put thoughts on paper.",
        "Maria Skłodowska - Curie"),

    new Quote(
        "Świat jest piękny, ale jeżeli ktoś wątpi w to, niech odnajdzie siebie.",
        "The world is beautiful, but if someone doubts it, let them find themselves.",
        "Adam Mickiewicz"),

    new Quote(
        "Prawdziwa odwaga polega na robieniu tego, czego się boisz.",
        "True courage consists in doing what you fear.",
        "Józef Piłsudski"),

    new Quote(
        "Strach nie istnieje nigdzie indziej, tylko w umyśle.",
        "Fear does not exist anywhere else but in the mind.",
        "Stefan Żeromski"),

    new Quote(
        "Niech twoje życie będzie świadectwem, że niemożliwe nie istnieje.",
        "Let your life be a testimony that impossible does not exist.",
        "Wisława Szymborska"),

];