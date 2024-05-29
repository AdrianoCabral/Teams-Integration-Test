// app.js

// Ensure the SDK is loaded
document.addEventListener("DOMContentLoaded", () => {
    microsoftTeams.initialize();

    // Your Teams meeting URL
    const teamsMeetingUrl = "https://teams.live.com/meet/9385351107297?p=D702ffpdlYZjBwWoX4";

    // Set the iframe src to the Teams meeting URL
    document.getElementById("meetingFrame").src = teamsMeetingUrl;
});