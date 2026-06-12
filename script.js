// =====================================================
//  1. DATASET UTAMA (52 RESPONDEN)
// =====================================================
const DATASET = [
    { gender: "L", tb: 178, bb: 68 }, { gender: "P", tb: 150, bb: 39.2 }, { gender: "L", tb: 183, bb: 83 },
    { gender: "P", tb: 147, bb: 41 }, { gender: "L", tb: 145, bb: 37 }, { gender: "L", tb: 174.5, bb: 69.7 },
    { gender: "P", tb: 157, bb: 49 }, { gender: "P", tb: 148, bb: 44 }, { gender: "P", tb: 153, bb: 57 },
    { gender: "P", tb: 155, bb: 58 }, { gender: "P", tb: 157, bb: 51 }, { gender: "L", tb: 175, bb: 60 },
    { gender: "L", tb: 165, bb: 48 }, { gender: "P", tb: 158, bb: 55 }, { gender: "L", tb: 165.5, bb: 53.3 },
    { gender: "L", tb: 169, bb: 63 }, { gender: "P", tb: 153, bb: 42 }, { gender: "P", tb: 158, bb: 60 },
    { gender: "P", tb: 149.9, bb: 43.4 }, { gender: "P", tb: 152, bb: 42.2 }, { gender: "P", tb: 150, bb: 45.86 },
    { gender: "P", tb: 159, bb: 50 }, { gender: "P", tb: 148, bb: 47 }, { gender: "P", tb: 150, bb: 41 },
    { gender: "L", tb: 176, bb: 75 }, { gender: "L", tb: 175, bb: 49.8 }, { gender: "P", tb: 153.2, bb: 48 },
    { gender: "P", tb: 148.9, bb: 49.5 }, { gender: "P", tb: 155, bb: 49 }, { gender: "L", tb: 168, bb: 50 },
    { gender: "P", tb: 158, bb: 50 }, { gender: "L", tb: 170, bb: 69 }, { gender: "P", tb: 159.5, bb: 53.5 },
    { gender: "P", tb: 156, bb: 45 }, { gender: "P", tb: 157, bb: 45 }, { gender: "L", tb: 169, bb: 55 },
    { gender: "L", tb: 174, bb: 60 }, { gender: "P", tb: 160, bb: 43 }, { gender: "P", tb: 160, bb: 43 },
    { gender: "P", tb: 158, bb: 47 }, { gender: "P", tb: 145.5, bb: 50 }, { gender: "L", tb: 180, bb: 54 },
    { gender: "L", tb: 162, bb: 56 }, { gender: "L", tb: 156, bb: 49 }, { gender: "P", tb: 150, bb: 40 },
    { gender: "P", tb: 145, bb: 42.5 }, { gender: "P", tb: 151.6, bb: 45.5 }, { gender: "P", tb: 160, bb: 60.5 },
    { gender: "L", tb: 170, bb: 50 }, { gender: "L", tb: 175, bb: 60 }, { gender: "L", tb: 170, bb: 55 },
    { gender: "L", tb: 163, bb: 70 }
];

