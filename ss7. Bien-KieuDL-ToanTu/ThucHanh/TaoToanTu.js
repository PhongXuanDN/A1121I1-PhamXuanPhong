function TaoTT() {
    let cCao;
    let cRong;
    cCao = prompt('Nhap chao cao')
    cRong = prompt('Nhap chieu rong')
    let cao = parseInt(cCao)
    let rong = parseInt(cRong)
    let dTich = cao * rong;
    document.write('dien tich hinh chu nhat la: ' +dTich)
}