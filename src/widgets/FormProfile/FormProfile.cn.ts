import {CN} from '@lib/ClassBem';

export function classes() {
	const BLOCK = CN('form-profile');

	return {
		block: BLOCK(),
		elementForm: BLOCK('form'),
		elementSubmit: BLOCK('submit'),
		elementField: BLOCK('field'),
		elementLabel: BLOCK('label'),
	};
}
