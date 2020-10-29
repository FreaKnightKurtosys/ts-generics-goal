import { Charateristic } from './characteristic';

export class BaseAnimal {
	kingdomCharacteristics!: Charateristic;
	phylumCharacteristics!: Charateristic;
	mamaliaCharacteristics!: Charateristic;
	orderCharacteristics!: Charateristic;
	familyCharacteristics!: Charateristic;
	binomialName!: string;
	name!: string;
	sound!: string;
}