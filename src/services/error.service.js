import i18next from "i18next";
import { errorToaster } from "../helpers/toasterConfiguration";
import PathConstants from "../routes/pathConstants";

const ERROR_OBJECT = {
  400: "400Error",
  401: "401Error",
  403: "403Error",
  404: "404Error",
  500: "500Error",
};
export const handeleError = (error) => {
  const messageKey =
    error?.data?.Message ||
    error?.data?.message ||
    ERROR_OBJECT[error?.status] ||
    "500Error";
    errorToaster(i18next.t(messageKey));
    if ( error && error?.status === 401) {
     window.location.replace(PathConstants.LOGIN);
     return;
    }
     if (error && error?.status === 403){     
           window.location.replace(PathConstants.HOME);
     }
};
