# وِرْد — الموقع التعريفي

صفحة واحدة تعرّف بمنصة وِرْد وتوجّه لتحميل التطبيق. React + Vite + Tailwind.

## التشغيل

```bash
npm install
npm run dev
```

## البناء

```bash
npm run build   # الناتج في مجلد dist
```

## الروابط

عدّل روابط المنصة والمتاجر من `src/config.js` فقط.
اترك رابط المتجر فارغاً ليظهر زره بعبارة «قريباً».

## الأقسام

`src/sections`: Navbar · Hero · Features · Roles · Steps · Download · Footer

## ملف تطبيق الأندرويد (APK)

1. من مجلد `Mobile` ابنِ الملف:
   ```bash
   eas build -p android --profile apk
   ```
2. حمّل الملف الناتج من رابط EAS، وسمّه `wird.apk`، وضعه في `public/downloads/`.
3. زر «ملف APK» في قسم التطبيق يحمّله مباشرة.

لا تضع ملف الـ APK في git (حجمه كبير)؛ انسخه إلى الخادم عند النشر.
