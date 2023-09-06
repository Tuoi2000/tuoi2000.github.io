function updateProgressAndYearLabel() {
    var startDate = new Date('2000-01-15');
    var endDate = new Date('2060-01-15');
  
    // Ngày hiện tại
    var currentDate = new Date();
  
    // Tính phần trăm tiến trình
    var progress = ((currentDate - startDate) / (endDate - startDate)) * 100;
  
    // Giới hạn giá trị của progress trong khoảng từ 0 đến 100
    progress = Math.min(100, Math.max(0, progress));
  
    // Tính số tương ứng
    var numberOfParts = 60;
    var currentPart = Math.floor((progress / 100) * numberOfParts);
  
    // Cập nhật thanh tiến trình
    $('#progress-bar').css('width', progress + '%');
  
    // Cập nhật số tương ứng
    $('#progress-label').text(currentPart);
  }
  
  setInterval(updateProgressAndYearLabel, 1000);
  
  updateProgressAndYearLabel();
  