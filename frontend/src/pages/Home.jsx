import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
  return (
    <div style={{ padding: 24 }}>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Home;