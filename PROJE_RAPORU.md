# Proje Raporu — Aykut Büfe Web Sitesi

**Hazırlayan:** Mihriban Uçkuyulu  
**Tarih:** 5 Haziran 2026  
**Ders:** Web Tasarımı ve Programlama  
**Canlı Site:** https://mihribanuckuyulu2-prog.github.io/marmara-bufe/  
**GitHub:** https://github.com/mihribanuckuyulu2-prog/marmara-bufe

---

## 1. Müşteri Tanıtımı ve İhtiyaç Analizi

### 1.1 Müşteri Bilgisi

**Aykut Büfe**, Balıkesir'in Marmara Adası ilçesinde faaliyet gösteren, 1995 yılından beri hizmet veren bir aile işletmesidir. Ada halkının ve turistlerin uğrak noktası olan büfe; tost, kumru, hamburger, köfte ekmek, döner, çibörek, gözleme gibi geniş bir ürün yelpazesine sahiptir.

| Bilgi | Detay |
|-------|-------|
| **İşletme Adı** | Aykut Büfe |
| **Adres** | Okullar, Sardunya Sk. No:1, 10360 Marmara/Balıkesir |
| **Telefon** | 0541 735 89 91 |
| **E-posta** | info@aykutbufe.com |
| **Kuruluş** | 1995 |
| **Çalışma Saatleri** | 7/24 |

### 1.2 İhtiyaç Analizi

Müşterinin temel ihtiyaçları şunlardır:

- **Dijital varlık oluşturma:** İşletmenin güncel bir web sitesi bulunmamaktadır. Müşteriler işletmeyi çevrimiçi ortamda bulmakta zorluk çekmektedir.
- **Menü tanıtımı:** Ürün çeşitlerinin ve fiyatlarının sergilendiği görsel bir menü sayfası ihtiyacı.
- **İletişim kanalı:** Müşterilerin işletmeye ulaşabileceği bir iletişim formu ve konum bilgisi.
- **Mobil uyum:** Ada turistlerinin çoğu mobil cihazlardan eriştiği için responsive tasarım kritik öneme sahiptir.
- **Çoklu dil desteği:** Ada'ya gelen yabancı turistler için İngilizce dil seçeneği.
- **Görsel tanıtım:** Büfe atmosferini ve ürünleri yansıtan kaliteli görsellerle slider.

### 1.3 Müşteri Görüşmesi

- **1. Görüşme:** 24 Mayıs 2026 — İhtiyaç analizi ve içerik toplama (telefon)
- **2. Görüşme:** 28 Mayıs 2026 — İlk taslak sunumu ve geri bildirim (çevrimiçi)
- **3. Görüşme:** 4 Haziran 2026 — Son revizyonlar ve site yayına alma (telefon)

---

## 2. Tasarım Kararları

### 2.1 Renk Paleti

Renk seçiminde ada esintisini ve sıcak bir büfe atmosferini yansıtmak hedeflenmiştir:

| Renk | Kodu | Kullanım Alanı |
|------|------|----------------|
| Lacivert | `#0f1a2e` | Arka planlar, footer, başlıklar |
| Krem | `#f5efe6` | Bölüm arka planları, highlight kartları |
| Terracotta | `#a8533b` | Vurgular, butonlar, fiyat etiketleri |
| Zeytin Yeşili | `#5c6a42` | İçerik badge'leri, küçük vurgular |
| Açık Gri | `#5a5a5a` | Paragraf metinleri |

Renk paleti oluşturulurken WCAG AA kontrast standardına uygunluk gözetilmiştir. Terracotta rengi, beyaz zemin üzerinde 4.7:1 kontrast oranı sağlayacak şekilde `#a8533b` olarak belirlenmiştir.

### 2.2 Tipografi

- **Başlıklar:** Inter (300-700 weight) — Modern, okunabilir sans-serif
- **Vurgu Başlıkları:** Georgia — Premium hissiyat için serif alternatif
- **Gövde Metni:** Inter Regular 400 — Yüksek okunabilirlik

Font seçiminde Google Fonts kullanılmış, `font-display: swap` ile yazı tipi yüklenene kadar sistem fontunun gösterilmesi sağlanmıştır.

### 2.3 Yerleşim (Layout)

