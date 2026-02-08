<?php
// location.php

// Include database connection
include 'db.php';

// Function to get location data for Tanzanian regions
function getLocationData($latitude, $longitude) {
    global $conn;

    // Prepare SQL statement to fetch location details
    $stmt = $conn->prepare("SELECT * FROM locations WHERE latitude = ? AND longitude = ?");
    $stmt->bind_param("dd", $latitude, $longitude);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if any location is found
    if ($result->num_rows > 0) {
        $locations = [];
        while ($row = $result->fetch_assoc()) {
            $locations[] = $row;
        }
        return json_encode($locations);
    } else {
        return json_encode([]);
    }
}

// Check if latitude and longitude are provided
if (isset($_GET['latitude']) && isset($_GET['longitude'])) {
    $latitude = $_GET['latitude'];
    $longitude = $_GET['longitude'];
    echo getLocationData($latitude, $longitude);
} else {
    echo json_encode(['error' => 'Latitude and longitude are required']);
}
?>