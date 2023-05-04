import Cart from '../service/Cart';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});
test('card should not be empty', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900,true));
  cart.add(new Movie(111,'Avengers','Мстители', 190, 2012,'USA','Avengers Assemble','action, fantasy, adventures', 137,true));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225,true));
  expect(cart.items.length).toBe(3);
});
test('adding digital content', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900,false));
  cart.add(new Movie(111,'Avengers','Мстители', 190, 2012,'USA','Avengers Assemble','action, fantasy, adventures', 137,false));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225,true));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225,true));
  expect(cart.items.length).toBe(3);
});
test('total sum', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900,true));
  cart.add(new Movie(111,'Avengers','Мстители', 190, 2012,'USA','Avengers Assemble','action, fantasy, adventures', 137,true));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225,true));
  expect(cart.totalSum()).toBe(3090);
});
test('discount sum', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900,true));
  cart.add(new Movie(111,'Avengers','Мстители', 190, 2012,'USA','Avengers Assemble','action, fantasy, adventures', 137,true));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225,true));
  expect(cart.discountTotal(10)).toBe(2781);
});
test('delete item', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900,true));
  cart.add(new Movie(111,'Avengers','Мстители', 190, 2012,'USA','Avengers Assemble','action, fantasy, adventures', 137,true));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225,true));
  cart.deleteItem(1008)
  expect(cart.items.length).toBe(2);
});
test('delete non-existent item', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900,true));
  cart.add(new Movie(111,'Avengers','Мстители', 190, 2012,'USA','Avengers Assemble','action, fantasy, adventures', 137,true));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225,true));
  expect(()=>cart.deleteItem(1)).toThrow();
});
test('deleting nondigital content', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225,true));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900,true));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900,true));
  cart.add(new Movie(111,'Avengers','Мстители',190,2012,'USA','Avengers Assemble','action, fantasy, adventures', 137,false));
  cart.add(new Movie(111,'Avengers','Мстители',190,2012,'USA','Avengers Assemble','action, fantasy, adventures', 137,false));
  cart.deleteFromCart();
  expect(cart.items.length).toBe(3);
});