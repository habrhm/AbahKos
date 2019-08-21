export const data = [{
    id : 1,
    name : 'Kost Abah Eman',
    address : 'Jl. Kenangan',
    region : {
        latitude: -6.903889883841229, 
        longitude: 107.6186097599566,
    },
    city : 'Kab. Sumedang',
    images :[
        require('./asset/kost1-1.jpg'),
        require('./asset/kost1-2.jpg'),
        require('./asset/kost1-3.jpg')
    ],
    description : 'Sudah 2 orang booking | BOOKING kamar sekarang sebelum kehabisan | Sudah TERSEDIA Sprei di setiap kamar | Sewa langsung 3 bulan diskon 150 ribu, sewa langsung 6 bulan diskon 300 ribu, sewa langsung 1 tahun GRATIS 1 Bulan',
    roomNumber : 2,
    roomType : 'Putra',
    roomSize : {
        width : 5,
        length : 10

    },
    facilities : [
        'TV',
        'Kasur'
    ],
    price : 10000000
   
},
{
    id : 2,
    name : 'Kost Abah Udin',
    address : 'Jl. Rindu',
    region : {
        latitude: -6.903889883841229, 
        longitude: 107.6186097599566,
    },
    city : 'Kab. Bandung',
    images :[
        require('./asset/kost2-1.jpg'),
        require('./asset/kost2-2.jpg'),
    ],
    description : 'Sudah 3 orang booking | BOOKING kamar sekarang sebelum kehabisan | Sudah TERSEDIA Sprei di setiap kamar | Sewa langsung 3 bulan diskon 150 ribu, sewa langsung 6 bulan diskon 300 ribu, sewa langsung 1 tahun GRATIS 1 Bulan',
    roomNumber : 3,
    roomType : 'Putri',
    roomSize : {
        width : 3,
        length : 2

    },
    facilities : [
        'Wifi - Internet',
        'Kasur',
        'Dapur'
    ],
    price : 200000
   
},
{
    id : 3,
    name : 'Kost Abah Abah',
    address : 'Jl. Yang Menyesatkan',
    region : {
        latitude: -6.903889883841229, 
        longitude: 107.6186097599566,
    },
    city : 'Kab. Bogor',
    images :[
        require('./asset/kost3-1.jpg'),
        require('./asset/kost3-2.jpg'),
    ],
    description : 'Kamar kost murah cuma 1000 per-bulan ',
    roomNumber : 1,
    roomType : 'Putra',
    roomSize : {
        width : 1,
        length : 1

    },
    facilities : [
        'Wifi - Internet',
        'Kasur',
        'Dapur',
        'AC'
    ],
    price : 1000
   
},

]
export const formatRupiah = (angka, prefix)=>{
    var number_string = angka.toString().replace(/[^,\d]/g, ''),
    split   		= number_string.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}