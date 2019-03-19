import { SIGN_IN, SIGN_OUT } from './types';

// TODO: Replace with OAuth sign-in, custom user, password encryption

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
