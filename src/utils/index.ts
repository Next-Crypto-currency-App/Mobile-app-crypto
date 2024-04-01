export const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle('dark', shouldAdd);
    console.log(document.body.classList)
    localStorage.setItem('theme', shouldAdd ? 'dark' : 'light');

};

