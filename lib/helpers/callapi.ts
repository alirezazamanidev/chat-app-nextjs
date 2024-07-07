import axios from "axios";
import { UnauthorizedException } from "../execptions/UnauthorizedException";
import { ConflictException } from "../execptions/ConflictException";
import { ServerIntervalException } from "../execptions/ServerIntervalException";
import toast from "react-hot-toast";
import { NotFoundException } from "../execptions/NotFoundException";
import { BadRequestException } from "../execptions/BadRequestException";
import { GetCookie } from "./../utils";

export default function CallApi() {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    withCredentials: false,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      config.withCredentials = false;
      let token = GetCookie("jaapMedia_token");
      config.headers["authorization"] = `bearer ${token}`;

      return config;
    },
    (err) => {
      throw err;
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      const response = err.response;

      if (response.status === 400)
        throw new BadRequestException(response.data.errors.message);
      if (response.status === 401)
        throw new UnauthorizedException(response.data.errors.message);
      if (response.status === 409)
        throw new ConflictException(response.data.errors.message);

      if (response.status === 404)
        throw new NotFoundException(response.data.errors.message);
      if (response.status === 500) {
        toast.error("مشکلی پیش امد,لطفا دوباره تلاش کنید");
      }
      throw err;
    }
  );

  return axiosInstance;
}