// =====================================================
//  1.5. LANGUAGE/TRANSLASI SYSTEM
// =====================================================
const LANG_ID = {
    nav_home: "Beranda",
    nav_dataset: "Dataset",
    nav_regression: "Model Regresi",
    nav_visualization: "Visualisasi",
    nav_prediction: "Prediksi & 2D",
    nav_sizes: "Patokan Ukuran",
    btn_predict: "Coba Prediksi",
    
    hero_tag: "Sistem Prediksi Berbasis Regresi Linear Least Square",
    hero_title: "Temukan ukuran pakaian yang pas untuk tubuhmu.",
    hero_desc: "Prediksi ukuran kaos, hoodie, dan kemeja formal berdasarkan data antropometri. Masukkan tinggi, berat, dan dimensi tubuhmu SregPisan.id akan merekomendasikan ukuran yang tepat secara real-time.",
    hero_btn_start: "Mulai Prediksi",
    hero_btn_model: "Lihat Model",
    
    stat_slope: "Slope Global (b)",
    stat_intercept: "Intercept Global (a)",
    stat_correlation: "Korelasi (r)",
    stat_r2: "Koefisien R²",
    stat_rmse: "RMSE",
    stat_total: "Total Responden",
    
    dataset_title: "52 data antropometri sebagai basis model",
    dataset_desc: "Data tinggi badan, berat badan, BMI, dan kategori tubuh yang digunakan sebagai dasar perhitungan model regresi.",
    dataset_search: "Cari (tinggi, berat, gender, kategori)…",
    dataset_gender_all: "Semua Gender",
    dataset_gender_male: "Laki-laki",
    dataset_gender_female: "Perempuan",
    dataset_count: "data ditemukan",
    dataset_table_no: "No",
    dataset_table_gender: "JK",
    dataset_table_height: "TB (cm)",
    dataset_table_weight: "BB (kg)",
    dataset_table_bmi: "BMI",
    dataset_table_category: "Kategori",
    
    regression_title: "Model Regresi Tinggi dan Berat Badan",
    regression_desc: "Persamaan dihitung dengan metode Least Square untuk melihat tren berat badan terhadap tinggi badan. Model dipisah per gender agar pembanding lebih relevan.",
    regression_eq_general: "Persamaan Umum (Gabungan)",
    regression_eq_male: "Khusus Laki-laki",
    regression_eq_female: "Khusus Perempuan",
    regression_adjustment: "Penyesuaian Ukuran Otomatis",
    regression_adjustment_desc: "Diberikan pasangan data (TBᵢ, BBᵢ), sistem mengevaluasi penyimpangan berat aktual terhadap tren garis lurus regresi gender. Jika status metabolisme tubuh terdeteksi masuk ke dalam kategori Obesitas (BMI ≥ 30), algoritma rekomendasi otomatis dinaikkan satu ukuran untuk memberi ruang pakai yang lebih nyaman.",
    
    scatter_title: "Visualisasi perbandingan TB & BB responden",
    scatter_desc: "Grafik membandingkan tinggi dan berat dari seluruh responden. Warna batang mewakili gender responden.",
    
    prediction_title: "Sesuaikan tubuhmu, lihat hasil real-time",
    prediction_desc: "Field opsional otomatis terisi dari rumus turunan TB/BB/gender. Visualisasi pakaian dan rekomendasi ukuran ikut menyesuaikan.",
    prediction_body_title: "Data Tubuh",
    prediction_standard_title: "Ukuran Standar",
    prediction_standard_desc: "Masukkan tinggi dan berat badan untuk rekomendasi awal.",
    prediction_gender: "Jenis Kelamin",
    prediction_height: "Tinggi (cm)",
    prediction_weight: "Berat (kg)",
    prediction_bmi: "BMI & Status",
    prediction_toggle: "Ukuran Tambahan",
    prediction_shoulder: "Lebar Bahu (cm)",
    prediction_chest: "Lingkar Dada (cm)",
    prediction_waist: "Lingkar Pinggang (cm)",
    prediction_hip: "Lingkar Pinggul (cm)",
    prediction_clothing_type: "Jenis Pakaian",
    prediction_color: "Pilih warna:",
    prediction_recommendation: "Rekomendasi",
    prediction_visualizer: "Visualisasi Pakaian",
    prediction_subtitle: "Rekomendasi sesuai tubuh Anda",
    
    clothing_kaos: "Kaos",
    clothing_hoodie: "Hoodie",
    clothing_formal: "Formal",
    
    size_title: "Standar ukuran marketplace (Shopee)",
    size_desc: "Acuan rentang TB, BB, dan dimensi untuk tiap ukuran pakaian. Sistem memetakan hasil prediksi ke ukuran terdekat di chart ini.",
    size_table_header_size: "Size",
    size_table_header_weight: "Berat (BB)",
    size_table_header_height: "Tinggi (TB)",
    size_table_header_chest: "Lebar Dada × Panjang",
    size_kaos_title: "Kaos (T-Shirt)",
    size_hoodie_title: "Hoodie",
    size_formal_title: "Kemeja Formal",
    
    mobile_home: "Beranda",
    mobile_prediction: "Prediksi",
    mobile_dataset: "Dataset",
    mobile_model: "Model",
    mobile_sizes: "Ukuran",
    
    footer_text: "© 2026 Kelompok 7",
    
    bmi_thin: "Kurus",
    bmi_normal: "Normal",
    bmi_overweight: "Overweight",
    bmi_obese: "Obesitas",
    
    chart_height: "Tinggi Badan (cm)",
    chart_weight: "Berat Badan (kg)",
    
    pred_narration_based: "Berdasarkan tren regresi",
    pred_narration_ideal: "berat normatif untuk tinggi",
    pred_narration_cm: "cm adalah",
    pred_narration_kg: "kg (selisih",
    pred_narration_from_trend: "dari garis tren). Ukuran",
    pred_narration_recommended: "yang direkomendasikan:",
    pred_obesity_warning: "⚠️ Ukuran dinaikkan 1 level karena BMI masuk kategori Obesitas.",
    pred_other_sizes: "Ukuran lain:",
    pred_shoulder: "Lebar Bahu:",
    pred_chest_measure: "Lingkar Dada:",
    pred_waist_measure: "Lingkar Pinggang:",
    pred_hip_measure: "Lingkar Pinggul:"
};

