// To add a new type with a new color in the NotifyService code, you can follow these steps:

// Inside the NotifyService class, locate the types array in the notification object. This array holds the different notification types with their configurations.

// To add a new type, you need to create a new object within the types array. This object represents the configuration for the new type.

// Define the properties for the new type:

// type: Specify the type name. This is used to identify the type when calling notification methods.
// background: Set the color for the notification background.
// icon: Optionally, set whether to display an icon for this type. Set it to true to display an icon or false to hide it.
// Here's an example of adding a new type with a different color:

import { Notyf } from "notyf";

class NotifyService {
  private notification = new Notyf({
    duration: 4000,
    position: { x: "center", y: "top"},
    types: [
      {
        type: "success",
        background: "green",
        icon: false,
      },
      {
        type: "error",
        background: "red",
        icon: false,
      },
      {
        type: "info",
        background: "orange",
        icon: false,
      },
    ],
  });


//   In the example above, we added a new type called "success" with a green background color and an icon. You can adjust the color and icon properties according to your preferences.

// After adding the new type, you can use it in the NotifyService methods, such as success, error, or info, by specifying the type parameter accordingly:
  
public success(message: string): void {
    this.notification.success(message);
  }

  public error(err: any): void {
    const errorMessage = this.extractMessage(err);
    this.notification.error(errorMessage);
  }

  public info(message: string): void {
    this.notification.open({
      type: "info",
      message: message,
    });
  }

  private extractMessage(err: any): string {
    if (typeof err === "string") return err;
    if (typeof err.response?.data === "string") return err.response.data;
    if (typeof err.message === "string") return err.message;
    return "Some error occurred, please try again";
  }
}

const notifyService = new NotifyService();

export default notifyService;
