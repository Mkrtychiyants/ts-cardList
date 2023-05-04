import Book from '../domain/Book';
import Buyable from '../domain/Buyable';


export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (item.isDigital) {
            this.itemSearch(item);
        } else {
            this._items.push(item);
        }
       
    }
    itemSearch(item:Buyable):void {
        if(!this._items.find(value=>value.id == item.id)){
            this._items.push(item);
        }
    }
    deleteFromCart():void {
        let IDs = this._items.map(item => item.id)
        let idSet = Array.from(new Set(IDs));//уникальные id
        let res;
        for (let index = 0; index < idSet.length; index++) { //удаляет один повторяющийся элемент 
            const element = idSet[index];
            res = this._items.filter(val => val.id == element);
            if(res.length>1){
                this.deleteItem(res[0].id)
            }
        }
       
    }

    totalSum():number {
        return this._items.reduce((sum,cur) => sum + cur.price, 0);
    }
    discountTotal(disc: number):number {
        let sum = this._items.reduce((sum,cur) => sum + cur.price, 0);
       return  sum - ((sum * disc)/100);
    }
    deleteItem(itemId: number):void {
        if ((this._items.findIndex(item2=>item2.id==itemId))!= -1) {
            this._items.splice((this._items.findIndex(item2=>item2.id==itemId)),1)
        } else {
            throw new Error('no such an element')
        }
    }
    get items(): Buyable[] {
        return [...this._items]; 
    }
}