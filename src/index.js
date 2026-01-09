const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');
require('dotenv').config(); // Untuk menyimpan API Key dengan aman

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => qrcode.generate(qr, { small: true }));
client.on('ready', () => console.log('Bot WhatsApp Pro Siap!'));

client.on('message', async (msg) => {
    const chat = await msg.getChat();
    const text = msg.body.toLowerCase();

    // FITUR 1: AI CHAT (Tanya apa saja ke bot)
    // Contoh: !tanya bagaimana cara memasak nasi?
    if (text.startsWith('!tanya ')) {
        const pertanyaan = text.split('!tanya ')[1];
        try {
            // Menampilkan indikator "sedang mengetik"
            await chat.sendStateTyping();
            
            // Integrasi API (Contoh menggunakan API publik/AI)
            const response = await axios.get(`api.simsimi.net{encodeURIComponent(pertanyaan)}&lc=id`);
            msg.reply("🤖 AI: " + response.data.success);
        } catch (e) {
            msg.reply("Maaf, otak AI sedang konslet. Coba lagi nanti.");
        }
    }

    // FITUR 2: INFORMASI CUACA REAL-TIME
    else if (text.startsWith('!cuaca ')) {
        const kota = text.split('!cuaca ')[1];
        try {
            const res = await axios.get(`api.openweathermap.org{kota}&appid=YOUR_API_KEY&units=metric&lang=id`);
            msg.reply(`📍 *Cuaca di ${kota}*\n🌡️ Suhu: ${res.data.main.temp}°C\n☁️ Kondisi: ${res.data.weather[0].description}`);
        } catch (e) {
            msg.reply("Kota tidak ditemukan.");
        }
    }

    // FITUR 3: PENGIRIMAN MEDIA OTOMATIS (Dokumen/PDF)
    else if (text === '!pricelist') {
        const media = MessageMedia.fromFilePath('./katalog.pdf'); // Pastikan file ada
        client.sendMessage(msg.from, media, { caption: 'Ini katalog harga terbaru 2026.' });
    }

    // FITUR 4: BROADCAST (Hanya untuk Admin)
    else if (text.startsWith('!bc ')) {
        const adminNumber = '628xxx@c.us'; // Ganti dengan nomor Anda
        if (msg.from === adminNumber) {
            const pesanBc = text.split('!bc ')[1];
            const info = await client.getChats();
            info.forEach(chat => {
                if (chat.isGroup) client.sendMessage(chat.id._serialized, `📢 *BROADCAST*:\n\n${pesanBc}`);
            });
        }
    }
});

client.initialize();
