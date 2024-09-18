import { HeroesData } from '../data/HeroesData';

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" is not valid`);
    }

    return HeroesData.filter(hero => hero.publisher === publisher);
};