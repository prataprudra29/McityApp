import Cookies from "js-cookie";

export const getToken = () => {
  let token = Cookies.get("token");
  let validToken = "";
  if (token) {
    validToken = token.split("neb")[1];
    validToken = validToken?.split("la")[0];
  } else {
    validToken = "";
  }
  return validToken;
};
