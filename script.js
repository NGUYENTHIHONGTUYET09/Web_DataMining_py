// Chức năng hiển thị modal đăng nhập/đăng ký
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal");
const closeBtn = document.getElementsByClassName("close")[0];
const showRegisterBtn = document.getElementById("show-register");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const googleLoginBtn = document.getElementById("google-login");

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Chuyển đổi giữa form đăng nhập và đăng ký
showRegisterBtn.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

// Xử lý submit form đăng nhập
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Tuyet' && password === '280704') {
        alert('Đăng nhập thành công!');
        // Chuyển hướng đến trang admin (nếu cần)
        modal.style.display = 'none'; // Đóng modal sau khi đăng nhập thành công
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
    }
});

// Xử lý submit form đăng ký
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Lưu thông tin đăng ký (nếu cần)
    alert(`Đăng ký tài khoản ${newUsername} thành công!`);
    // Chuyển hướng đến trang đăng nhập (nếu cần)
    loginForm.style.display = 'block'; // Hiển thị form đăng nhập sau khi đăng ký
    registerForm.style.display = 'none'; // Ẩn form đăng ký
});

// Xử lý đăng nhập bằng Google (chỉ là ví dụ, bạn cần thêm code thực tế)
googleLoginBtn.addEventListener('click', () => {
    alert('Chức năng đăng nhập bằng Google chưa được triển khai!');
    // Thêm code thực tế để xử lý đăng nhập bằng Google ở đây
});