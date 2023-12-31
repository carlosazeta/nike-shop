import { NikeProduct } from '../types/types'

const NIKE_PRODUCTS: NikeProduct[] = [
	{
		id: 1,
		title: 'Nike Air Force 1 07',
		description: 'Shoes - Man',
		price: '129,99',
		image:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-zapatillas-GjGXSP.png',
	},
	{
		id: 2,
		title: 'Nike Sportswear Club Fleece',
		description: 'Hoodie - Unisex',
		price: '54,99',
		image:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2b98ae55-38d5-45c6-98b8-c3ff631858b1/sportswear-club-fleece-joggers-4Pm2Zz.png',
	},
	{
		id: 3,
		title: 'Nike p-6000',
		description: 'Shoes - Woman',
		price: '109,99',
		image:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8b7f4fd-ffa8-47b9-bb71-b5fbf9284a7e/p-6000-zapatillas-2FBrXk.png',
	},
	{
		id: 4,
		title: 'Nike Everyday Cushioned',
		description: 'Shocks - Unisex',
		price: '22,99',
		image:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/gxhrqmovo8p4th4weyb7/everyday-cushioned-calcetines-largos-de-entrenamiento-fVBKDH.png',
	},
	{
		id: 5,
		title: 'Nike Therma-FIT Academy',
		description: 'Globes - Multisport',
		price: '24,99',
		image:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54e0cd75-c559-4c48-a5df-a8649f4b5c3a/academy-guantes-de-futbol-6TwvLB.png',
	},
	{
		id: 6,
		title: 'Nike Dri-FIT Pacer',
		description: 'Top long sleeve - Woman',
		price: '44,99',
		image:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/572257dc-0d73-461d-ab07-82437f74f13d/dri-fit-pacer-1-4-zip-sweatshirt-CT13pX.png',
	},
	{
		id: 7,
		title: 'Nike Air Max Plus',
		description: 'Shoes - Man',
		price: '189,99',
		image:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9b34192e-3fc7-428b-a986-51497ba15a72/air-max-plus-shoes-LWzXNs.png',
	},
	{
		id: 8,
		title: 'Nike Alphafly',
		description: 'Shoes - Running',
		price: '299,99',
		image:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e1a47258-2d88-43ec-af27-6929c10bb702/alphafly-zapatillas-de-competicion-asfalto-h0q011.png',
	},
]

export function fetchProducts(): Promise<NikeProduct[]> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(NIKE_PRODUCTS)
		}, 1000)
	})
}
