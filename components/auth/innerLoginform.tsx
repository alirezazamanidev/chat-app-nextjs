'use client'
import { ErrorMessage, Form, FormikProps } from "formik";
import { Button } from "../ui/button";
import { CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function InnerLoginForm({setFieldValue}:FormikProps<any>) {
  return (
    
      <Form>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
            onChange={(e)=>setFieldValue('username',e.target.value)}
              id="username"
              type='text'
              placeholder="username"
              required
            />
            <ErrorMessage name="username" component='p' className=" text-red-600 my-2 text-sm"/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input onClick={(e:any)=>setFieldValue('password',e.target.value)} id="password" type="password" required />
            <ErrorMessage name="password" component='p' className=" text-red-600 my-2 text-sm"/>

          </div>
        </CardContent>
        <CardFooter>
          <Button type='submit' className="w-full">Sign in</Button>
        </CardFooter>
      </Form>
  );
}