const LANG_EN = {
    nav_home: "Home",
    nav_dataset: "Dataset",
    nav_regression: "Regression",
    nav_visualization: "Visualization",
    nav_prediction: "Prediction",
    nav_sizes: "Size Reference",
    btn_predict: "Try Prediction",
    
    hero_tag: "Clothing Size Prediction System Based on Linear Regression Least Square",
    hero_title: "Find the perfect clothing size for your body.",
    hero_desc: "Predict the size of t-shirts, hoodies, and formal shirts based on anthropometric data. Enter your height, weight, and body dimensions and SregPisan.id will recommend the right size in real-time.",
    hero_btn_start: "Start Prediction",
    hero_btn_model: "View Model",
    
    stat_slope: "Global Slope (b)",
    stat_intercept: "Global Intercept (a)",
    stat_correlation: "Correlation (r)",
    stat_r2: "R² Coefficient",
    stat_rmse: "RMSE",
    stat_total: "Total Respondents",
    
    dataset_title: "52 anthropometric data as model basis",
    dataset_desc: "Height, weight, BMI, and body category data used as the basis for regression model calculation.",
    dataset_search: "Search (height, weight, gender, category)…",
    dataset_gender_all: "All Gender",
    dataset_gender_male: "Male",
    dataset_gender_female: "Female",
    dataset_count: "data found",
    dataset_table_no: "No",
    dataset_table_gender: "Gender",
    dataset_table_height: "Height (cm)",
    dataset_table_weight: "Weight (kg)",
    dataset_table_bmi: "BMI",
    dataset_table_category: "Category",
    
    regression_title: "Height and Weight Regression Model",
    regression_desc: "Equations calculated using the Least Square method to see the trend of weight against height. The model is separated by gender for more relevant comparison.",
    regression_eq_general: "General Equation (Combined)",
    regression_eq_male: "Male Only",
    regression_eq_female: "Female Only",
    regression_adjustment: "Automatic Size Adjustment",
    regression_adjustment_desc: "Given data pairs (Hᵢ, Wᵢ), the system evaluates the deviation of actual weight from the gender-specific linear regression trend. If body metabolic status is detected to fall into the Obese category (BMI ≥ 30), the automatic recommendation algorithm is increased by one size to provide more comfortable wearing space.",
    
    scatter_title: "Visualization of height & weight comparison of respondents",
    scatter_desc: "Graph comparing height and weight from all respondents. Bar color represents respondent gender.",
    
    prediction_title: "Adjust your body, see real-time results",
    prediction_desc: "Optional fields are automatically filled from height/weight/gender formulas. Clothing visualization and size recommendations adjust accordingly.",
    prediction_body_title: "Body Data",
    prediction_standard_title: "Standard Size",
    prediction_standard_desc: "Enter your height and weight for initial recommendation.",
    prediction_gender: "Gender",
    prediction_height: "Height (cm)",
    prediction_weight: "Weight (kg)",
    prediction_bmi: "BMI & Status",
    prediction_toggle: "Additional Sizes",
    prediction_shoulder: "Shoulder Width (cm)",
    prediction_chest: "Chest Circumference (cm)",
    prediction_waist: "Waist Circumference (cm)",
    prediction_hip: "Hip Circumference (cm)",
    prediction_clothing_type: "Clothing Type",
    prediction_color: "Choose color:",
    prediction_recommendation: "Recommendation",
    prediction_visualizer: "Clothing Visualization",
    prediction_subtitle: "Recommendation based on your body",
    
    clothing_kaos: "T-Shirt",
    clothing_hoodie: "Hoodie",
    clothing_formal: "Formal",
    
    size_title: "Marketplace size standard (Shopee)",
    size_desc: "Reference range of height, weight, and dimensions for each clothing size. The system maps prediction results to the closest size in this chart.",
    size_table_header_size: "Size",
    size_table_header_weight: "Weight (kg)",
    size_table_header_height: "Height (cm)",
    size_table_header_chest: "Width × Length",
    size_kaos_title: "T-Shirt",
    size_hoodie_title: "Hoodie",
    size_formal_title: "Formal Shirt",
    
    mobile_home: "Home",
    mobile_prediction: "Prediction",
    mobile_dataset: "Dataset",
    mobile_model: "Model",
    mobile_sizes: "Sizes",
    
    footer_text: "© 2026 Group 7",
    
    bmi_thin: "Thin",
    bmi_normal: "Normal",
    bmi_overweight: "Overweight",
    bmi_obese: "Obese",
    
    chart_height: "Height (cm)",
    chart_weight: "Weight (kg)",
    
    pred_narration_based: "Based on regression trend",
    pred_narration_ideal: "normative weight for height",
    pred_narration_cm: "cm is",
    pred_narration_kg: "kg (difference",
    pred_narration_from_trend: "from trend line). Size",
    pred_narration_recommended: "recommended:",
    pred_obesity_warning: "⚠️ Size increased by 1 level because BMI is in the Obese category.",
    pred_other_sizes: "Other sizes:",
    pred_shoulder: "Shoulder Width:",
    pred_chest_measure: "Chest Circumference:",
    pred_waist_measure: "Waist Circumference:",
    pred_hip_measure: "Hip Circumference:"
};

let currentLang = localStorage.getItem('siteLang') || 'id';

function translate(key) {
    const langDict = currentLang === 'id' ? LANG_ID : LANG_EN;
    return langDict[key] || key;
}

function setLanguage(lang) {
    if (lang !== 'id' && lang !== 'en') return;
    currentLang = lang;
    localStorage.setItem('siteLang', lang);
    
    const langDict = lang === 'id' ? LANG_ID : LANG_EN;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langDict[key]) {
            el.textContent = langDict[key];
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (langDict[key]) {
            el.placeholder = langDict[key];
        }
    });
    
    document.querySelectorAll('option[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langDict[key]) {
            el.textContent = langDict[key];
        }
    });
    
    document.getElementById('btnLangID').classList.toggle('active', lang === 'id');
    document.getElementById('btnLangEN').classList.toggle('active', lang === 'en');
    
    updateDynamicTranslations();
}

function updateDynamicTranslations() {
    renderDatasetTable();
    if (scatterChartInstance) updateChartLabels();
    
    // Update toggle button text
    const toggleBtn = document.getElementById('toggleOtherSizes');
    const panel = document.getElementById('otherSizesPanel');
    if (toggleBtn && panel) {
        const isCollapsed = panel.classList.contains('collapsed');
        toggleBtn.innerText = translate('prediction_toggle') + (isCollapsed ? ' ▾' : ' ▴');
    }
    
    updatePrediction();
}

function updateChartLabels() {
    if (!scatterChartInstance) return;
    scatterChartInstance.data.datasets[0].label = translate('chart_height');
    scatterChartInstance.data.datasets[1].label = translate('chart_weight');
    scatterChartInstance.options.scales.yTB.title.text = translate('chart_height');
    scatterChartInstance.options.scales.yBB.title.text = translate('chart_weight');
    scatterChartInstance.update();
}

