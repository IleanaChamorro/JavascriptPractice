const d = document,
n = navigator,
ua = n.userAgent;
export default function userDeviceInfo(id){

    const $id = d.getElementById(id),
    isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone/ipad/ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function (){
            return this.android() || this.ios() || this.windows();
        },
    },
    isDesktop = {},
    isBrowser = {};

    console.log(ua);
}