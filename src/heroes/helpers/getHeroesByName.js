import { HeroesData } from "../data/HeroesData";

export const getHeroesByName = ( name = '' ) => {
    
    name = name.toLocaleLowerCase().trim();
    
    if(name.length === 0) return [];

    return HeroesData.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ));

}