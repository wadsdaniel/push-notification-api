self.addEventListener("push", e => {
    const data = e.data.json();
    self.registration.showNotification(
        data.title, // title of the notification
        {
            body: "Check out our new discounts!", //the body of the push notification
            image: "resources/images/bell-jar-gbb4c2b869_640.png",
            icon: "resources/images/bell-jar-gbb4c2b869_640.png" // icon             
        }
    );
});