- **Header:** Sabit üst navigasyon, mobilde hamburger menü
- **Hero Section:** Tam genişlik slider, overlay metin ve CTA butonları
- **Menü Bölümü:** Flexbox ile oluşturulmuş kart grid'i, her kartta ürün görseli, başlık, fiyat ve içindekiler listesi
- **Hakkımızda:** Flexbox ile iki kolonlu düzen (metin + highlight kartları)
- **İletişim:** İki kolonlu grid (iletişim bilgileri + form)
- **Footer:** Üç kolonlu grid (marka, linkler, iletişim)

Tüm yerleşimde **Float** kullanılmamış, yalnızca **Flexbox** ve **CSS Grid** tercih edilmiştir.

---

## 3. Teknik Kararlar

### 3.1 Framework Tercihi: Saf CSS

Bootstrap kullanmak yerine saf CSS tercih edilmiştir. Gerekçeler:

- Projenin kapsamı Bootstrap'in tüm bileşenlerini gerektirmemektedir
- Özel tasarım kimliğini (renk paleti, tipografi) Bootstrap varsayılanlarıyla sınırlamadan uygulama imkanı
- CSS değişkenleri (`:root`) ile merkezi tema yönetimi
- Dosya boyutunun küçük kalması (784 satırlık optimize CSS)
- Eğitim amaçlı olarak sıfırdan CSS yazmanın öğrenme katkısı

### 3.2 Hosting: GitHub Pages

- **Ücretsiz** HTTPS sertifikası dahil
- Git tabanlı dağıtım (push ile otomatik yayın)
- Netlify'a alternatif olarak tercih edildi
- Statik site için yeterli performans

### 3.3 Form Entegrasyonu: Web3Forms

- Ücretsiz (ayda 250 submission)
- GDPR uyumlu
- Basit API entegrasyonu (hidden input ile)
- Spam koruması dahil

### 3.4 Çoklu Dil Desteği

- **Vanilla JS** ile data-key tabanlı çeviri sistemi
- LocalStorage ile dil tercihi kalıcılığı
- TR <> EN arası geçiş
- `aria-label` çevirileri ile erişilebilirlik desteği

### 3.5 Performans Optimizasyonları

- **Görsel sıkıştırma:** Slider görselleri 1920px, menü görselleri 400px olarak yeniden boyutlandırıldı ve JPEG quality 70-75 ile sıkıştırıldı
- **Lazy loading:** Menü görsellerinde `loading="lazy"` kullanıldı
- **Boyut atıfları:** CLS'yi önlemek için tüm görsellere `width` ve `height` eklendi
- **Defer:** JavaScript `defer` ile yüklendi

---

## 4. Karşılaşılan Zorluklar ve Çözümler

### 4.1 Commit Mesajlarının Düzenlenmesi

GitHub'a push'lanmış commit'lerin mesajlarını değiştirmek için `git rebase -i --root` kullanıldı. Ancak Windows PowerShell'de UTF-8 karakter kodlaması sorunu yaşandı. PowerShell'in `Set-Content` ile yazdığı BOM (Byte Order Mark) git tarafından hatalı yorumlanıyordu. Çözüm: .NET'in `UTF8Encoding($false)` sınıfı ile BOM'suz UTF-8 dosyaları yazıldı.

### 4.2 GitHub Pages Yayına Alma

GitHub Pages'in aktifleştirilmesi ve doğru URL'nin yapılandırılması. Başlangıçta Netlify üzerinden yayın yapılıyordu, sonradan GitHub Pages'e geçildi. `og:url` ve `og:image` meta etiketleri güncellendi.

### 4.3 Görsel Optimizasyonu

Müşteriden alınan slider görselleri toplamda ~12.5 MB boyutundaydı. .NET `System.Drawing` kütüphanesi ile JPEG kalite düşürme ve yeniden boyutlandırma yapılarak toplam boyut ~1.2 MB'a indirildi (%90 azalma).

### 4.4 Erişilebilirlik İyileştirmeleri

Renk kontrast oranları WCAG AA standardının altındaydı. Terracotta rengi `#c1694f`'den `#a8533b`'ye koyulaştırıldı. `aria-expanded` özelliğinin JS ile dinamik güncellenmesi sağlandı. Google Maps iframe'ine `title` etiketi eklendi. Section'lara `aria-labelledby` bağlantıları yapıldı.

---

## 5. Yapay Zekâ Asistan Kullanımı

Proje boyunca **OpenCode** (Claude Code tabanlı) AI asistanı kullanılmıştır.

### 5.1 Kullanılan Görevler

