import SetPinPage from "./SetPinPage";
import UploadDocuments from "./UploadDocuments";
import TwoFA from "./twoFA";

export const securityPages = {

    uploadDocuments: {
        name: "KYC Verification",
        url: "/upload-documents",
        page: UploadDocuments
    },
    setPin: {
        name: "PIN",
        url: "/set-pin",
        page: SetPinPage
    },
    twoFA: {
        name: "2FA",
        url: "/2FA",
        page: TwoFA
    },

}