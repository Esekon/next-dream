import '../components/Ordersection.css'; 

const OrderSection = () => {
  const people = [
    {
      name: 'John Doe',
      image: '../components/static/images/person1',
      phone: '+254 456 7890',
      gender: 'Male',
    },
    {
      name: 'Sarah Aregae',
      image: '/images/person2.jpg',
      phone: '+254 654 3210',
      gender: 'Female',
    },
    {
      name: 'Martin ethekon',
      image: '/images/person3.jpg',
      phone: '+456 789 1234',
      gender: 'Male',
    },
  ];

  return (
    <section className="order-section">
      <h2 className="section-title">OUR PERSONNEL</h2>
      <div className="card-row">
        {people.map((person, index) => (
          <div className="person-card" key={index}>
            <img src={person.image} alt={person.name} className="person-image" />
            <h4>{person.name}</h4>
            <p><strong>Phone:</strong> {person.phone}</p>
            <p><strong>Gender:</strong> {person.gender}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderSection;
