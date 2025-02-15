export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Mukti Wiratama',
            child: 'Putra Pertama',
            father: 'Trisno Priyanto',
            mother: 'Suparmi',
            image: './src/assets/images/cowo.jpg'
        },
        P: {
            id: 2,
            name: 'Salma Mala Mahira',
            child: 'Putri Pertama',
            father: 'Untung Nugroho Riwahyono',
            mother: 'Siti Warifah Nursiswanti',
            image: './src/assets/images/cewe.jpg'
        },

        couple: './src/assets/images/couple.jpg'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'April',
            date: '06',
            day: 'Minggu',
            hours: {
                start: '09.00',
                finish: '10.00'
            }
        },
        reception: {
            year: '2025',
            month: 'April',
            date: '06',
            day: 'Minggu',
            hours: {
                start: '11.00',
                finish: '13.00'
            }
        },
        address: 'Gedung Serbaguna Kalitirto Jl.Tanjungtirto, Berbah, Sleman, Yogyakarta'
    },

    link: {
        calendar: 'https://calendar.app.google/UrKc1Qej8BFLNFRo8',
        map: 'https://maps.app.goo.gl/AoaUbV8N3Fs7XyKi8',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/image1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/image2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/image3.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/image4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/image5.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Mukti Wiratama',
            icon: './src/assets/images/bca.png',
            rekening: '7641061062'
        },
        {
            id: 2,
            name: 'Salma Mala Mahira',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxf3IzKELiiXk66v8a7U5txYuKZiP41c2icIhxKIFpqv-4zaRwZcHZVwueENSAp6L0/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
