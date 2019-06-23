// import { Reducer } from 'redux';
import { SystemActionTypes, SystemState } from './types';

const initialState: SystemState = {
	applications: {
		'e9a30119-d673-4978-b393-f608fe28ae07': {
			uuid: 'e9a30119-d673-4978-b393-f608fe28ae07',
			title: 'Home',
			type: 'system',
			componentTag: '',
			default: false,
			path: '',
		},
		'54789c07-bb43-4db4-8b2d-1a8e1f8c67f1': {
			uuid: '54789c07-bb43-4db4-8b2d-1a8e1f8c67f1',
			title: 'Desktop',
			type: 'system',
			componentTag: '',
			default: false,
			path: '',
		},
		'c178025e-a209-4c50-8c34-36d35f36494c': {
			uuid: 'c178025e-a209-4c50-8c34-36d35f36494c',
			title: 'Sign in',
			type: 'system',
			componentTag: '',
			default: false,
			path: 'signin',
		},
		'437642dd-7d74-4213-af76-b51fc24eff0': {
			uuid: '437642dd-7d74-4213-af76-b51fc24eff0',
			title: 'Sign up',
			type: 'system',
			componentTag: '',
			default: false,
			path: 'signup',
		},
		'5a2192a0-0051-46a1-85e7-17245ba24f55': {
			uuid: '5a2192a0-0051-46a1-85e7-17245ba24f55',
			title: 'Restore Password',
			type: 'system',
			componentTag: '',
			default: false,
			path: 'restore-password',
		},
		'59728db5-8284-42c5-8731-bdec7adab8d8': {
			uuid: '59728db5-8284-42c5-8731-bdec7adab8d8',
			title: 'Shipping',
			type: 'user',
			componentTag: 'app-shipping',
			default: true,
			path: 'shipping',
		},
		'3096aa1f-a6ce-4130-8147-66f4bea35e16': {
			uuid: '3096aa1f-a6ce-4130-8147-66f4bea35e16',
			title: 'Shipping Project',
			type: 'user',
			componentTag: 'app-shipping-project',
			default: false,
			path: 'shipping/project',
		},
		'c80626f6-2974-4091-813c-f217ce0b44d6': {
			uuid: 'c80626f6-2974-4091-813c-f217ce0b44d6',
			title: 'Accounts',
			type: 'user',
			componentTag: 'app-accounts',
			default: false,
			path: 'accounts',
		},
		'52386006-bf4a-4ddf-927c-41c395e877f5': {
			uuid: '52386006-bf4a-4ddf-927c-41c395e877f5',
			title: 'Sales',
			type: 'user',
			componentTag: 'app-sales',
			default: false,
			path: 'sales',
		},
		'0e35396c-7a32-4b2f-8759-d1b09b9fce2c': {
			uuid: '0e35396c-7a32-4b2f-8759-d1b09b9fce2c',
			title: 'Accounting',
			type: 'user',
			componentTag: 'app-accounting',
			default: false,
			path: 'accounting',
		},
	},
	publicApplications: [
		'59728db5-8284-42c5-8731-bdec7adab8d8',
		'3096aa1f-a6ce-4130-8147-66f4bea35e16',
		'c80626f6-2974-4091-813c-f217ce0b44d6',
		'52386006-bf4a-4ddf-927c-41c395e877f5',
		'0e35396c-7a32-4b2f-8759-d1b09b9fce2c',
	],
	modules: {
		'71e3c25b-cce6-4256-8f3a-92e2f19cbf0d': {
			title: 'Dashboard',
			application: '59728db5-8284-42c5-8731-bdec7adab8d8',
		},
		'21d416b5-72d5-4a8d-95ed-a5bba9d9155e': {
			title: 'Projects',
			application: '59728db5-8284-42c5-8731-bdec7adab8d8',
		},
		'd4f2eda9-15ec-4a28-bdd6-f07ce116a5f4': {
			title: 'Orders',
			application: '59728db5-8284-42c5-8731-bdec7adab8d8',
		},
		'5bcbfc1c-9cc3-433f-b4be-20104a36d104': {
			title: 'Dashboard',
			application: '3096aa1f-a6ce-4130-8147-66f4bea35e16',
		},
		'c9b4baef-d339-4588-8436-050fbbe6b872': {
			title: 'Dispatch',
			application: '3096aa1f-a6ce-4130-8147-66f4bea35e16',
		},
		'6b114c0f-0dcb-4e50-a6f7-361d65127cfd': {
			title: 'Kanban',
			application: '3096aa1f-a6ce-4130-8147-66f4bea35e16',
		},
	},
	wsConnected: false,
};

export default <Reducer>(state: SystemState = initialState, action: SystemActionTypes) => {
	switch (action.type) {
		default:
			return state;
	}
};
