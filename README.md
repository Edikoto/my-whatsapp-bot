# 🤖 WhatsApp Bot Multi-Fungsi (Node.js)

Bot WhatsApp otomatis yang dibangun menggunakan library [whatsapp-web.js](github.com). Bot ini mendukung berbagai fitur mulai dari pembuatan stiker otomatis, integrasi AI (Tanya Jawab), hingga informasi cuaca real-time.

---

## ✨ Fitur Utama
- ✅ **Auto Sticker**: Kirim gambar dengan caption `!stiker` untuk mengubahnya jadi stiker secara instan.
- 🤖 **AI Assistant**: Gunakan perintah `!tanya [pertanyaan]` untuk mengobrol dengan AI.
- 🌤️ **Cek Cuaca**: Pantau kondisi cuaca kota mana pun dengan `!cuaca [nama_kota]`.
- 📁 **Media Sender**: Mengirim dokumen atau katalog otomatis melalui perintah `!pricelist`.
- 🔐 **Local Auth**: Sesi tersimpan otomatis, tidak perlu scan QR berkali-kali setiap restart.

---

## 🚀 Prasyarat
Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:
- [Node.js](nodejs.org) (Versi 18 ke atas direkomendasikan)
- [Git](git-scm.com)
- Akun WhatsApp aktif

---

## 🛠️ Cara Instalasi

1. **Clone Repositori**
   ```bash
   git clone repositori ini

## 🛠 Install Dependesi
    npm install

## ⚙️ Konfigurasi Environment
Buat file .env di folder utama dan masukkan API Key jika Anda menggunakan fitur cuaca atau AI:
    ...env
    WEATHER_API_KEY=your_api_key_here
    
## Jalankan Bot
   ...bash
   npm start

## Scan QR Code
Buka WhatsApp di HP Anda > Perangkat Tertaut > Tautkan Perangkat > Scan QR yang muncul di terminal.

## ⌨️ Daftar Perintah (Commands)
Perintah	Deskripsi
### !menu	Menampilkan semua daftar perintah yang tersedia
### !ping	Mengecek apakah bot dalam keadaan aktif
### !stiker	(Kirim gambar) Mengubah gambar menjadi stiker
### !tanya	Bertanya kepada asisten AI
### !cuaca	Cek cuaca (Contoh: !cuaca Jakarta)

# ⚠️ Catatan Penting
  ## Keamanan: Jangan membagikan folder .wwebjs_auth kepada siapapun karena folder tersebut berisi kredensial login akun WhatsApp Anda.
  ## Risiko: Penggunaan bot pihak ketiga memiliki risiko pemblokiran nomor oleh WhatsApp jika digunakan untuk melakukan spam. Gunakanlah dengan bijak dan patuhi kebijakan WhatsApp 2026.

  # 🤝 Kontribusi
Kontribusi, isu (issues), dan permintaan fitur (feature requests) sangat dipersilakan! Silakan cek halaman issues.

