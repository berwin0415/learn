import React from "react";
import { renderRoutes } from "react-router-config";

export default function Root(props) {
  return <>{renderRoutes(props.route.routes)}</>;
}
