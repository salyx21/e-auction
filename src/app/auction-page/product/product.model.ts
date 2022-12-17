export class Product {
    constructor(public id: string, public name: string,public description: string,public detailedDesc: string,public category: string,public startingPrice: number,public endDate: string,public img: string, public bidHistory: {price: number, name: string, email: string, mobile: string}[]){}
}