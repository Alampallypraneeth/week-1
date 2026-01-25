//Deep Copy
//given data:
const order = {orderId: "ORD1001",customer: {name: "Anita",address: {city: "Hyderabad",pincode: 500085}},items: [{ product: "Laptop", price: 70000 }]};
//create a deep copy of order
const deepCopiedOrder = JSON.parse(JSON.stringify(order));
console.log("Deep Copied Order:", deepCopiedOrder);
//making modifications
//customer.address.copy
deepCopiedOrder.customer.address.city = "Bangalore";
console.log("Updated City in Copied Object:", deepCopiedOrder.customer.address.city);
//items[0].price
deepCopiedOrder.items[0].price = 65000;
console.log("Updated Price in Copied Object:", deepCopiedOrder.items[0].price);
//verify original object remains unchanged
console.log("Original Order:", order);
console.log("Deep Copied Order After Modifications:", deepCopiedOrder);
//Observe that changes in deepCopiedOrder do not affect order
//Original Order: { orderId: 'ORD1001', customer: { name: 'Anita', address: { city: 'Hyderabad', pincode: 500085 } }, items: [ { product: 'Laptop', price: 70000 } ] }
//Deep Copied Order After Modifications: { orderId: 'ORD1001', customer: { name: 'Anita', address: { city: 'Bangalore', pincode: 500085 } }, items: [ { product: 'Laptop', price: 65000 } ] }