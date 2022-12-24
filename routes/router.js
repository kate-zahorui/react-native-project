import React from "react";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const useRoute = (isAuth) => {
  if (!isAuth) {
    return <PublicRoutes />;
  }

  return <PrivateRoutes />;
};

export default useRoute;
