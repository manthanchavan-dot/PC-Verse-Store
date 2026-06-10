export function Categories() {
  const data = [
    "Processors",
    "RAM",
    "Cooling Fans",
    "Keyboards",
    "Graphics Cards",
    "Motherboards",
  ];

  return (
    <section className="categories">
      <h2>Categories</h2>

      <div className="category-grid">
        {data.map((item) => (
          <div className="category-card" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;