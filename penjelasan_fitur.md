# Penjelasan Fitur Web SizeFit

## 1. Fitur Utama

- `Beranda` dan `Navigasi`:
  - Menu atas mengarahkan ke bagian utama seperti dataset, model regresi, visualisasi scatter, prediksi, dan patokan ukuran.
  - Tombol `Coba Prediksi` dan `Lihat Model` mempercepat akses ke fitur paling penting.

- `Statistik Model`:
  - Menampilkan nilai `Slope Global (b)`, `Intercept Global (a)`, `Korelasi (r)`, `Koefisien R²`, `RMSE`, dan `Total Responden`.
  - Angka-angka ini diambil langsung dari perhitungan regresi linear terhadap dataset responden.

- `Dataset`:
  - Menampilkan tabel 52 data antropometri (jenis kelamin, tinggi badan, berat badan, BMI, dan kategori BMI).
  - Data ini adalah basis model prediksi.

- `Model Regresi`:
  - Menampilkan formula regresi linear global dan juga formula terpisah untuk `laki-laki` dan `perempuan`.
  - Model ini dihitung dengan metode Least Square berdasarkan hubungan `Tinggi Badan (TB)` terhadap `Berat Badan (BB)`.

- `Visualisasi Scatter`:
  - Grafik scatter plot membandingkan data `Laki-laki`, `Perempuan`, dan input pengguna terhadap garis regresi global.
  - Memudahkan melihat bagaimana data tersebar dan apakah nilai pengguna cocok dengan tren umum.

- `Prediksi & 3D`:
  - Pengguna memasukkan `Jenis Kelamin`, `Tinggi`, dan `Berat` untuk mendapatkan nilai BMI dan kategori kesehatannya.
  - Terdapat panel tambahan untuk ukuran lain seperti lebar bahu, lingkar dada, pinggang, pinggul, dan paha.
  - Rekomendasi ukuran `Jersey` dan `Celana` dihasilkan berdasarkan data input dan tabel ukuran standar.
  - Visual avatar 3D di-update secara real-time sesuai dimensi tubuh.

- `Patokan Ukuran`:
  - Menampilkan standar ukuran kaos dan celana yang diambil dari referensi marketplace Shopee.
  - Sistem menggunakan batas minimal/maksimal TB dan BB untuk menentukan rekomendasi ukuran terbaik.

## 2. Sumber Angka dan Hasil

### Dataset 52 Responden

- `DATASET` adalah kumpulan objek JavaScript dengan 52 entri.
- Setiap entri memiliki:
  - `gender` (L/P),
  - `tb` (tinggi badan dalam cm),
  - `bb` (berat badan dalam kg).
- Data ini digunakan sebagai dasar perhitungan regresi, visualisasi, dan rekomendasi ukuran.

### Perhitungan Regresi Least Square

- Fungsi `calculateLeastSquare` menghitung parameter regresi linear menggunakan rumus statistik:
  - `b` (slope) dihitung dari data TB dan BB.
  - `a` (intercept) dihitung sebagai garis lurus terbaik yang meminimalkan jumlah kuadrat error.

- Nilai yang dihasilkan:
  - `a` dan `b` digunakan untuk formula `BB = a + b × TB`.
  - `r` adalah korelasi Pearson yang menunjukkan seberapa kuat hubungan linier antara TB dan BB.
  - `r2` adalah koefisien determinasi yang menunjukkan persentase variasi BB yang dijelaskan oleh TB.
  - `rmse` adalah Root Mean Squared Error, ukuran rata-rata kesalahan prediksi model terhadap data aktual.
  - `n` adalah total responden (52 untuk model global).

- Perhitungan ini diterapkan pada:
  - Dataset gabungan (`modelGlobal`).
  - Dataset laki-laki saja (`modelMale`).
  - Dataset perempuan saja (`modelFemale`).

### Nilai BMI dan Kategori

- BMI dihitung dengan rumus standar:
  - `BMI = berat / (tinggi dalam meter)^2`
- Kategori ditentukan oleh fungsi `getBmiCategory`:
  - BMI < 18.5 → `Kurus`
  - 18.5 ≤ BMI < 25 → `Normal`
  - 25 ≤ BMI < 30 → `Overweight`
  - BMI ≥ 30 → `Obesitas`

- Data BMI ini ditampilkan dalam tabel dataset dan di input pengguna sebagai status kesehatan.

### Rekomendasi Ukuran Jersey dan Celana

- Sistem menggunakan dua tabel `SIZE_CHART_KAOS` dan `SIZE_CHART_CELANA`.
- Untuk masing-masing input TB dan BB, fungsi `findBestSize` mencari ukuran yang paling cocok:
  - Pertama, mencari ukuran yang memenuhi rentang TB dan BB secara bersamaan.
  - Jika lebih dari satu cocok, dipilih ukuran yang paling dekat pada titik tengah rentang.
  - Jika tidak ada yang cocok, dipilih ukuran terdekat berdasarkan jarak Euclidean.

- Penyesuaian khusus:
  - Untuk kaos, fungsi `applyChestBasedShirtSize` dapat menyesuaikan ukuran jika pengguna memasukkan lingkar dada.
  - Untuk celana, fungsi `adjustPantsForWaistHip` dapat menyesuaikan ukuran jika lingkar pinggang atau pinggul melebihi ambang batas.

### Sumber Tabel Ukuran

- Tabel kaos (`SIZE_CHART_KAOS`) mencakup ukuran `S`, `M`, `L`, `XL`, `XXL`, dan `XXXL`.
- Tabel celana (`SIZE_CHART_CELANA`) mencakup ukuran `27`, `28`, `29`, `30`, dan `31`.
- Setiap entri memiliki rentang TB dan BB serta informasi lebar dada untuk kaos.

## 3. Ringkasan Fitur

- Fitur ini menggabungkan statistik, visualisasi data, dan rekomendasi ukuran.
- Data numerik berasal langsung dari:
  - dataset antropometri 52 responden,
  - perhitungan regresi Least Square,
  - rumus BMI standar,
  - dan tabel ukuran standar marketplace.

- Output rekomendasi ukuran muncul dari perbandingan antara data tubuh pengguna dan rentang ukuran di tabel.
- Avatar 3D membantu menunjukkan proporsi tubuh secara visual, tetapi angka rekomendasi tetap bergantung pada logika matematis di atas.

## 4. Kesimpulan

Intinya, web ini bekerja sebagai sistem prediksi ukuran pakaian yang:
- memanfaatkan dataset nyata,
- menggunakan matematika regresi linear untuk memahami hubungan TB ↔ BB,
- menghitung BMI kesehatan,
- dan merekomendasikan ukuran kaos/celana berdasarkan rentang ukuran standar.

Semua angka pada panel hasil berasal dari fungsi JavaScript yang menghitung model statistik, bukan dari input acak.
