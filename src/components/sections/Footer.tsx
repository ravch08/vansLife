import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto bg-gray-800 py-4 text-center text-sm text-white">
        ©{" "}
        <Link to="/" className="text-orange-500">
          VANLIFE
        </Link>{" "}
        | All rights reserved!
      </div>
    </footer>
  );
};

export default Footer;
