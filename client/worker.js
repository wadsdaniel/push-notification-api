self.addEventListener("push", e => {
    const data = e.data.json();
    self.registration.showNotification(
        data.title, // title of the notification
        {
            body: "A reminder to update your location details.", //the body of the push notification
            image: "resources/images/bell-jar-gbb4c2b869_640.png",
            icon: "resources/images/bell-jar-gbb4c2b869_640.png" // icon             
        }
    );
});