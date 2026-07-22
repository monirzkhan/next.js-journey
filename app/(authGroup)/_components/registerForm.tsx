"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

import { useActionState, useEffect } from 'react';
import { registerAction } from '../_actions/RegisterAction';
import { toast } from 'sonner';

const RegisterForm = () => {
    const [state, action, pending]=useActionState(registerAction, false)
   useEffect(()=>{
     if(!state){
        return
    }
    if(state.success){
        toast.success('Account Created Successfully')
    }
    if(!state.success){
        toast.error('Account is Not Created')
    }
   }, [state])
    return (
        <form action={action}  className='space-y-4'>
            <Card className='p-4 space-y-4'>
                <Input name='name' type='text' placeholder='enter your name' required />
                <Input name='email' type='email' placeholder='enter your email' required />
                <Input name='password' type='password' placeholder='enter your password' required />
                <Input name='profilePhoto' type='text' placeholder='enter your photo Url'  />
                <Input name='bio' type='text' placeholder='enter your bio'  />
                <Button type='submit'  className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150' >
                    {
                        pending? "Registering...":"Create Account"
                    }
                </Button>
                <p>
                    Already have account? <span>
                       <Link href={"/login"}>
                        <Button className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150' >
                            Login
                        </Button></Link>
                    </span>
                </p>
               
                 
            </Card>
        </form>
    );
};

export default RegisterForm;