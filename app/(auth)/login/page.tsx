import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/lib/forms/auth/loginForm";


export default function LoginPage(){

    return (
        <main className=" bg-gray-800 flex justify-center items-center h-screen">
            <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your userName below to login to your account.
        </CardDescription>
      </CardHeader>
      <LoginForm/>
     
    </Card>
        
        </main>
    )
}