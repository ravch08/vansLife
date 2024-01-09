import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="container py-4 text-center text-sm text-white">
        © <Link to="/">VANLIFE</Link>. ALll rights reserved!
      </div>
    </footer>
  );
};

export default Footer;
