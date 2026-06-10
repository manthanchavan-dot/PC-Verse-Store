export function ProductCard() {
  const productImage = (query) => {
    const cleanQuery = encodeURIComponent(`${query} official product photo`);
    return `https://tse1.mm.bing.net/th?q=${cleanQuery}&w=900&h=650&c=7&rs=1&p=0&o=5&pid=1.7`;
  };

  const fallbacks = {
    Processor: productImage("desktop CPU processor close up"),
    RAM: productImage("desktop DDR4 RAM memory module"),
    "Cooling Fan": productImage("RGB PC cooling fan"),
    Keyboard: productImage("mechanical gaming keyboard"),
    "Graphics Card": productImage("desktop graphics card GPU"),
    Motherboard: productImage("gaming motherboard"),
    SSD: productImage("NVMe SSD drive"),
    Mouse: productImage("gaming mouse"),
  };

  const imageQueries = {
    "Intel Core i9 Processor": "Intel Core i9 desktop processor",
    "Intel Core i7 Processor": "Intel Core i7 desktop processor",
    "AMD Ryzen 9 Processor": "AMD Ryzen 9 desktop processor",
    "AMD Ryzen 7 Processor": "AMD Ryzen 7 desktop processor",
    "Corsair Vengeance 32GB RAM": "Corsair Vengeance 32GB DDR4 RAM kit",
    "Kingston Fury 16GB RAM": "Kingston FURY 16GB DDR4 RAM module",
    "G.Skill Trident Z 32GB RAM": "G.Skill Trident Z 32GB RAM kit",
    "Crucial 8GB DDR4 RAM": "Crucial 8GB DDR4 RAM module",
    "RGB Cooling Fan": "RGB PC case cooling fan",
    "Liquid CPU Cooler": "AIO liquid CPU cooler radiator",
    "Air Tower Cooler": "tower air CPU cooler heatsink",
    "Triple Fan Cabinet Kit": "three pack RGB PC case fans",
    "Mechanical Keyboard": "mechanical keyboard",
    "RGB Gaming Keyboard": "RGB gaming keyboard",
    "Wireless Keyboard": "wireless keyboard",
    "Compact 60% Keyboard": "compact 60 percent mechanical keyboard",
    "NVIDIA RTX 4070 GPU": "NVIDIA GeForce RTX 4070 graphics card",
    "NVIDIA RTX 4060 GPU": "NVIDIA GeForce RTX 4060 graphics card",
    "AMD Radeon RX 7800 XT": "AMD Radeon RX 7800 XT graphics card",
    "AMD Radeon RX 7600": "AMD Radeon RX 7600 graphics card",
    "ASUS Gaming Motherboard": "ASUS ROG gaming motherboard",
    "MSI B650 AMD Motherboard": "MSI B650 AMD motherboard",
    "Gigabyte Z790 Motherboard": "Gigabyte Z790 motherboard",
    "ASRock B550 AMD Motherboard": "ASRock B550 AMD motherboard",
    "1TB NVMe SSD": "1TB NVMe M.2 SSD",
    "500GB NVMe SSD": "500GB NVMe M.2 SSD",
    "2TB Gen4 NVMe SSD": "2TB Gen4 NVMe M.2 SSD",
    "1TB SATA SSD": "1TB 2.5 inch SATA SSD",
    "Gaming Mouse": "wired gaming mouse",
    "Wireless Gaming Mouse": "wireless gaming mouse",
    "Lightweight FPS Mouse": "lightweight FPS gaming mouse",
    "RGB MMO Mouse": "RGB MMO gaming mouse",
  };

  const products = [
    { category: "Processor", name: "Intel Core i9 Processor", price: "Rs. 39,999" },
    { category: "Processor", name: "Intel Core i7 Processor", price: "Rs. 29,999" },
    { category: "Processor", name: "AMD Ryzen 9 Processor", price: "Rs. 37,999" },
    { category: "Processor", name: "AMD Ryzen 7 Processor", price: "Rs. 27,999" },
    { category: "RAM", name: "Corsair Vengeance 32GB RAM", price: "Rs. 8,999" },
    { category: "RAM", name: "Kingston Fury 16GB RAM", price: "Rs. 4,499" },
    { category: "RAM", name: "G.Skill Trident Z 32GB RAM", price: "Rs. 10,999" },
    { category: "RAM", name: "Crucial 8GB DDR4 RAM", price: "Rs. 2,199" },
    { category: "Cooling Fan", name: "RGB Cooling Fan", price: "Rs. 2,499" },
    { category: "Cooling Fan", name: "Liquid CPU Cooler", price: "Rs. 7,999" },
    { category: "Cooling Fan", name: "Air Tower Cooler", price: "Rs. 3,999" },
    { category: "Cooling Fan", name: "Triple Fan Cabinet Kit", price: "Rs. 3,499" },
    { category: "Keyboard", name: "Mechanical Keyboard", price: "Rs. 4,999" },
    { category: "Keyboard", name: "RGB Gaming Keyboard", price: "Rs. 3,299" },
    { category: "Keyboard", name: "Wireless Keyboard", price: "Rs. 2,499" },
    { category: "Keyboard", name: "Compact 60% Keyboard", price: "Rs. 5,499" },
    { category: "Graphics Card", name: "NVIDIA RTX 4070 GPU", price: "Rs. 62,999" },
    { category: "Graphics Card", name: "NVIDIA RTX 4060 GPU", price: "Rs. 32,999" },
    { category: "Graphics Card", name: "AMD Radeon RX 7800 XT", price: "Rs. 54,999" },
    { category: "Graphics Card", name: "AMD Radeon RX 7600", price: "Rs. 26,999" },
    { category: "Motherboard", name: "ASUS Gaming Motherboard", price: "Rs. 18,499" },
    { category: "Motherboard", name: "MSI B650 AMD Motherboard", price: "Rs. 16,999" },
    { category: "Motherboard", name: "Gigabyte Z790 Motherboard", price: "Rs. 22,999" },
    { category: "Motherboard", name: "ASRock B550 AMD Motherboard", price: "Rs. 11,999" },
    { category: "SSD", name: "1TB NVMe SSD", price: "Rs. 6,999" },
    { category: "SSD", name: "500GB NVMe SSD", price: "Rs. 3,499" },
    { category: "SSD", name: "2TB Gen4 NVMe SSD", price: "Rs. 13,999" },
    { category: "SSD", name: "1TB SATA SSD", price: "Rs. 5,499" },
    { category: "Mouse", name: "Gaming Mouse", price: "Rs. 2,199" },
    { category: "Mouse", name: "Wireless Gaming Mouse", price: "Rs. 3,499" },
    { category: "Mouse", name: "Lightweight FPS Mouse", price: "Rs. 4,299" },
    { category: "Mouse", name: "RGB MMO Mouse", price: "Rs. 2,999" },
  ];

  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.name}>
            <img
              className="product-image"
              src={productImage(imageQueries[item.name] || item.name)}
              alt={item.name}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(event) => {
                if (event.currentTarget.dataset.fallbackLoaded) return;
                event.currentTarget.dataset.fallbackLoaded = "true";
                event.currentTarget.src = fallbacks[item.category];
              }}
            />

            <span className="product-category">{item.category}</span>
            <h3>{item.name}</h3>
            <p>{item.price}</p>

            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCard;
