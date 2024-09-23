import { HeroesData } from "../data/HeroesData";

export const getHeroesByName = ( name = '' ) => {

    if(name === null || name.length === 0 ) return [];

    name = name.toLocaleLowerCase().trim();

    return HeroesData.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ));

}