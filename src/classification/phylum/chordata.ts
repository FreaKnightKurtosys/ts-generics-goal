import { Animalia } from '../kingdom/animalia';

export class Chordata extends Animalia {
	phylumCharacteristics = {
		is: [
			'bilaterally symmetric',
		],
		has: [
			'a coelom',
			'a circulatory system',
		],
	};
}
