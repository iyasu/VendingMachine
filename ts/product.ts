import * as Categories from './productCategory'

export interface Product {
	name: string
	price: number
	category?: Categories.ProductCategory  //this is optional
}

export class Initial implements Product{
	name = "Please select a product"
	price = 0
}

export class CocaCola implements Product{
  name = "Coca-Cola"
  price = 2.30
  category = new Categories.SodaCategory()
}

export class Fanta implements Product {
	name: string = "Fanta"
	price = 2
	category = new Categories.SodaCategory()
}

export class Sprite implements Product {
	name: string = "Sprite"
	price = 1.80
	category = new Categories.SodaCategory()
}

export class Peanuts implements Product {
	name: string = "Peanuts"
	price = 1.50
	category = new Categories.NutsCategory()
}

export class Cashews implements Product {
	name: string = "Cashews"
	price = 2.80
	category = new Categories.NutsCategory()
}

export class Plain implements Product {
	name: string = "Plain"
	price = 2
	category = new Categories.ChipsCategory()
}

export class Cheddar implements Product {
	name: string = "Cheddar"
	price = 2
	category = new Categories.ChipsCategory()
}

export class Mints implements Product {
	name: string = "Mints"
	price = 1.30
	category = new Categories.CandyCategory()
}

export class Gummies implements Product {
	name: string = "Gummies"
	price = 1.90
	category = new Categories.CandyCategory()
}

export class Hersey implements Product {
	name: string = "Hersey's"
	price = 1.30
	category = new Categories.CandyBarCategory()
}

export class MilkyWay implements Product {
	name: string = "Milky Way"
	price = 1.80
	category = new Categories.CandyBarCategory()
}


