import CryptoJS from 'crypto-js';



const encryptData = async (data: any) => {
    if (data) {
        const encrypted = CryptoJS.AES.encrypt(
            JSON.stringify(data),
            import.meta.env.VITE_ENCRYPTION_KEY,
            {
                keySize: 128 / 8,
                iv: CryptoJS.enc.Hex.parse(import.meta.env.VITE_ENCRYPTION_IV),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7,
            },
        ).toString();
        return {
            data: { key: import.meta.env.VITE_ENCRYPTION_IV, data: encrypted }.data,
        };
    }
    return data
};

const decryptData = async (payload: any) => {
    if (payload) {
        const decrypted = await JSON.parse(
            CryptoJS.enc.Utf8.stringify(
                CryptoJS.AES.decrypt(payload.data, import.meta.env.VITE_ENCRYPTION_KEY, {
                    keySize: 128 / 8,
                    iv: CryptoJS.enc.Hex.parse(import.meta.env.VITE_ENCRYPTION_IV),
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                }),
            ),
        );

        return decrypted;
    }
    return payload;
};

export { encryptData, decryptData };