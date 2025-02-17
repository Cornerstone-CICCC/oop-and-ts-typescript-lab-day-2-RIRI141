// 📦 Inventory Management System
// 🛒 Create a system to manage a store’s inventory.
//
// 1. Implement a class `InventoryManager<T>` that manages stock for different product types.
// 2. Implement a method `addProduct` that adds a new product to the inventory. It should return a confirmation string.
// 3. Implement a method `updateProduct` that updates an existing product’s details. It should return a confirmation string. Use the Partial type for the update parameter since not all details will be updated.
// 4. Implement a method `removeProduct` that removes a product from the inventory and returns a confirmation string.
// 5. Implement a method `getProduct` that retrieves a product by its ID.
// 6. Implement a method `getAllProducts` that returns the list of all products.

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

class InventoryManager<T extends Product> {
  products: T[] = []
  addProduct(product: T): string {
    this.products.push(product)
    return `Product ${product.name} added successfully!`
  }

  updateProduct(id: number, update: Partial<T>): string {
    const product = this.products.find((product: Product) => product.id === id);
    Object.assign(product, update)
    if(!product) return `Product not found`
    return `Product ${id} updated successfully!`;
    //ここの確認
  }

  getProduct(id: number): Product | string{
    const product = this.products.find((product: Product) => product.id === id);
    if(!product) return `Product not found`
    return product;
  }

  getAllProducts(): T[] {
    return this.products
  }

  removeProduct(id: number): string {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );
    this.products.splice(productIndex, 1);
    return `Product ${id} removed successfully!`;
  }
}

// Test cases
const inventory = new InventoryManager();

console.log(inventory.addProduct({ id: 1, name: "Laptop", price: 1000, stock: 5 })); // "Product Laptop added successfully!"
console.log(inventory.addProduct({ id: 2, name: "Mouse", price: 20, stock: 50 })); // "Product Mouse added successfully!"
console.log(inventory.updateProduct(1, { price: 900 })); // "Product 1 updated successfully!"
console.log(inventory.getProduct(1)); // { id: 1, name: "Laptop", price: 900, stock: 5 }
console.log(inventory.getAllProducts()); // List of all products
console.log(inventory.removeProduct(1)); // "Product 1 removed successfully!"
console.log(inventory.getProduct(1)); // "Product not found"