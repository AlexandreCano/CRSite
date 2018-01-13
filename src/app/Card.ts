import { Rarity, Type } from './Enums'

export class Card{

    public name: string;
    public idName: string;
    public rarity: Rarity;
    public type: Type;
    public description: string;
    public arena: string;
    public elixirCost: string;
    public order: string;
}