// แสดงข้อความเมื่อเว็บโหลดเสร็จ
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio พร้อมใช้งาน!");

    // แสดงข้อความต้อนรับ
    alert("ยินดีต้อนรับสู่ Portfolio ของฉัน");
});

// เปลี่ยนสีหัวข้อเมื่อกด
const title = document.querySelector("h1");

if (title) {
    title.addEventListener("click", function () {
        title.style.color = "blue";
    });
}
