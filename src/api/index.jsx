import { Chance } from "chance";

const chance = Chance();

export const randomNames = () => {
    return chance.name({ middle: true });
}