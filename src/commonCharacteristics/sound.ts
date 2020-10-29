import { BaseConstructor } from '../models/baseConstructor';

export default function sounds<TBase extends BaseConstructor>(Base: TBase) {
	return class extends Base{
		public makeSound(): string {
			return 'silent';
		}
	};
}