const radius = parseFloat(prompt("Nhập bán kính hình cầu"));

const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

const sphericalArea = 4 * Math.PI * Math.pow(radius, 2);

const circumference = 2 * Math.PI * radius;

console.log(`Thể tích hình cầu: ${volume.toFixed(2)}
    Diện tích bề mặt: ${sphericalArea.toFixed(2)}
    Chu vi lớn nhất: ${circumference.toFixed(2)}`
);
