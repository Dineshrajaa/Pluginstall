function onBatteryStatus(info) {
    // Handle the online event
    //console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    if (info.isPlugged=="true") toastAlert(" Phone is Charging and you have "+ info.level +" % charge");
    else toastAlert(" Phone is on Battery and you have "+ info.level +" % charge");
    
}

function batteryChargeStatus(info) {
    // Handle the online event
    //console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);

    toastAlert(" You have "+ info.level +" % charge");
}

function toastAlert(msg){
	//This is used for showing the alerts in Toast style in Center
	window.plugins.toast.showLongCenter(msg);
}

function deviceCheck(){
    var cordova_version=device.cordova;
    var device_model=device.model;
    var platform=device.platform;
    var uuid=device.uuid;
    var version=device.version;
    //toastAlert(cordova_version);
    toastAlert(
        "Cordova version:"+ cordova_version +'<br>'+ 
        "Device Model:"+ device_model+'<br>'+
        "OS Name:"+ platform+'<br>'+
        "UUID:"+ uuid+'<br>'+
        "OS version:"+ version
        );
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    toastAlert('Connection type: ' + states[networkState]);
}

function accelerometerSuccess(acceleration) {
    toastAlert(
          'Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
};

function accelerometerError() {
    toastAlert('onError!');
};

//Used to save the Picture took in Camera in base64 format
function onDataCameraSuccess(imageData){
    var pic=document.getElementById("picbox");
	pic.src = "data:image/jpeg;base64," + imageData;
}

//Used to save the Picture took in Camera as FileURL
function onFileCameraSuccess(imageURI){
    var pic=document.getElementById("picbox");
    pic.src="";
    toastAlert("Picture saved in " +imageURI);
    pic.src = imageURI;
}


function onCameraFail(message){
	toastAlert(message);
}