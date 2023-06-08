Actions digunakan untuk mengirim informasi dari aplikasi ke toko. Mengirim informasi ke toko diperlukan untuk mengubah status aplikasi setelah interaksi pengguna, peristiwa internal, atau panggilan API. Tindakan adalah objek JavaScript seperti yang Anda lihat pada contoh berikut:
Di sini objek tindakan memiliki dua properti: type: konstanta untuk mengidentifikasi jenis tindakan. domain/nama peristiwa
payload: objek yang ditugaskan ke properti ini berisi data yang dikirim ke toko
Objek tindakan dibuat dengan menggunakan fungsi. Fungsi-fungsi ini disebut pembuat tindakan:
Di sini Anda dapat melihat bahwa satu-satunya tujuan dari fungsi pembuat Action adalah mengembalikan objek tindakan seperti yang dijelaskan. Memanggil tindakan dalam aplikasi itu mudah dengan menggunakan metode pengiriman: dispatch(authUser(data)).

Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action
Kenapa perlu Redux Thunk
Untuk menghandle side effect logic yang kompleks
Untuk logic async seperti request data

Middleware Redux Thunk memungkinkan anda menulis pembuat Tindakan yang mengembalika fungsi alih-alih Tindakan. Thunk dapat digunakan umtuk menunda pengiriman suatu Tindakan, atau untuk mengirim hanya jika fungsi begian dalam menerima pengirim metode penyimpanan dan getState sebagai parameter. Pembuat Tindakan yang mengembalikan fungsi untuk melakukan pengiriman asinkron: kondisi tertentu adalah saya
Reducer adalah blok bangunan yang paling penting dan penting untuk memahami konsepnya. Reducer adalah fungsi JavaScript murni yang mengambil status aplikasi saat ini dan objek tindakan dan mengembalikan status aplikasi baru:
Hal penting yang perlu diperhatikan di sini adalah bahwa keadaan tidak diubah secara langsung. Sebagai gantinya objek status baru (berdasarkan status lama) dibuat dan pembaruan dilakukan ke status baru.
