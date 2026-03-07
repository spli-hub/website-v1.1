# EcoTech Landing Page

Landing page modern dengan desain eco-technology menggunakan HTML, Tailwind CSS, dan Vanilla JavaScript.

## 📁 Struktur File

```
eco-landing/
├── index.html          # File HTML utama
├── css/
│   ├── styles.css      # Global styles
│   └── animations.css  # Animasi (butterfly, scroll, dll)
└── js/
    └── main.js         # JavaScript utama (all-in-one)
```

## 🎨 Fitur

### ✅ Sections
- **Navbar** - Navigasi sticky dengan mobile menu
- **Hero** - Layout 3 kolom dengan butterfly animation
- **About** - Informasi perusahaan
- **Services** - 6 service cards
- **Ecosystem** - Network partners
- **Who It's For** - Target audience cards
- **Portfolio** - Showcase projects
- **CTA** - Contact form
- **Footer** - Links dan informasi

### ✨ Animasi
- **Butterflies** - 6 kupu-kupu animasi dengan CSS + JavaScript
- **Scroll Effects** - Smooth scrolling
- **Hover Effects** - Interactive cards
- **Mobile Responsive** - Adaptif untuk semua ukuran layar

### 🎨 Color Palette
- Sand: `#E8E0D5`
- Eco Green: `#6A8F4E`
- Light Green: `#8FAA78`
- Deep Green: `#4A6B3A`
- Dark Text: `#1F2933`

## 🚀 Cara Menggunakan

1. **Buka index.html** di browser (Chrome, Firefox, Safari, Edge)
2. **Tidak perlu install apapun** - langsung berfungsi
3. **Tidak perlu server** - bisa dibuka dari file lokal

## ✏️ Cara Edit

### Ubah Warna
Edit di `css/styles.css`:
```css
:root {
    --sand: #E8E0D5;
    --eco-green: #6A8F4E;
    /* Ubah nilai-nilai ini */
}
```

### Ubah Konten
Edit di `js/main.js`:
- **Services**: Cari array `services`
- **Portfolio**: Cari array `projects`
- **Audience**: Cari array `audiences`

### Ubah Jumlah Butterflies
Edit di `js/main.js`:
```javascript
const butterflyCount = 6; // Ubah angka ini
```

### Ubah Kecepatan Butterfly
Edit di `js/main.js`:
```javascript
speed: 0.5 + Math.random() * 0.5 // Ubah nilai 0.5
```

## 📱 Responsive

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Notes

- Semua JavaScript dalam 1 file (`main.js`)
- Tidak menggunakan ES6 modules (kompatibel dengan file lokal)
- Tailwind CSS dari CDN (tidak perlu install)
- Google Fonts dari CDN

## 🐛 Troubleshooting

**Jika layar kosong:**
1. Buka Console (F12)
2. Cek error messages
3. Pastikan semua file ada di folder yang benar
4. Refresh browser (Ctrl+F5)

**Jika butterfly tidak muncul:**
1. Cek apakah `butterfly-container` ada
2. Cek Console untuk errors
3. Pastikan `main.js` di-load dengan benar

**Jika style tidak muncul:**
1. Cek koneksi internet (untuk CDN)
2. Pastikan file CSS ada di folder `css/`

---

**Built with 🌿 by EcoTech**
