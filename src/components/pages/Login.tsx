import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-[80%] bg-white">
      <div className="px-8 py-12">
        <h2 className="font-h2 mb-8 text-center">Sign in to your Account</h2>
        <form>
          <label htmlFor="loginEmail">
            <input
              type="email"
              id="loginEmail"
              placeholder="Email Address"
              className="form-input"
            />
          </label>
          <label htmlFor="loginPassword">
            <input
              type="password"
              id="loginPassword"
              placeholder="Password"
              className="form-input"
            />
          </label>

          <button type="submit" className="btn-submit">
            Sign In
          </button>
        </form>

        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-orange-600 transition-colors duration-500 ease-in-out hover:text-orange-300"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
