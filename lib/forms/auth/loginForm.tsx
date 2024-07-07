'use client'
import InnerLoginForm from "@/components/auth/innerLoginform";
import { UnauthorizedException } from "@/lib/execptions/UnauthorizedException";
import { StoreCookieForLogin } from "@/lib/helpers/auth";
import CallApi from "@/lib/helpers/callapi";
import { withFormik } from "formik";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import * as yup from "yup";

interface LoginFormValuuesInterFace {
  username: string;
  password: string;
}
interface LoginFormProps {
    router:AppRouterInstance
}
const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(8).max(20),
});
const LoginForm = withFormik<LoginFormProps, LoginFormValuuesInterFace>({
  mapPropsToValues: (props) => ({
    username: "",
    password: "",
  }),
  validationSchema,
  handleSubmit:async (values,{props}) => {
    try {
        const res=await CallApi().post('/auth/login',values);
        console.log(values);
        
        if(res.status===200){
            await StoreCookieForLogin(res.data.token)
            await props.router.push('/')
            toast.success(res.data?.message);
        }
    } catch (error) {
        if(error instanceof UnauthorizedException){
            toast.error(error.message);
        }
        
    }
    
  },
})(InnerLoginForm);

export default LoginForm