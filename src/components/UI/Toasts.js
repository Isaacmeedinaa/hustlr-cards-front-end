import $ from "jquery";

export const showToast = function displayNotification(success, message) {
  
  const myToast = $("body").toast({
    class: success ? "success" : "error",
    position: "bottom center",
    message: message,
    showIcon: success ? "check circle" : "exclamation",
    displayTime: 3000
  });

  const toasts = myToast.toast('get toasts');
  
  // remove other toasts on page
  for (let i = 0; i < toasts.length; i++) {
    if (i !== toasts.length - 1) {
      toasts[i].parentNode.removeChild(toasts[i]);
    }
  }
}