// Apply saved language on page load
window.addEventListener('load', () => {
    setLanguage(currentLang);
});

// =====================================================
//  2. SIZE CHARTS
// =====================================================

// Kaos (T-Shirt)
const SIZE_CHART_KAOS = [
    { size: "XS",   tMin: 0,   tMax: 154.9, bMin: 38, bMax: 47,  chest: "47 × 65.5 cm" },
    { size: "S",    tMin: 150, tMax: 164.9, bMin: 45, bMax: 56,  chest: "49 × 67.5 cm" },
    { size: "M",    tMin: 158, tMax: 172.9, bMin: 55, bMax: 68,  chest: "51 × 69.5 cm" },
    { size: "L",    tMin: 165, tMax: 177.9, bMin: 65, bMax: 78,  chest: "53 × 71.5 cm" },
    { size: "XL",   tMin: 170, tMax: 182.9, bMin: 75, bMax: 88,  chest: "55 × 73.5 cm" },
    { size: "XXL",  tMin: 175, tMax: 187.9, bMin: 85, bMax: 98,  chest: "57 × 75.5 cm" },
    { size: "XXXL", tMin: 178, tMax: 999,   bMin: 95, bMax: 110, chest: "60 × 77.5 cm" }
];

// Hoodie
const SIZE_CHART_HOODIE_BASE = [
    { size: "XS",   tMin: 0,   tMax: 155.9, bMin: 36, bMax: 46,  chest: "44 × 64 cm"   },
    { size: "S",    tMin: 150, tMax: 163.9, bMin: 44, bMax: 55,  chest: "46 × 66 cm"   },
    { size: "M",    tMin: 158, tMax: 171.9, bMin: 54, bMax: 67,  chest: "48 × 68 cm"   },
    { size: "L",    tMin: 165, tMax: 177.9, bMin: 65, bMax: 77,  chest: "50 × 70 cm"   },
    { size: "XL",   tMin: 170, tMax: 182.9, bMin: 74, bMax: 87,  chest: "52 × 72 cm"   },
    { size: "XXL",  tMin: 175, tMax: 187.9, bMin: 84, bMax: 97,  chest: "54 × 74 cm"   },
    { size: "XXXL", tMin: 178, tMax: 999,   bMin: 95, bMax: 115, chest: "58 × 76 cm"   }
];

const SIZE_CHART_HOODIE = [
    { size: "XS",   tMin: 0,   tMax: 154.9, bMin: 38, bMax: 47,  chest: "52 x 64 cm" },
    { size: "S",    tMin: 150, tMax: 164.9, bMin: 45, bMax: 56,  chest: "54 x 66 cm" },
    { size: "M",    tMin: 158, tMax: 172.9, bMin: 55, bMax: 68,  chest: "56 x 68 cm" },
    { size: "L",    tMin: 165, tMax: 177.9, bMin: 65, bMax: 78,  chest: "58 x 70 cm" },
    { size: "XL",   tMin: 170, tMax: 182.9, bMin: 75, bMax: 88,  chest: "60 x 72 cm" },
    { size: "XXL",  tMin: 175, tMax: 187.9, bMin: 85, bMax: 98,  chest: "62 x 74 cm" },
    { size: "XXXL", tMin: 178, tMax: 999,   bMin: 95, bMax: 115, chest: "65 x 76 cm" }
];

// Kemeja Formal
const SIZE_CHART_FORMAL = [
    { size: "XS",   tMin: 0,   tMax: 154.9, bMin: 38, bMax: 47,  chest: "88–92 cm LD"  },
    { size: "S",    tMin: 150, tMax: 164.9, bMin: 44, bMax: 55,  chest: "92–96 cm LD"  },
    { size: "M",    tMin: 158, tMax: 172.9, bMin: 54, bMax: 67,  chest: "96–100 cm LD" },
    { size: "L",    tMin: 165, tMax: 177.9, bMin: 64, bMax: 77,  chest: "100–104 cm LD"},
    { size: "XL",   tMin: 170, tMax: 182.9, bMin: 74, bMax: 87,  chest: "104–110 cm LD"},
    { size: "XXL",  tMin: 175, tMax: 187.9, bMin: 84, bMax: 98,  chest: "110–118 cm LD"},
    { size: "XXXL", tMin: 178, tMax: 999,   bMin: 95, bMax: 115, chest: "118+ cm LD"   }
];

// Map jenis baju → size chart
const SIZE_CHARTS = {
    kaos: SIZE_CHART_KAOS,
    hoodie: SIZE_CHART_HOODIE,
    formal: SIZE_CHART_FORMAL
};

// =====================================================
//  GLOBAL STATE
// =====================================================
let scatterChartInstance = null;
let modelGlobal, modelMale, modelFemale;
let avatarImageEl = null;
let shirtScaleWrapperEl = null;
let shirtSizeOverlayEl = null;
let selectedColor = 'hitam';
let selectedClothingType = 'kaos';
const CLOTHING_IMAGE_PATH = 'assets/img';
const CLOTHING_IMAGE_VERSION = '3.3.0';

// =====================================================
//  3. LOGIKA LEAST SQUARE REGRESSION
// =====================================================
function calculateLeastSquare(arr) {
    const n = arr.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0, sumYY = 0;

    arr.forEach(d => {
        sumX += d.tb; sumY += d.bb;
        sumXY += (d.tb * d.bb);
        sumXX += (d.tb * d.tb);
        sumYY += (d.bb * d.bb);
    });

    const b = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const a = (sumY - b * sumX) / n;
    const r = (n * sumXY - sumX * sumY) / Math.sqrt((n * sumXX - sumX * sumX) * (n * sumYY - sumY * sumY));
    const r2 = r * r;

    let sumSquaredError = 0;
    arr.forEach(d => {
        const yPred = a + b * d.tb;
        sumSquaredError += Math.pow(d.bb - yPred, 2);
    });
    const rmse = Math.sqrt(sumSquaredError / n);

    return { a, b, r, r2, rmse, n };
}

