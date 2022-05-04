export default class ItemArray extends Array {

    findByName(itemName:string):object {
        return this.find((item:any) => item.name == itemName)
    }

}