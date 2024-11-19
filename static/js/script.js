// static/js/script.js
function fetchVehicleCounts() {
    $.getJSON('/vehicle_counts', function(data) {
        $('#count1').text(data.lane_1);
        $('#count2').text(data.lane_2);
        $('#count3').text(data.lane_3);
        $('#count4').text(data.lane_4);
    });
}
function updateTime() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Bangkok',  // GMT+7 timezone
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formattedTime = new Intl.DateTimeFormat('en-GB', options).format(now);
    document.getElementById('time_display').innerText = `Time (GMT+7): ${formattedTime}`;
}
//Update time every second
setInterval(updateTime, 1000);
// Fetch counts every second
setInterval(fetchVehicleCounts, 1000);
