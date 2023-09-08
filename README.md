# Zooper 

### Project Overview:

Title: Secure Online Classroom Environment

###  Introduction:

In the ever-evolving landscape of online education, ensuring a safe and conducive learning environment is paramount. To address the challenges of maintaining order and security in virtual classrooms, we propose the development of a comprehensive web application with advanced features to empower educators and protect students.

### Key Features:

1. Intruder Detection: The web application incorporates sophisticated intrusion detection mechanisms. When the "Report" button is pressed by an authorized user (teacher/admin), two essential steps are initiated:

    1. VPN Detection: A Python script is executed to detect if an intruder is using a Virtual Private Network (VPN). VPN usage can potentially allow students to bypass security measures. The system will identify VPN usage and take appropriate actions.

    2. IP and MAC Tracking: A JavaScript script is activated to track the MAC and IP addresses of participants in the online class. This ensures that all users are registered and authorized to attend the class.

2. Multi-Factor Authentication: To prevent classroom disruption by existing members, a multi-factor authentication system is implemented. Each student is associated with one default device, identified by its MAC and IP addresses. The details are securely stored in the database and can only be accessed by the admin or designated personnel. If a student wishes to join from a new device, they must obtain a unique key from the admin. This key, when provided, grants access to the class from the new device.

3. Chat Bot with Content Filtering: Machine learning is harnessed to develop a chat bot that actively monitors and filters chat content. Offensive language and inappropriate messages are promptly censored. Any such content is reported to the admin/teacher for review.

4. Admin Control: The admin/teacher plays a central role in maintaining the class environment. They can:

    1. Create Classes: Admins can create and manage multiple classes within the web application.

    2. Manage Students: Admins register students for classes and associate their MAC and IP addresses with authorized devices.

    3. Intrusion Handling: In the event of an intrusion, the admin/teacher can remove unauthorized participants from the class. Details such as IP addresses, MAC addresses, and the geolocation of intruding IPs are logged both locally and in the web app's database for future reference.

    4. Chat Monitoring: The admin/teacher has the ability to monitor censored words and review chat interactions. The final decision regarding the appropriateness of content is at their discretion.

### Conclusion:

The Secure Online Classroom Environment web application is a robust platform designed to facilitate secure and effective online learning. By combining advanced intrusion detection, multi-factor authentication, and content filtering, it provides educators with the tools they need to maintain a positive and productive online class environment.