

// function that take an object and stores locally
function setStorage(name: string, object: any) {
    if (typeof object === "object") {
        localStorage.setItem(name, JSON.stringify(object));
    } else if (typeof object === "string") {
        localStorage.setItem(name, object);
    }
}

//function that gets an object from local storage
function getStorage(name: string) {
    const result = localStorage.getItem(name);
    try {
        if (result) {
            return JSON.parse(result);
        }
    } catch (e) {
        return result;
    }
    return null;
}

//function that removes an object from local storage
function removeStorage(name: string) {
    localStorage.removeItem(name);
}


export { setStorage, getStorage, removeStorage };