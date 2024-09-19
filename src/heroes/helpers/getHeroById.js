import { HeroesData } from "../data/HeroesData"

export const getHeroById = (id) => {

    return HeroesData.find(hero => hero.id === id)
}