import { ReactNode } from "react";
import IBreadcrumb from "./IBreadcrumb";

interface IRoutes {
  path: string,
  component: ReactNode,
  roleAllowed: Array<string>,
  title: string,
  breadcrumb: Array<IBreadcrumb>
}

export default IRoutes;