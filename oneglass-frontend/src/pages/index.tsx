import Link from "next/link";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Welcome to ONEGLASS.io Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link href="/forecast">
              <span className="text-blue-600 cursor-pointer">Forecast</span>
            </Link>
          </li>
          <li>
            <Link href="/inventory">
              <span className="text-blue-600 cursor-pointer">Inventory</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
