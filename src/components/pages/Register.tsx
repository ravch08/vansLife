import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-[80%] bg-white">
      <div className="px-8 py-12">
        <h2 className="font-h2 mb-8 text-center">Register your Account</h2>
        <form>
          <label htmlFor="signupEmail">
            <input
              type="email"
              id="signupEmail"
              className="form-input"
              placeholder="Email Address"
            />
          </label>
          <label htmlFor="signupPassword">
            <input
              type="password"
              id="signupPassword"
              className="form-input"
              placeholder="Password"
            />
          </label>

          <button type="submit" className="btn-submit">
            Register
          </button>
        </form>

        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-orange-600 transition-colors duration-500 ease-in-out hover:text-orange-300"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
