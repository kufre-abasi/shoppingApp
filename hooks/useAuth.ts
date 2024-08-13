import { useState } from 'react';
import { registerEmail, verifyEmail,} from '../service/AuthService';

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRegisterEmail = async (emailData: any) => {
        setLoading(true);
        try {
            const response = await registerEmail(emailData);
            setLoading(false);
            return response.data;
        } catch (error:any) {
            setError(error.message);
            setLoading(false);
            throw error;
        }
    };

    const handleVerifyEmail = async (tokenData: any) => {
        setLoading(true);
        try {
            const response = await verifyEmail(tokenData);
            setLoading(false);
            return response.data;
        } catch (error:any) {
            setError(error.message);
            setLoading(false);
            throw error;
        }
    };

    return {
        loading,
        error,
        handleRegisterEmail,
        handleVerifyEmail,
      
    };
};
