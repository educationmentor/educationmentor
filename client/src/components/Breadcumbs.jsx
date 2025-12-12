"use client";

import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pathSegments = pathname.split("/").filter(segment => segment);

  // Custom mapping for specific route names
  const breadcrumbNames = {
    dashboard: "Dashboard",
    products: "Products",
    aboutUs: "About Us",
    contact: "Contact Us",
    admin: "Admin",
    "study-in-usa":'Study in USA',
    "study-in-germany":'Study in Germany',
  };

  return (
    <nav aria-label="breadcrumb" className="text-black text-tinyTextPhone md:text-regularText">
      <ul className="flex flex-wrap items-center">
        <li className="hover:underline">
          <Link to="/">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="font-semibold">
                  {breadcrumbNames[segment] ?? segment[0].toUpperCase() + segment.substring(1)}
                </span>
              ) : (
                <Link to={href} className="hover:underline">
                  {breadcrumbNames[segment] ?? segment[0].toUpperCase() + segment.substring(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