| Görev | Prompt Örneği | Sonuç |
|-------|--------------|-------|
| Commit mesajı düzenleme | "projem icin devam edelim commit adlarını degistirmek istiyorum" | `git rebase -i --root` ile başarılı düzenleme |
| Görsel optimizasyonu | "görseller çok büyük, sıkıştır" | .NET System.Drawing ile batch sıkıştırma |
| Erişilebilirlik düzeltmeleri | analiz sonrası düzeltme komutları | Renk kontrastı, ARIA, JSON-LD düzeltmeleri |
| README güncelleme | "README güncelle" | Eski Netlify referansları kaldırıldı |
| Proje raporu hazırlığı | "proje raporu istenilenlere göre hazırlayalım" | Bu belge |

### 5.2 Değerlendirme

- **Güçlü yönleri:** Kod yazma hızı, hata ayıklama, dosya işlemleri (toplu düzenleme), komut satırı işlemleri
- **Zayıf yönleri:** Encoding sorunlarında deneme-yanılma gerekti, PowerShell komutlarında bazen yanlış sözdizimi üretti
- **Öğrenme katkısı:** AI'ın ürettiği kod satır satır incelendi, anlaşılmayan kısımlarda açıklama istendi. Özellikle `git rebase` ve `.NET` görsel işleme konularında yeni bilgiler edinildi.

### 5.3 Kullanılan Skill ve Agent'lar

| Skill/Agent | Amaç | Katkısı |
|-------------|------|---------|
| `frontend-design` | Web arayüzü oluşturma | HTML/CSS yapısının kurulması, responsive tasarım |
| `explore` agent | Kod tabanında analiz | Lighthouse benzeri performans/erişilebilirlik denetimi |
| `task` agent | Çoklu dosya tarama | Görsel boyutlarının tespiti, eksik çevirilerin bulunması |

---

## 6. Lighthouse Skorları

**Not:** Google PageSpeed Insights API kotası dolduğu için Lighthouse testi manuel analizle gerçekleştirilmiştir. Projede yapılan iyileştirmeler:

### Performans
- [x] Görsel sıkıştırma (12.5 MB → 1.2 MB)
- [x] Lazy loading menü görselleri
- [x] width/height ile CLS önlemi
- [x] JavaScript defer ile yükleme
- [x] Google Fonts display=swap

### Erişilebilirlik
- [x] WCAG AA renk kontrastı (4.7:1+)
- [x] Semantik HTML5 etiketleri (header, nav, main, section, article, footer)
- [x] aria-expanded dinamik güncelleme
- [x] Form label'ları
- [x] iframe title etiketi
- [x] Görsel alt metinleri
- [x] Dil özelliği (lang="tr")

### SEO
- [x] Meta description
- [x] Open Graph etiketleri
- [x] JSON-LD yapısal veri
- [x] Heading hiyerarşisi (h1 → h2 → h3)
- [x] Favicon

---

## 7. Öğrenilenler ve Gelecek İyileştirmeler

### Öğrenilenler

1. **Git rebase** — Push'lanmış commit'leri düzenleme ve force push süreci
2. **Görsel optimizasyon** — .NET ile batch görsel işleme
3. **Erişilebilirlik** — WCAG standartları, ARIA etiketleri, renk kontrastı
4. **SEO** — JSON-LD yapısal veri, Open Graph, heading hiyerarşisi
5. **GitHub Pages** — Statik site yayınlama süreci

### Gelecek İyileştirmeler

- Google Analytics entegrasyonu
- WebP formatına tam geçiş
- Karanlık mod desteği
- Daha kapsamlı animasyonlar
- Gerçek alan adı (domain) satın alımı

---

## Ek: Klasör Yapısı

```
/
├── index.html              # Ana sayfa
├── README.md               # Proje README dosyası
├── PROJE_RAPORU.md         # Bu rapor
├── css/
│   └── style.css           # Tüm stiller (784 satır)
├── js/
│   └── script.js           # JS etkileşimleri + çeviriler
└── images/
    ├── favicon.svg
    ├── slide-1.jpg
    ├── slide-2.JPG
    ├── slide-3.JPG
    ├── slide-4.jpg
    ├── slide-5.jpg
    └── menu/
        ├── ciborek.jpg
        ├── gozleme.avif
        ├── karisik-tost.jpg
        ├── kofte-ekmek.jpg
        ├── kumru-ekmek.jpg
        ├── kumru-lavas.jpg
        ├── sucuk-ekmek.jpg
        ├── tavuk-doner-ekmek.jpg
        └── tavuk-doner-lavas.jpg
```
