export const appLink = 'https://www.dropbox.com/scl/fi/0lmgog060300ca1lgb4za/nugapay-app-release.apk?rlkey=cf21w8hc7z7irmhqjutnqhrf2&st=pt0mjx9u&dl=1';

export function downloadApp() {
    if(typeof window !== 'undefined'){
        window.open(appLink, "_self");
    }
}