export function setCookie(name: string, value: string) {
    document.cookie = name + '=' + value;
}

export function getCookie(name: string) {
    const key = name + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while(c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if(c.indexOf(key) === 0) {
            return c.substring(key.length, c.length);
        }
    }
    return '';
}

export function eraseCookie(name: string) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}