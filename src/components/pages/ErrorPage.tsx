import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="h-[80%] bg-orange-100 px-8 py-20">
      <h1 className="text-xl">Oops!</h1>
      <p className="py-4 text-2xl font-bold">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to="/" className="btn-submit block px-12 text-center">
        Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
