// src/components/ProductList.jsx
const products = [
    { id: 1, name: "Sneaker S1", price: "299.700 đ", oldPrice: "999.000 đ", discount: "70%", imgSrc: "/path/to/image1.jpg" },
    { id: 2, name: "Sneaker Chunky", price: "299.700 đ", oldPrice: "999.000 đ", discount: "70%", imgSrc: "/path/to/image2.jpg" },
    // add more products
];

const ProductList = () => {
    return (
        <section className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.imgSrc} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}</p>
                    <p>Old Price: {product.oldPrice}</p>
                    <p>Discount: {product.discount}</p>
                </div>
            ))}
        </section>
    );
};

export default ProductList;
