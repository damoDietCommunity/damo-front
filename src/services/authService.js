import axios from 'axios';

export const refresh = async (refreshToken) => {
    try {
        const response = await axios.post("/auth/reissue", {}, {
            headers: {
                "Refresh-Token": `Bearer ${refreshToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(`refresh error: `, error);
    }
}

export const login = async({name, password}) => {
    try {
        const response = await axios.post('/auth/login', { name, password });
        return response.data;
    } catch (error) {
        console.error(`login error: `, error);
    }
}

export const sendEmail = async({email}) => {
    try {
        await axios.post('/auth/signup/email/send', { email });
    } catch (error) {
        console.error(`sendEmail error: `, error);
    }
}

export const signup = async({email, name, password, verificationCode}) => {
    try {
        await axios.post('/auth/signup', {email, name, password, verificationCode});
    } catch (error) {
        console.error(`signup error: `, error);
    }
}
