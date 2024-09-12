function startAnemiaTest() {
    const result = Math.random() > 0.5 ? "Anemia detected" : "No risk of Anemia";
    document.getElementById('testResult').innerText = result;
}

async function startCamera() {
    video = document.getElementById('camera');
    
    // เปิดกล้อง
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;

    // โหลดโมเดล Face-api.js
    console.log("Loading models...");
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    console.log("Models loaded successfully");
    
    video.addEventListener('play', detectEyesInCircle);
}

async function detectFace() {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
    console.log(detections); // ดูผลลัพธ์ในคอนโซล
}

// เรียกใช้ฟังก์ชันตรวจจับ
setInterval(detectFace, 1000);

const capturedPhoto = localStorage.getItem('capturedPhoto');
// Use the capturedPhoto data as needed