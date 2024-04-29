import { ToastOptions } from "@ionic/react";
import { HookOverlayOptions } from "@ionic/react/dist/types/hooks/HookOverlayOptions";
import { decryptData } from "./encryption";

interface Toast {
    (message: string, duration?: number | undefined): Promise<void>;
    (options: ToastOptions & HookOverlayOptions): Promise<void>;
}

export function onResult(res: any, toast: Toast, toDo?: (result?: any) => void) {
    console.log(res)
    if (res && res.success) {
        toDo && toDo();
        return res
    } else {
        console.log(res)
        toast({ message: res.message || "Unexpected error occured. please contact support", color: 'danger', duration: 4000 })
        false;
    }
}


export async function handleError(err: any, toast: Toast) {
    console.log(err)
    console.log(decryptData(err.response?.data))
    toast({ message: await decryptData(err.response?.data) || "Unexpected error occured. please contact support", color: 'danger', duration: 4000 })
    return false;

}