'use client'
import InnerLoginForm from "@/components/auth/innerLoginform";
import { withFormik } from "formik";
import * as yup from "yup";

interface LoginFormValuuesInterFace {
  username: string;
  password: string;
}
interface LoginFormProps {}
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
  handleSubmit: (values) => {
    console.log(values);
    
  },
})(InnerLoginForm);

export default LoginForm