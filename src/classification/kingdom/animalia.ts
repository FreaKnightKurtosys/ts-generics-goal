import sounds from '../../commonCharacteristics/sound';
import { BaseAnimal } from '../../models/baseAnimal';

export class Animalia extends sounds(BaseAnimal) {
	kingdomCharacteristics = {
		is: [
			'multicellular eukaryotic',
		],
		that: [
			'consume organic material',
			'breathe oxygen',
			'able to move',
			'reproduce sexually',
		],
	};
}
