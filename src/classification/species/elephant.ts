import { Elephantidae } from '../family/elephantidae';
import sounds from '../../commonCharacteristics/sound';

export class Elephant extends sounds(Elephantidae) {
	// Binomial name is a combination of Family and Species
	binomialName = 'Loxodonta africana';
	name = 'African Bush Elephant';
	sound = 'Trumpet';
}