function getBmiCategory(bmiValue) {
    if (bmiValue < 18.5) return { text: translate('bmi_thin'), cls: "bmi-warn" };
    if (bmiValue < 25)   return { text: translate('bmi_normal'), cls: "bmi-normal" };
    if (bmiValue < 30)   return { text: translate('bmi_overweight'), cls: "bmi-warn" };
    return { text: translate('bmi_obese'), cls: "bmi-danger" };
}

function findBestSize(tb, bb, chart) {
    const matches = chart.map((s, idx) => ({ s, idx }))
        .filter(({ s }) => tb >= s.tMin && tb <= s.tMax && bb >= s.bMin && bb <= s.bMax);

    let selectedIndex = -1;
    if (matches.length === 1) {
        selectedIndex = matches[0].idx;
    } else if (matches.length > 1) {
        let minDistance = Infinity;
        matches.forEach(({ s, idx }) => {
            const centerT = (s.tMin + s.tMax) / 2;
            const centerB = (s.bMin + s.bMax) / 2;
            const dist = Math.sqrt(Math.pow(tb - centerT, 2) + Math.pow((bb - centerB) * 1.2, 2));
            if (dist < minDistance) { minDistance = dist; selectedIndex = idx; }
        });
    }

    if (selectedIndex === -1) {
        selectedIndex = 0;
        let minDistance = Infinity;
        chart.forEach((s, idx) => {
            const centerT = (s.tMin + s.tMax) / 2;
            const centerB = (s.bMin + s.bMax) / 2;
            const dist = Math.sqrt(Math.pow(tb - centerT, 2) + Math.pow((bb - centerB) * 1.2, 2));
            if (dist < minDistance) { minDistance = dist; selectedIndex = idx; }
        });
    }

    const activeSize = chart[selectedIndex];
    const totalBoxWidth = activeSize.bMax - activeSize.bMin;
    const currentOffset = bb - activeSize.bMin;
    let pct = (currentOffset / totalBoxWidth) * 100;
    pct = Math.max(5, Math.min(95, pct));

    return { sizeObj: activeSize, index: selectedIndex, percentage: pct };
}

function applyChestBasedSize(result, chestCircumference, chart) {
    if (!chestCircumference) return result;
    let bestIndex = result.index;
    let bestDistance = Infinity;
    chart.forEach((sizeObj, idx) => {
        const chestStr = sizeObj.chest;
        if (!chestStr) return;
        // Parse "51 × 69.5 cm" or "96–100 cm LD" patterns
        const match = chestStr.match(/^(\d+)/);
        if (!match) return;
        const widthVal = parseFloat(match[1]);
        const expectedCirc = widthVal * 2;
        const dist = Math.abs(chestCircumference - expectedCirc);
        if (dist < bestDistance) { bestDistance = dist; bestIndex = idx; }
    });
    if (bestIndex !== result.index) {
        result.index = bestIndex;
        result.sizeObj = chart[bestIndex];
    }
    return result;
}

// =====================================================
//  4. INITIALIZATION
// =====================================================
const initializeApp = function () {
    modelGlobal = calculateLeastSquare(DATASET);
    modelMale   = calculateLeastSquare(DATASET.filter(d => d.gender === 'L'));
    modelFemale = calculateLeastSquare(DATASET.filter(d => d.gender === 'P'));

    // Stats
    document.getElementById("statSlope").innerText     = modelGlobal.b.toFixed(4);
    document.getElementById("statIntercept").innerText = modelGlobal.a.toFixed(4);
    document.getElementById("statKorelasi").innerText  = modelGlobal.r.toFixed(4);
    document.getElementById("statR2").innerText        = (modelGlobal.r2 * 100).toFixed(2) + "%";
    document.getElementById("statRmse").innerText      = modelGlobal.rmse.toFixed(2) + " kg";
    document.getElementById("statTotalData").innerText = modelGlobal.n;

    // Formulas
    document.getElementById("eqGlobal").innerText = `BB = ${modelGlobal.b.toFixed(3)} × TB ${modelGlobal.a < 0 ? '-' : '+'} ${Math.abs(modelGlobal.a).toFixed(2)}`;
    document.getElementById("eqMale").innerText   = `BB = ${modelMale.b.toFixed(3)} × TB ${modelMale.a < 0 ? '-' : '+'} ${Math.abs(modelMale.a).toFixed(2)}`;
    document.getElementById("eqFemale").innerText = `BB = ${modelFemale.b.toFixed(3)} × TB ${modelFemale.a < 0 ? '-' : '+'} ${Math.abs(modelFemale.a).toFixed(2)}`;

    // Dataset table
    setupDatasetTable();

    // Size chart tables
    renderSizeChartTable('sizeChartKaosView', SIZE_CHART_KAOS);
    renderSizeChartTable('sizeChartHoodieView', SIZE_CHART_HOODIE);
    renderSizeChartTable('sizeChartFormalView', SIZE_CHART_FORMAL);

    // Chart
    try { initBarChart(); } catch (e) { console.error('Chart init error:', e.message); }

    // Avatar
    try {
        initAvatarImage();
        initColorSwatches();
    } catch (e) { console.error('Avatar init error:', e.message); }

    // Theme
    initTheme();

    // First prediction
    try { updatePrediction(); } catch (e) { console.error('Prediction error:', e.message); }

    // Input listeners
    ['gender', 'height', 'weight', 'shoulderWidth', 'chestCircumference', 'waistCircumference', 'hipCircumference'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', updatePrediction);
    });
    document.getElementById('gender').addEventListener('change', updatePrediction);

    // Toggle other sizes
    const toggleBtn = document.getElementById('toggleOtherSizes');
    const panel     = document.getElementById('otherSizesPanel');
    if (toggleBtn && panel) {
        toggleBtn.addEventListener('click', () => {
            panel.classList.toggle('collapsed');
            toggleBtn.innerText = translate('prediction_toggle') + (panel.classList.contains('collapsed') ? ' ▾' : ' ▴');
        });
    }
};

