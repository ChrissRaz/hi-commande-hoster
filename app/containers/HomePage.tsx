import React from 'react';
import { Link } from 'react-router-dom';
import routes from "@/constants/routes";


export default function HomePage() {
  return <div>HOME<Link to={routes.STARTSETTING}>Starter</Link>
  </div>;
}
