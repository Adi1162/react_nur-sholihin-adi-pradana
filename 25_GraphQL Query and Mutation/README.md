GraphQL Query and Mutation adalah dua operasi utama dalam GraphQL yang digunakan untuk mengambil dan memodifikasi data.

GraphQL Query: Query digunakan untuk mengambil data dari server. Dalam GraphQL, klien dapat mengirim query yang spesifik untuk meminta data yang diinginkan. Berikut adalah beberapa fitur kunci dari GraphQL Query:

Fields: Dalam query, klien menentukan fields (bidang) yang ingin diambil dari server. Klien dapat meminta fields yang spesifik dan hanya menerima data yang diminta tersebut, menghindari over-fetching.

Aliases: Aliases memungkinkan klien memberikan nama alternatif untuk fields yang diminta. Ini berguna ketika klien ingin mengambil fields yang memiliki nama yang sama dari tipe yang berbeda.

Arguments: Query dapat menerima argumen yang digunakan untuk memfilter, mengurutkan, atau membatasi data yang diambil. Argumen ini ditentukan oleh server dan tergantung pada skema GraphQL.

Nested Fields: Klien dapat meminta data yang terkait dengan fields yang diminta sebelumnya dengan menggunakan nested fields. Ini memungkinkan klien untuk mengambil data terkait dalam satu permintaan, menghindari under-fetching.

GraphQL Mutation: Mutation digunakan untuk memodifikasi atau mengubah data di server. Dalam GraphQL, klien dapat mengirim mutation untuk melakukan operasi seperti membuat, memperbarui, atau menghapus data. Berikut adalah beberapa fitur kunci dari GraphQL Mutation:

Input Types: Mutasi dapat menerima input types yang digunakan untuk mengirim data yang akan dimodifikasi. Input types didefinisikan dalam skema GraphQL dan dapat memiliki field-field yang diperlukan atau opsional.

Response: Setelah mutasi berhasil dilakukan, server akan mengembalikan respons yang berisi data hasil mutasi. Respons ini dapat berisi fields yang diminta oleh klien atau data lain yang relevan dengan mutasi yang dilakukan.

Optimistic UI: Apollo Client dan beberapa library GraphQL lainnya mendukung optimistic UI. Ini memungkinkan klien untuk secara optimis memperbarui antarmuka pengguna segera setelah mutasi dikirim, sebelum menerima respons dari server. Jika respons dari server mengkonfirmasi mutasi, antarmuka pengguna akan tetap konsisten. Jika respons menunjukkan bahwa mutasi gagal, perubahan optimis dapat dibatalkan.

GraphQL Query dan Mutation memberikan fleksibilitas kepada klien untuk mengambil dan memodifikasi data dengan cara yang efisien dan spesifik. Dengan menggunakan operasi ini, klien dapat mengoptimalkan permintaan data, menghindari over-fetching dan under-fetching, serta melakukan perubahan data dengan mudah melalui mutasi.