function renderSizeChartTable(tbodyId, chart) {
    document.getElementById(tbodyId).innerHTML = chart.map(s =>
        `<tr><td><b>${s.size}</b></td><td>${s.bMin}–${s.bMax} kg</td><td>${s.tMin === 0 ? '< ' + s.tMax : s.tMax === 999 ? '> ' + s.tMin : s.tMin + '–' + s.tMax} cm</td><td>${s.chest}</td></tr>`
    ).join('');
}

// =====================================================
//  THEME
// =====================================================
function getStoredTheme()    { return localStorage.getItem('theme'); }
function getPreferredTheme() {
    const stored = getStoredTheme();
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function updateChartTheme(theme) {
    if (!scatterChartInstance) return;
    const isDark   = theme === 'dark';
    const axisClr  = isDark ? '#888888' : '#666666';
    const gridClr  = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.05)';
    const titleClr = isDark ? '#a78bfa' : '#6d28d9';
    const secClr   = isDark ? '#6ee7b7' : '#059669';

    scatterChartInstance.options.plugins.legend.labels.color = isDark ? '#e0e0e0' : '#111111';
    scatterChartInstance.options.scales.x.ticks.color   = axisClr;
    scatterChartInstance.options.scales.x.grid.color    = gridClr;
    scatterChartInstance.options.scales.yTB.title.color = titleClr;
    scatterChartInstance.options.scales.yTB.ticks.color = axisClr;
    scatterChartInstance.options.scales.yTB.grid.color  = gridClr;
    scatterChartInstance.options.scales.yBB.title.color = secClr;
    scatterChartInstance.options.scales.yBB.ticks.color = axisClr;
    scatterChartInstance.options.scales.yBB.grid.color  = gridClr;
    scatterChartInstance.update();
}

function applyTheme(theme) {
    const normalized = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', normalized);
    const toggle = document.getElementById('themeToggle');
    if (toggle) toggle.innerText = normalized === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('theme', normalized);
    updateChartTheme(normalized);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
}

function initTheme() {
    applyTheme(getPreferredTheme());
    const toggle = document.getElementById('themeToggle');
    if (toggle) toggle.addEventListener('click', toggleTheme);
}

// =====================================================
//  DATASET TABLE
// =====================================================
let datasetCurrentGender = 'all';
let datasetSearchTerm    = '';

function buildTableRow(d, index) {
    const bmi = d.bb / Math.pow(d.tb / 100, 2);
    const cat = getBmiCategory(bmi);
    return `<tr>
        <td>${index + 1}</td>
        <td><span style="font-weight:700; color:${d.gender === 'L' ? '#a78bfa' : '#6ee7b7'}">${d.gender}</span></td>
        <td>${d.tb}</td>
        <td>${d.bb.toFixed(1)}</td>
        <td>${bmi.toFixed(1)}</td>
        <td><span class="bmi-badge ${cat.cls}">${cat.text}</span></td>
    </tr>`;
}

function renderDatasetTable() {
    const tableBody   = document.getElementById('tableBody');
    const datasetCount = document.getElementById('datasetCount');
    const searchTerm  = datasetSearchTerm.toLowerCase();

    const filtered = DATASET.filter(d => {
        if (datasetCurrentGender !== 'all' && d.gender !== datasetCurrentGender) return false;
        if (!searchTerm) return true;
        const bmiVal  = d.bb / Math.pow(d.tb / 100, 2);
        const category = getBmiCategory(bmiVal).text;
        const text    = `${d.gender} ${d.tb} ${d.bb.toFixed(1)} ${bmiVal.toFixed(1)} ${category}`.toLowerCase();
        return text.includes(searchTerm);
    });

    tableBody.innerHTML    = filtered.map((d, idx) => buildTableRow(d, idx)).join('');
    datasetCount.innerText = `${filtered.length} ${translate('dataset_count')}`;
}

function setupDatasetTable() {
    const searchInput  = document.getElementById('datasetSearch');
    const genderSelect = document.getElementById('datasetGender');
    if (searchInput)  searchInput.addEventListener('input', () => { datasetSearchTerm = searchInput.value.trim(); renderDatasetTable(); });
    if (genderSelect) genderSelect.addEventListener('change', () => { datasetCurrentGender = genderSelect.value || 'all'; renderDatasetTable(); });
    renderDatasetTable();
}

document.addEventListener('DOMContentLoaded', initializeApp);

