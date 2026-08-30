# Astro Affiliate Starter Kit

Starter kit Astro untuk website blog / affiliate marketing modern, kencang, dan ramah SEO.

## Cara Menggunakan

1. Extract file zip proyek ini.
2. Buka folder proyek di **Visual Studio Code**.
3. Buka Terminal (`Ctrl + ~` atau `Cmd + ~`) dan install dependensi:
   ```bash
   npm install
   ```
4. Jalankan server lokal:
   ```bash
   npm run dev
   ```
5. Buka `http://localhost:4321` di browser Anda.

## Cara Menambah Artikel Affiliate Baru

1. Buat file Markdown (`.md`) baru di folder `src/content/blog/`.
2. Gunakan frontmatter berikut di bagian atas file:

```markdown
---
title: "Judul Review Produk"
description: "Deskripsi singkat artikel"
pubDate: 2026-08-31
category: "Kategori"
rating: 4.8
heroImage: "https://link-gambar.com/foto.jpg"
affiliateLink: "https://shopee.co.id/..."
affiliatePlatform: "Shopee"
---

Tulis artikel Anda di sini...
```
