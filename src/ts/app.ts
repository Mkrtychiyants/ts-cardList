import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225,true));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900,true));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900,true));
cart.add(new Movie(111,'Avengers','Мстители',190,2012,'USA','Avengers Assemble','action, fantasy, adventures', 137,false));
cart.add(new Movie(111,'Avengers','Мстители',190,2012,'USA','Avengers Assemble','action, fantasy, adventures', 137,false));

console.log(cart.items);

cart.deleteFromCart();
console.log(cart.items);

