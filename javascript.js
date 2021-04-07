let physical = +prompt("nhập điểm vật lý");
let chemistry = +prompt("nhập điểm hóa");
let math = +prompt("nhập điểm toán");
if (physical >= 0 && chemistry >= 0 && math >= 0) {
    medium = parseInt(physical + chemistry + math) / 3;
    document.write("điểm lý là " + physical);
    document.write('<br/>')
    document.write("điểm hóa là " + chemistry);
    document.write('<br/>')
    document.write("điểm toán là " + math);
    document.write('<br/>')
    document.write("trung bình là " + medium);
} else {
    document.write("bạn nhập sai, xin vui lòng nhập lai")
}