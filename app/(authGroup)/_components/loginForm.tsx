"use client"

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import  { useActionState, useEffect } from 'react';
import { loginAction } from '../_actions/AuthAction';
import { toast } from 'sonner';
import Link from 'next/link';



const LoginForm = () => {
    const [state, action, pending] = useActionState(loginAction, false)
    // const router=useRouter()

    useEffect(() => {
        if (!state) {
            return
        }

        // if(state.success){
        //     toast.success(state.message || "Login Successful", {position:'top-right'});
        //     // router.push("/tenant-dashboard")
        // }
        if (!state.success) {
            toast.error(state.message || "Login failed", {position:'top-left'});
        }
    }, [state])
    return (
        <form action={action} className='space-y-4'>
            <Card className='p-4 space-y-4'>
                <Input name='email' type='email' placeholder='enter your email' required />
                <Input name='password' type='password' placeholder='enter your password' required />
                <Button type='submit'  >
                    {
                        pending ? "Submitting" : "Login"
                    }
                </Button>
                <p>
                    Don not have account? <span>
                       <Link href={"/register"}>
                        <Button >
                            Register
                        </Button></Link>
                    </span>
                </p>
               
                 
            </Card>
        </form>
    );
};

export default LoginForm;