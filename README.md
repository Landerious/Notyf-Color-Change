# Notyf-Color-Change
Adding a New Type with a New Color
To add a new type with a new color to the NotifyService code, follow these steps:

Open the NotifyService class file.

Locate the types array in the notification object. This array contains the different notification types and their configurations.

Add a new object to the types array, representing the configuration for the new type. The object should include the following properties:

type: Specify the type name.
background: Set the color for the notification background.
icon: (Optional) Set whether to display an icon for this type (true or false).
