import { NavLink, Outlet, useParams } from "react-router-dom";

const Host = () => {
  const params = useParams();

  console.log(params);

  return (
    <main>
      <div className="container mx-auto h-[760px] bg-orange-100 px-8 py-12">
        <section className="flex items-center gap-4">
          <NavLink to="" className="host-navlink" end>
            Dashboard
          </NavLink>
          <NavLink to="income" className="host-navlink">
            Income
          </NavLink>
          <NavLink to="vans" className="host-navlink">
            Vans
          </NavLink>
          <NavLink to="reviews" className="host-navlink">
            Reviews
          </NavLink>
        </section>
        <Outlet />
      </div>
    </main>
  );
};

export default Host;
