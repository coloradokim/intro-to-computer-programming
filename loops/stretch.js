var price = [100, 924, 743, 1846];

var item = [{
  name: 'Samsung Galaxy 8',
  price: 700
}, {
  name: 'iPhone 8',
  price: 1000
}];

function showItems(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].price <= 900) {
      console.log(array[i]);
    } else {
      console.log('That is too expensive');
    }
  };
};

showItems(item)
