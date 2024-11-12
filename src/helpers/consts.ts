export enum ReducerPath {
	Regions = 'regions/api',
	Users = 'users/api',
	Objects = 'objects/api',
	Projects = 'projects/api',
	News = 'news/api',
	Events = 'events/api',
	Culture = 'culture/api',
}

export const ImagesFormat = ['png', 'jpeg', 'jpg', 'webp', 'gif']
export enum NameSpace {
	Modal = 'MODAL',
}

export enum DisplayBreakpoints {
	Sm = 576,
	Md = 768,
	Lg = 1024,
	Xl = 1280,
	Xxl = 1440,
}

export const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4020/api/v1'