// =====================================================
//  5. CHART JS
// =====================================================
function initBarChart() {
    const ctx    = document.getElementById('scatterChart').getContext('2d');
    const labels = DATASET.map((_, i) => `R${i + 1}`).concat(['You']);
    const tbData = DATASET.map(d => d.tb).concat([158]);
    const bbData = DATASET.map(d => d.bb).concat([50]);
    const tbColors = DATASET.map(d => d.gender === 'L' ? 'rgba(167, 139, 250, 0.5)' : 'rgba(110, 231, 183, 0.5)').concat(['#a78bfa']);
    const bbColors = DATASET.map(d => d.gender === 'L' ? 'rgba(167, 139, 250, 0.8)' : 'rgba(110, 231, 183, 0.8)').concat(['#6ee7b7']);

    scatterChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [
                { label: translate('chart_height'), data: tbData, backgroundColor: tbColors, borderColor: 'transparent', borderWidth: 0, yAxisID: 'yTB' },
                { label: translate('chart_weight'),  data: bbData, backgroundColor: bbColors, borderColor: 'transparent', borderWidth: 0, yAxisID: 'yBB' }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#e0e0e0', font: { family: 'Inter', weight: 600 } } },
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            let label = ctx.dataset.label || '';
                            if (label) label += ': ';
                            if (ctx.parsed.y !== null) label += ctx.parsed.y;
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: { ticks: { color: '#888', font: { family: 'Inter', size: 9 } }, grid: { color: 'rgba(255,255,255,0.02)' } },
                yTB: {
                    type: 'linear', position: 'left',
                    title: { display: true, text: translate('chart_height'), color: '#a78bfa', font: { family: 'Inter', weight: 700 } },
                    ticks: { color: '#888' }, grid: { color: 'rgba(255,255,255,0.03)' }, min: 100, max: 210
                },
                yBB: {
                    type: 'linear', position: 'right',
                    title: { display: true, text: translate('chart_weight'), color: '#6ee7b7', font: { family: 'Inter', weight: 700 } },
                    ticks: { color: '#888' }, grid: { drawOnChartArea: false }, min: 20, max: 120
                }
            }
        }
    });
}

// =====================================================
//  6. AVATAR SETUP
// =====================================================
function showError(msg) {
    const el = document.getElementById('errorLog');
    if (el) { el.innerText = msg; el.style.display = 'block'; }
    else console.error(msg);
}

window.onerror = function (message, source, lineno, colno) {
    showError(`${message} at ${source}:${lineno}:${colno}`);
    return false;
};

window.addEventListener('unhandledrejection', function (ev) {
    const reason = ev.reason ? (ev.reason.message || ev.reason) : 'Unknown rejection';
    showError('UnhandledRejection: ' + reason);
});

function initAvatarImage() {
    avatarImageEl      = document.getElementById('avatarImage');
    shirtScaleWrapperEl = document.getElementById('shirtScaleWrapper');
    shirtSizeOverlayEl = document.getElementById('shirtSizeOverlay');
}

function initColorSwatches() {
    const swatches = document.querySelectorAll('.swatch');
    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            swatches.forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            selectedColor = swatch.getAttribute('data-color');
            updatePrediction();
        });
    });
}

// =====================================================
//  CLOTHING TYPE SELECTOR
// =====================================================
function selectClothingType(type, clickedBtn) {
    selectedClothingType = type;

    // Update tabs
    document.querySelectorAll('.type-tab').forEach(btn => btn.classList.remove('active'));
    if (clickedBtn) clickedBtn.classList.add('active');

    // Update label & badge
    const typeKeys = { kaos: 'clothing_kaos', hoodie: 'clothing_hoodie', formal: 'clothing_formal' };
    const el = document.getElementById('recLabel');
    if (el) el.innerText = translate('prediction_recommendation') + ' ' + translate(typeKeys[type] || 'clothing_kaos');

    const badge = document.getElementById('clothingTypeBadge');
    if (badge) badge.innerText = translate(typeKeys[type] || 'clothing_kaos');

    updatePrediction();
}

function switchSizeTab(type, clickedBtn) {
    document.querySelectorAll('.size-table-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.size-table-panel').forEach(p => p.classList.remove('active'));
    if (clickedBtn) clickedBtn.classList.add('active');
    const panel = document.getElementById('sizePanel-' + type);
    if (panel) panel.classList.add('active');
}

