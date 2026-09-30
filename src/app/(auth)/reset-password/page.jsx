import React, { Suspense } from 'react';
import ResetPasswordForm from './reset-password-form';

const ResetPasswordPage = () => {
    return (
        <div>
            <h1>Reset Password</h1>
            <Suspense fallback="Loading..."></Suspense>

            <ResetPasswordForm></ResetPasswordForm>


        </div>
    );
};

export default ResetPasswordPage;