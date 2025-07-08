# 🖼️ CRITICAL: Asset Setup Instructions

## ⚠️ BEFORE DEPLOYMENT - REQUIRED ASSETS

The following image files must be downloaded from Figma and placed in the specified locations to avoid build failures:

## 📁 Required Directory Structure

Create this exact folder structure in `/public/`:

```
public/
├── assets/
│   ├── logos/
│   ├── backgrounds/
│   ├── doctors/
│   ├── services/
│   ├── clinic/
│   ├── partners/
│   └── badges/
└── favicon.ico (add your favicon)
```

## 🔗 Asset Mapping

Replace these Figma asset imports with local files:

### 1. Logos
```typescript
// OLD: import heroLogoImage from 'figma:asset/4c5ad3fffe4258f4abccecba4d2bc9649a29d47d.png';
// NEW: Save as -> /public/assets/logos/hero-logo.png

// OLD: import newLogoImage from 'figma:asset/fc04f69cf8b3132c1c4654f5434890a1a304074f.png';
// NEW: Save as -> /public/assets/logos/nav-logo.png
```

### 2. Backgrounds
```typescript
// OLD: import stoneBackground from 'figma:asset/a791d4cf17a3e5e8cebb8b02f8d4c76188754528.png';
// NEW: Save as -> /public/assets/backgrounds/stone-texture.png
```

### 3. Doctor Photos
```typescript
// OLD: import doctorChayut from 'figma:asset/fde591b5ff1dd0e6ffbeaee35edb5a171fa6fa6f.png';
// NEW: Save as -> /public/assets/doctors/dr-chayut.png

// OLD: import doctorRichard from 'figma:asset/aa547cf16bf6e5ef28d5d0528fa08c5efa4f7fa4.png';
// NEW: Save as -> /public/assets/doctors/dr-richard.png

// OLD: import doctorTeanchai from 'figma:asset/c1d13784583fdc7c1fd42230d167b7b50bd11746.png';
// NEW: Save as -> /public/assets/doctors/dr-teanchai.png

// OLD: import doctorNapasorn from 'figma:asset/43672ae98bb082c56eb3280870cbefe8cd010787.png';
// NEW: Save as -> /public/assets/doctors/dr-napasorn.png

// OLD: import doctorPrangpra from 'figma:asset/b55c990244cef6275d7bef816eab849b88f52ea5.png';
// NEW: Save as -> /public/assets/doctors/dr-prangpra.png
```

### 4. Service Images
```typescript
// OLD: import penileEnhancementImage from 'figma:asset/5207549ee506e6be9158c1daa13af26532acb9d7.png';
// NEW: Save as -> /public/assets/services/penile-enhancement.png

// OLD: import stemCellImage from 'figma:asset/08efa1fd5425ec88e49d40bbd35f061417b47118.png';
// NEW: Save as -> /public/assets/services/stem-cell.png

// OLD: import scrotoxImage from 'figma:asset/df684b5e8742eb2253b797a7247fccbe054d8bac.png';
// NEW: Save as -> /public/assets/services/scrotox.png

// OLD: import peyronieImage from 'figma:asset/1f9ab1c2b4a05dbf1cf4d37237e2b1cffdd16c95.png';
// NEW: Save as -> /public/assets/services/peyronie.png
```

### 5. Clinic Photos (7 images)
```typescript
// OLD: import clinicImage1 from 'figma:asset/d0694659808f3d64ae1bdd39ce6da4e8f6b7629c.png';
// NEW: Save as -> /public/assets/clinic/clinic-1.png

// OLD: import clinicImage2 from 'figma:asset/6644d749be4b75f08ab01d4cbde79fe81488c364.png';
// NEW: Save as -> /public/assets/clinic/clinic-2.png

// Continue for clinic-3.png through clinic-7.png...
```

### 6. Partner Logos
```typescript
// OLD: import trambellirLogo from 'figma:asset/4a69fb6825951ed85dcd49b39842866d58bef947.png';
// NEW: Save as -> /public/assets/partners/trambellir-logo.png

// OLD: import bcctLogo from 'figma:asset/505fa1368fe3b9375c2e3c490d2d06a6e91e6eb8.png';
// NEW: Save as -> /public/assets/partners/bcct-logo.png

// OLD: import amchamLogo from 'figma:asset/3b9dbc57a392d4c66ad7b9546647c7ea6ee3440e.png';
// NEW: Save as -> /public/assets/partners/amcham-logo.png
```

### 7. Other Assets
```typescript
// OLD: import bookimedBadge from 'figma:asset/b1376e27d9a5c87b1393926e1cbfbe146a09e297.png';
// NEW: Save as -> /public/assets/badges/bookimed-badge.png
```

## ✅ Verification Steps

1. **Download all assets** from Figma and save them in the exact paths listed above
2. **Check file formats** - ensure all images are .png or .jpg
3. **Verify file sizes** - optimize images for web (recommend < 500KB each)
4. **Test locally** - run `npm run build` to ensure no import errors
5. **Deploy** - only after all assets are in place

## 🚨 Build Will Fail Without These Assets

The application will not build or deploy successfully until all figma:asset imports are replaced with actual files in the public directory.