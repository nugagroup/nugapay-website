// export const appLink = 'https://www.dropbox.com/scl/fi/0lmgog060300ca1lgb4za/nugapay-app-release.apk?rlkey=cf21w8hc7z7irmhqjutnqhrf2&st=pt0mjx9u&dl=1';
export const appLink = "https://www.dropbox.com/scl/fi/xzv8d0gc0skycg9j8iy61/nugapay-app.apk?rlkey=zq03fn924izi9vuil55b5no2z&st=dmzwnwkv&dl=1";

export function downloadApp() {
    if(typeof window !== 'undefined'){
        window.open(appLink, "_self");
    }
}

export function dashboardLink() {
    if(typeof window !== 'undefined'){
        window.location.href = "https://dash.nugapay.com/";
    }
}