
export function generateProductPage(product) {
    return `
        <h2>${product}</h2>
        <img src="https://via.placeholder.com/300" alt="${product}" />
        <p><strong>Description:</strong> This ${product.toLowerCase()} is designed with quality, durability, and comfort in mind. Perfect for everyday use.</p>
        <p><strong>Features:</strong></p>
        <ul>
            <li>High-grade materials</li>
            <li>Modern ergonomic design</li>
            <li>Fast, reliable shipping</li>
        </ul>
        <a href="#" style="color: lime;">Buy Now</a>
    `;
}