// =====================================================
//  7. PREDICTION ENGINE
// =====================================================
function updatePrediction() {
    const genderInput = document.getElementById('gender').value;
    const tb = parseFloat(document.getElementById('height').value) || 160;
    const bb = parseFloat(document.getElementById('weight').value) || 50;

    // BMI
    const bmi = bb / Math.pow(tb / 100, 2);
    const cat = getBmiCategory(bmi);
    document.getElementById('bmi').value = `${bmi.toFixed(1)} (${cat.text})`;

    const shoulderWidth       = parseFloat(document.getElementById('shoulderWidth').value) || null;
    const chestCircumference  = parseFloat(document.getElementById('chestCircumference').value) || null;
    const waistCircumference  = parseFloat(document.getElementById('waistCircumference').value) || null;
    const hipCircumference    = parseFloat(document.getElementById('hipCircumference').value) || null;

    // Sync chart
    if (scatterChartInstance) {
        const lastIdx = scatterChartInstance.data.labels.length - 1;
        scatterChartInstance.data.datasets[0].data[lastIdx] = tb;
        scatterChartInstance.data.datasets[1].data[lastIdx] = bb;
        const hlTB = genderInput === 'L' ? '#a78bfa' : '#6ee7b7';
        const hlBB = genderInput === 'L' ? '#7c3aed' : '#059669';
        scatterChartInstance.data.datasets[0].backgroundColor[lastIdx] = hlTB;
        scatterChartInstance.data.datasets[1].backgroundColor[lastIdx] = hlBB;
        scatterChartInstance.update();
    }

    // Size recommendation using active clothing type's chart
    const activeChart = SIZE_CHARTS[selectedClothingType] || SIZE_CHART_KAOS;
    let result = findBestSize(tb, bb, activeChart);
    result = applyChestBasedSize(result, chestCircumference, activeChart);

    // Obesity bump
    let isUpgraded = false;
    if (cat.text === "Obesitas" && result.index < activeChart.length - 1) {
        result.index  += 1;
        result.sizeObj = activeChart[result.index];
        isUpgraded     = true;
    }

    // Render recommendation
    document.getElementById('shirtSize').innerText    = result.sizeObj.size;
    document.getElementById('shirtRange').innerText   = `TB ${result.sizeObj.tMin === 0 ? '< ' + result.sizeObj.tMax : result.sizeObj.tMax === 999 ? '> ' + result.sizeObj.tMin : result.sizeObj.tMin + '–' + result.sizeObj.tMax} cm · BB ${result.sizeObj.bMin}–${result.sizeObj.bMax} kg${result.sizeObj.chest ? ' · ' + result.sizeObj.chest : ''}`;
    document.getElementById('shirtProgress').style.width = `${result.percentage}%`;

    // Narasi
    const activeModel   = genderInput === 'L' ? modelMale : modelFemale;
    const bbIdeal       = activeModel.a + activeModel.b * tb;
    const selisih       = bb - bbIdeal;
    const typeKeys      = { kaos: 'clothing_kaos', hoodie: 'clothing_hoodie', formal: 'clothing_formal' };
    const typeName      = translate(typeKeys[selectedClothingType] || 'clothing_kaos');
    const genderName    = genderInput === 'L' ? (currentLang === 'id' ? 'Laki-laki' : 'Male') : (currentLang === 'id' ? 'Perempuan' : 'Female');

    let narasi = `${translate('pred_narration_based')} <b>${genderName}</b>, ${translate('pred_narration_ideal')} ${tb} ${translate('pred_narration_cm')} <b>${bbIdeal.toFixed(1)} kg</b> (${translate('pred_narration_kg')} ${selisih > 0 ? '+' : ''}${selisih.toFixed(1)} kg ${translate('pred_narration_from_trend')} <b>${typeName}</b> ${translate('pred_narration_recommended')} <b>${result.sizeObj.size}</b>.`;
    if (isUpgraded) {
        narasi += `<br><span style="color:#fbbf24; font-weight:600;">${translate('pred_obesity_warning')}</span>`;
    }

    const extras = [];
    if (shoulderWidth)      extras.push(`${translate('pred_shoulder')} ${shoulderWidth.toFixed(1)} cm`);
    if (chestCircumference) extras.push(`${translate('pred_chest_measure')} ${chestCircumference.toFixed(1)} cm`);
    if (waistCircumference) extras.push(`${translate('pred_waist_measure')} ${waistCircumference.toFixed(1)} cm`);
    if (hipCircumference)   extras.push(`${translate('pred_hip_measure')} ${hipCircumference.toFixed(1)} cm`);
    if (extras.length) narasi += `<br><b>${translate('pred_other_sizes')}</b> ${extras.join(' · ')}`;

    document.getElementById('interpretationBox').innerHTML = narasi;

    // ---- UPDATE IMAGE ----
    if (avatarImageEl) {
        const genderPrefix = genderInput === 'L' ? 'laki' : 'perempuan';
        const colorName    = selectedColor || 'hitam';
        const imgSrc       = `${CLOTHING_IMAGE_PATH}/${selectedClothingType}_${genderPrefix}_${colorName}.png?v=${CLOTHING_IMAGE_VERSION}`;
        avatarImageEl.src  = imgSrc;
        avatarImageEl.style.filter = 'none';

        // Scale
        const scaleX = Math.max(0.55, Math.min(1.5, bb / 55));
        const scaleY = Math.max(0.6,  Math.min(1.4, tb / 160));
        if (shirtScaleWrapperEl) {
            shirtScaleWrapperEl.style.transform = `scale(${scaleX}, ${scaleY})`;
        }
    }

    if (shirtSizeOverlayEl) {
        shirtSizeOverlayEl.innerText = result.sizeObj.size;
    }
}

// =====================================================
//  NAVIGATION
// =====================================================
function changePage(sectionId, element) {
    document.querySelectorAll('section').forEach(s => {
        s.style.display = 'none';
        s.classList.remove('active-page');
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active-page');
        target.style.display = sectionId === 'hero' ? 'flex' : 'block';
    }

    document.querySelectorAll('.nav-links a, .mobile-nav-link').forEach(link => link.classList.remove('active'));
    document.querySelectorAll('.nav-links a, .mobile-nav-link').forEach(link => {
        const oc = link.getAttribute('onclick') || '';
        if (oc.includes(`'${sectionId}'`)) link.classList.add('active');
    });
}

function scrollToSection(sectionId) {
    changePage(sectionId, null);
}

window.addEventListener('scroll', () => {
    const sections  = document.querySelectorAll('section');
    const navLinks  = document.querySelectorAll('.nav-links a');
    let current     = null;
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200 && window.scrollY < s.offsetTop + s.clientHeight - 200) {
            current = s.id;
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
});
