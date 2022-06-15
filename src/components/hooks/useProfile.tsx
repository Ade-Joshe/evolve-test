import { useUser, useBank, useMandate } from './';

export const useProfile = () => {

    const user = useUser();
    const bank = useBank();
    const mandate = useMandate();

    return {
        user,
        bank,
        mandate
    }
}
