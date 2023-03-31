class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // validación vista en el after
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log('Error: Todos los campos son obligatorios');
        return;
      }
  
      // para que no se repita code
      if (this.products.some(product => product.code === code)) {
        console.log('Error: Ya existe un producto con ese código identificador');
        return;
      }
  
      // nuevo producto
      const newProduct = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      // agregamos 1 producto
      this.products.push(newProduct);
  
      console.log('Producto agregado correctamente:', newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductsById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (!product) {
        console.log('Error: Producto no encontrado');
        return;
      }
  
      return product;
    }
  }
  

  // lo llamamos
  const productManager = new ProductManager();

  productManager.addProduct('Producto 1', 'Descripción del producto 1', 10.99, 'https://ejemplo.com/imagen1.jpg', '1234', 100);
  productManager.addProduct('Producto 2', 'Descripción del producto 2', 19.99, 'https://ejemplo.com/imagen2.jpg', '5678', 50);
  productManager.addProduct('Producto 3', 'Descripción del producto 3', 7.99, 'https://ejemplo.com/imagen3.jpg', '9012', 200);
  
  console.log(productManager.getProducts());
  
  console.log(productManager.getProductsById(2));
  console.log(productManager.getProductsById(4));
    