import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';

const LoginForm = () => {
    return (
       <form className='space-y-4'>
        <Card className='p-4 space-y-4'>
            <Input name='email' type='email' placeholder='enter your email' required/>
            <Input name='password' type='password' placeholder='enter your password' required/>
            <Button type='submit'>
                Login
            </Button>
        </Card>
       </form>
    );
};

export default LoginForm;