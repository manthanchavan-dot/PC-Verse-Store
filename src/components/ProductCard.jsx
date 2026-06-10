export function ProductCard() {
  const photo = (id) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

  const fallbacks = {
    Processor: photo("1756083895945-a37995995b2a"),
    RAM: photo("1541029071515-84cc54f84dc5"),
    "Cooling Fan": photo("1727176763565-1d983341bb95"),
    Keyboard: photo("1618384887929-16ec33fab9ef"),
    "Graphics Card": photo("1555618254-84e2cf498b01"),
    Motherboard: photo("1712701815718-29f5fe510c0e"),
    SSD: photo("1760623227551-2eae8f9cb675"),
    Mouse: photo("1527814050087-3793815479db"),
  };

  const products = [
    { category: "Processor", name: "Intel Core i9 Processor", price: "Rs. 39,999", image: photo("1756083895945-a37995995b2a") },
    { category: "Processor", name: "Intel Core i7 Processor", price: "Rs. 29,999", image: photo("1581092921461-eab62e97a780") },
    { category: "Processor", name: "AMD Ryzen 9 Processor", price: "Rs. 37,999", image: photo("1731519150907-14dc8f331902") },
    { category: "Processor", name: "AMD Ryzen 7 Processor", price: "Rs. 27,999", image: photo("1518770660439-4636190af475") },

    { category: "RAM", name: "Corsair Vengeance 32GB RAM", price: "Rs. 8,999", image: photo("1541029071515-84cc54f84dc5") },
    { category: "RAM", name: "Kingston Fury 16GB RAM", price: "Rs. 4,499", image: photo("1597138804456-e7dca7f59d0f") },
    { category: "RAM", name: "G.Skill Trident Z 32GB RAM", price: "Rs. 10,999", image: photo("1587202372634-32705e3bf49c") },
    { category: "RAM", name: "Crucial 8GB DDR4 RAM", price: "Rs. 2,199", image: photo("1581092335397-9583eb92d232") },

    { category: "Cooling Fan", name: "RGB Cooling Fan", price: "Rs. 2,499", image: photo("1727176763565-1d983341bb95") },
    { category: "Cooling Fan", name: "Liquid CPU Cooler", price: "Rs. 7,999", image: photo("1749135615826-c1ac84dcdba8") },
    { category: "Cooling Fan", name: "Air Tower Cooler", price: "Rs. 3,999", image: photo("1606904825846-647eb07f5be2") },
    { category: "Cooling Fan", name: "Triple Fan Cabinet Kit", price: "Rs. 3,499", image: photo("1714562159274-8f2758cde981") },

    { category: "Keyboard", name: "Mechanical Keyboard", price: "Rs. 4,999", image: photo("1618384887929-16ec33fab9ef") },
    { category: "Keyboard", name: "RGB Gaming Keyboard", price: "Rs. 3,299", image: photo("1541140532154-b024d705b90a") },
    { category: "Keyboard", name: "Wireless Keyboard", price: "Rs. 2,499", image: photo("1587829741301-dc798b83add3") },
    { category: "Keyboard", name: "Compact 60% Keyboard", price: "Rs. 5,499", image: photo("1637243218672-d338945efdf7") },

    { category: "Graphics Card", name: "NVIDIA RTX 4070 GPU", price: "Rs. 62,999", image: photo("1555618254-84e2cf498b01") },
    { category: "Graphics Card", name: "NVIDIA RTX 4060 GPU", price: "Rs. 32,999", image: photo("1555618565-9f2b0323a10d") },
    { category: "Graphics Card", name: "AMD Radeon RX 7800 XT", price: "Rs. 54,999", image: photo("1614710630058-873e38ad01e1") },
    { category: "Graphics Card", name: "AMD Radeon RX 7600", price: "Rs. 26,999", image: photo("1615414047026-802692414bde") },

    { category: "Motherboard", name: "ASUS Gaming Motherboard", price: "Rs. 18,499", image: photo("1712701815718-29f5fe510c0e") },
    { category: "Motherboard", name: "MSI B650 AMD Motherboard", price: "Rs. 16,999", image: photo("1550751827-4bd374c3f58b") },
    { category: "Motherboard", name: "Gigabyte Z790 Motherboard", price: "Rs. 22,999", image: photo("1518770660439-4636190af475") },
    { category: "Motherboard", name: "ASRock B550 AMD Motherboard", price: "Rs. 11,999", image: photo("1591799264318-7e6ef8ddb7ea") },

    { category: "SSD", name: "1TB NVMe SSD", price: "Rs. 6,999", image: photo("1760623227551-2eae8f9cb675") },
    { category: "SSD", name: "500GB NVMe SSD", price: "Rs. 3,499", image: photo("1628557044797-f21a177c37ec") },
    { category: "SSD", name: "2TB Gen4 NVMe SSD", price: "Rs. 13,999", image: photo("1614064641938-3bbee52942c7") },
    { category: "SSD", name: "1TB SATA SSD", price: "Rs. 5,499", image: photo("1601737487795-dab272f52420") },

    { category: "Mouse", name: "Gaming Mouse", price: "Rs. 2,199", image: photo("1527814050087-3793815479db") },
    { category: "Mouse", name: "Wireless Gaming Mouse", price: "Rs. 3,499", image: photo("1615663245857-ac93bb7c39e7") },
    { category: "Mouse", name: "Lightweight FPS Mouse", price: "Rs. 4,299", image: photo("1586816879360-004f5b0c51e3") },
    { category: "Mouse", name: "RGB MMO Mouse", price: "Rs. 2,999", image: photo("1605773527852-c546a8584ea3") },
  ];

  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.name}>
            <img
              className="product-image"
              src={item.image}
              alt={item.name}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(event) => {
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
