export interface KYCResponse {
    createdAt: string;
    docType: string;
    document: string[];
    id: string;
    selfie: string;
    status: "rejected" | "pending" | "completed";
    userId: string;
}