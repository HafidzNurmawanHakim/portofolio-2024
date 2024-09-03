export function isChromeOrFirefox(): boolean {
   // Check if the user agent indicates a mobile device
   const isMobile: boolean = /Mobi|Android/i.test(navigator.userAgent);

   // If it's a mobile device, return false to ignore the browser check
   if (typeof window === "undefined" || typeof navigator === "undefined") {
      return false; // Code is running on the server or in a non-browser environment
   }
   if (isMobile) {
      return true;
   }

   // Check for Chrome or Firefox on non-mobile devices
   const isChrome: boolean =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
   const isFirefox: boolean = /Firefox/.test(navigator.userAgent);

   return isChrome ? true : false;
}
