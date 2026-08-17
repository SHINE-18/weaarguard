export const navItems = [
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Materials', href: '/materials' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'About', href: '/about' },
]

export interface CategoryDetail {
  slug: string
  number: string
  title: string
  tag: string
  copy: string
  image: string
  heroBanner: string
  operatingEnv: string
  recommendedAlloys: string[]
  specs: { label: string; value: string }[]
  gallery: { title: string; image: string; tag: string; spec: string }[]
}

export const categories: CategoryDetail[] = [
  {
    slug: 'dryer-components',
    number: '01',
    title: 'Dryer components',
    tag: 'Heat / abrasion',
    copy: 'Trunnion wheels, girth gears, internal flights, dam plates, RAP inlets, and discharge assemblies built for continuous thermal expansion and aggregate wear.',
    image: '/images/dryer-combo.webp',
    heroBanner: '/images/asphalt-plant-hero.png',
    operatingEnv: 'Elevated temperature (up to 400°C), heavy rotational load, sliding aggregate impact, and RAP thermal shock.',
    recommendedAlloys: ['WearGuard P450', 'EnduraCast Z-Core', 'Forged Alloy Steel 50 HRC'],
    specs: [
      { label: 'Thermal Expansion Limit', value: '450°C Continuous' },
      { label: 'Hardness Profile', value: '450–550 BHN' },
      { label: 'Manufacturing Path', value: 'Precision Casting / Forging' },
      { label: 'Delivery Lead Time', value: '6–8 Weeks Worldwide' },
    ],
    gallery: [
      { title: 'Trunnion Wheels & Girth Gears', image: '/images/trunnion-wheels.webp', tag: 'DRYER HUB', spec: 'Forged Heavy Alloy Steel' },
      { title: 'Internal Drum Discharge Flights', image: '/images/drum-internal-discharge-flights.webp', tag: 'FLIGHT ARMOR', spec: 'High-Chrome Wear Plate' },
      { title: 'Heavy-Duty Dryer Sprockets', image: '/images/dryer-sprockets.webp', tag: 'DRIVE TRAIN', spec: 'Hardfaced Tooth Profile' },
      { title: 'Complete Asphalt Dryer Ecosystem', image: '/images/asphalt-plant-hero.png', tag: 'PLANT OVERVIEW', spec: 'Full System Upgrade' },
    ],
  },
  {
    slug: 'filter-components',
    number: '02',
    title: 'Filter components',
    tag: 'Heat / corrosion',
    copy: 'Nomex and meta-aramid bags, cages, snap rings, housings, impellers, and plenum plates engineered for hot dust gas streams.',
    image: '/images/filter-combo.webp',
    heroBanner: '/images/filter-combo.webp',
    operatingEnv: 'High velocity fine particle erosion, chemical acid gas condensation, and pulse-jet mechanical vibration.',
    recommendedAlloys: ['Meta-Aramid Nomex', 'Stainless Steel 316L', 'WearGuard P400'],
    specs: [
      { label: 'Thermal Resistance', value: '260°C Peak' },
      { label: 'Filtration Efficiency', value: '99.9% Sub-Micron' },
      { label: 'Cage Wire Spec', value: 'Galvanized / Stainless 316' },
      { label: 'Delivery Lead Time', value: '4–6 Weeks' },
    ],
    gallery: [
      { title: 'Nomex & Meta-Aramid Bags', image: '/images/filter-bags.webp', tag: 'BAGHOUSE', spec: 'Heat-Sealed Triple Seam' },
      { title: 'Precision Filter Cages & Snap Rings', image: '/images/filter-cages.webp', tag: 'SUPPORT CAGE', spec: '12-Wire Rigid Cage' },
      { title: 'Exhaust Fan Impellers & Housings', image: '/images/exhaust-fan.webp', tag: 'AIRFLOW', spec: 'Dynamic Balanced Rotor' },
    ],
  },
  {
    slug: 'mixer-components',
    number: '03',
    title: 'Mixer components',
    tag: 'Impact / abrasion',
    copy: 'Ni-Hard and high-chrome liners, paddles, tips, smart arm protection, shafts, and covers built for abrasive slurry and coarse aggregate mixing.',
    image: '/images/mixer-omponents.webp',
    heroBanner: '/images/outlast-the-mix-image-.webp',
    operatingEnv: 'Relentless rock impact, high-speed aggregate friction, slurry wash-out, and intense shearing stresses.',
    recommendedAlloys: ['WearGuard P500', 'EnduraCast Ultra (65 HRC)', 'Ni-Hard IV Casting'],
    specs: [
      { label: 'Hardness Level', value: '600–650 BHN / 65 HRC' },
      { label: 'Impact Resistance', value: 'Severe Shock Rating' },
      { label: 'Fitment Standard', value: 'OEM Direct Bolt-In' },
      { label: 'Service Life Boost', value: '+45% Over OEM Steel' },
    ],
    gallery: [
      { title: 'High-Chrome Paddle Arms', image: '/images/mixer-paddle-arms.webp', tag: 'PADDLE ARM', spec: 'Reversible Wear Edge' },
      { title: 'Heavy Duty Shaft & Arm Assembly', image: '/images/mixer-shaft-&-arms.webp', tag: 'ROTOR SHAFT', spec: 'Integrated Armor Sleeve' },
      { title: 'WearGuard P500 Mixer Tips', image: '/images/mixer-tips.webp', tag: 'MIXING TIP', spec: 'High Impact Carbide' },
      { title: 'Smart Shaft Armor Guards', image: '/images/arm-protection.webp', tag: 'SHAFT SHIELD', spec: 'Split Bolt-On Shell' },
    ],
  },
  {
    slug: 'bucket-elevators-drag-conveyors',
    number: '04',
    title: 'Bucket elevators & drag conveyors',
    tag: 'Continuous flow',
    copy: 'Buckets, reinforced lips, wear strips, chain and sprocket components, skirts, and impact elements designed for non-stop vertical elevation.',
    image: '/images/elevator-combo.webp',
    heroBanner: '/images/elevator-plant.webp',
    operatingEnv: 'Continuous tensile stress, bucket lip gouging, sprocket tooth friction, and abrasive dust accumulation.',
    recommendedAlloys: ['WearGuard P450', 'Induction Hardened Steel', 'EnduraCast Z-Core'],
    specs: [
      { label: 'Lip Hardness', value: '450 BHN Reinforced' },
      { label: 'Chain Tensile Rating', value: 'Up to 120,000 lbs' },
      { label: 'Sprocket Tooth', value: 'Flame-Hardened 58 HRC' },
      { label: 'Bucket Capacity', value: 'Custom Deep / Shallow' },
    ],
    gallery: [
      { title: 'Reinforced Elevator Buckets', image: '/images/elevator-buckets.webp', tag: 'BUCKET LIFT', spec: 'Hardened Digging Lip' },
      { title: 'Hardfaced Drive Sprockets', image: '/images/drive-sprockets.webp', tag: 'SPROCKET', spec: 'Segmented Tooth Design' },
      { title: 'Vertical Elevation Plant Setup', image: '/images/elevator-plant.webp', tag: 'SYSTEM VIEW', spec: 'Heavy Material Transport' },
    ],
  },
  {
    slug: 'transfer-point-components',
    number: '05',
    title: 'Transfer, chute & hopper liners',
    tag: 'Impact / erosion',
    copy: 'Mixer liners, hopper liners, bin liners, skirt liners, impact plates, rock-box components, and wear blocks.',
    image: '/images/liners-in-control-the-flow.webp',
    heroBanner: '/images/liner-control-the-low.webp',
    operatingEnv: 'High-drop rock impact, sliding ore gouging, fine aggregate erosion, and material flow dead-zone packing.',
    recommendedAlloys: ['EnduraCast Z-Core (62 HRC)', 'Chromium Carbide Overlay', 'Alumina Ceramic Composite'],
    specs: [
      { label: 'Overlay Hardness', value: '62–64 HRC' },
      { label: 'Plate Thickness', value: '6+4 mm to 12+12 mm' },
      { label: 'Attachment Method', value: 'Weld-On / Stud Bolt / Countersunk' },
      { label: 'Abrasion Resistance', value: '10x Carbon Steel' },
    ],
    gallery: [
      { title: 'Chromium Carbide Hardfaced Plate', image: '/images/hardfaced-plate.webp', tag: 'OVERLAY PLATE', spec: 'Dual-Pass Chromium Carbide' },
      { title: '3D Precision Bolt-In Liners', image: '/images/wear-liners-3d.png', tag: '3D SCANNED', spec: 'Custom Beveled Edge' },
      { title: 'Alumina Ceramic Rubber Liners', image: '/images/ceramic-liners.webp', tag: 'CERAMIC MATRIX', spec: '92% Alumina Tiles' },
      { title: 'Chute Flow Control Armor', image: '/images/liner-control-the-low.webp', tag: 'FLOW CONTROL', spec: 'Tapered Impact Zone' },
      { title: 'Rubber-Ceramic Composite Plates', image: '/images/rubber-ceramic.webp', tag: 'COMPOSITE', spec: 'Impact Absorbing Vulcanized' },
    ],
  },
  {
    slug: 'earthmoving-bucket-tips',
    number: '06',
    title: 'Earthmoving bucket tips',
    tag: 'Shock / ground wear',
    copy: 'Application-matched tips that improve penetration, fitment, adapter protection, and field life in severe rock quarrying.',
    image: '/images/earth-moving-bucket-tips-1.webp',
    heroBanner: '/images/product-lines-custom-wear.webp',
    operatingEnv: 'Extreme penetration resistance, heavy hydraulic breakout force, rock quarrying abrasion, and tip fracture shock.',
    recommendedAlloys: ['Wearcast Ultra 800', 'High-Spec Martensitic Alloy', 'WearGuard P500'],
    specs: [
      { label: 'Tip Hardness', value: '500–550 BHN Core / 60 HRC Tip' },
      { label: 'Fitment Systems', value: 'CAT J-Series, ESCO, Komatsu' },
      { label: 'Penetration Rating', value: 'Self-Sharpening Geometry' },
      { label: 'Breakage Guarantee', value: '100% Replacement Warranty' },
    ],
    gallery: [
      { title: 'High-Penetration Tooth Profile', image: '/images/custom-earth-moving-bucket-tips3.webp', tag: 'BUCKET TOOTH', spec: 'Self-Sharpening Rib' },
      { title: 'Heavy-Duty Excavator Teeth', image: '/images/earth-moving-bucket-tips-2.webp', tag: 'ADAPTER SYSTEM', spec: 'Heavy Rock Chisel' },
      { title: 'Lip & Heel Shrouds', image: '/images/earth-moving-bucket-tips-4.webp', tag: 'LIP PROTECTION', spec: 'Pin-On Heel Armor' },
      { title: 'Custom Ground-Engaging Tools', image: '/images/product-lines-custom-wear.webp', tag: 'GET PACKAGE', spec: 'Full Lip Shielding' },
    ],
  },
]

export const alloys = [
  { name: 'WearGuard P400', hardness: '400 BHN', use: 'Normal wear applications in asphalt, cement, mining, and steel. Liners, chutes, and buckets.', image: '/images/material-technology.webp' },
  { name: 'WearGuard P450', hardness: '450 BHN', use: 'High wear applications and heavy-duty components such as mixer liners.', image: '/images/hardfaced-plate.webp' },
  { name: 'WearGuard P500', hardness: '500 BHN', use: 'Superior high wear applications, mixer tips, wear edges, and severe service zones.', image: '/images/stainless-steel-protection.webp' },
  { name: 'EnduraCast Z-Core Liners', hardness: '58–62 HRC', use: 'Extreme abrasive and erosive wear. Available in 6 to 24 mm.', image: '/images/rubber-ceramic.webp' },
  { name: 'EnduraCast Ultra Liners', hardness: '60–65 HRC', use: 'Recycling applications with extreme abrasive and high erosive wear.', image: '/images/ceramic-liners.webp' },
  { name: 'EnduraCast Z-Core Max Liners', hardness: '60–65 HRC', use: 'Maximum impact and erosion resistance for severe high-tonnage mining chutes.', image: '/images/wear-liners-3d.png' },
  { name: 'Wearcast 600', hardness: '600 BHN', use: 'High-chrome alloy casting designed for heavy sliding abrasion.', image: '/images/mixer-tips.webp' },
  { name: 'Wearcast Ultra 800', hardness: '800 BHN', use: 'Extreme abrasive and erosive wear where maximum performance is required.', image: '/images/material-technologies-whole-set.webp' },
  { name: 'Wearcast Max 1100', hardness: '1100 BHN', use: 'Ultra-high hardness carbide insert technology for maximum component service life.', image: '/images/arm-protection.webp' },
]

export const galleryShowcase = [
  {
    id: 1,
    title: 'Precision Wear Liners 3D',
    category: 'Liners',
    slug: 'transfer-point-components',
    alloy: 'EnduraCast Z-Core 62 HRC',
    image: '/images/wear-liners-3d.png',
    spec: '3D Laser Scanned Fitment',
  },
  {
    id: 2,
    title: 'High-Chrome Mixer Paddle Arms',
    category: 'Mixers',
    slug: 'mixer-components',
    alloy: 'WearGuard P500',
    image: '/images/mixer-shaft-&-arms.webp',
    spec: 'Reinforced Wear Ribs',
  },
  {
    id: 3,
    title: 'Ground-Engaging Teeth & Adapters',
    category: 'Earthmoving',
    slug: 'earthmoving-bucket-tips',
    alloy: 'Wearcast Ultra 800',
    image: '/images/custom-earth-moving-bucket-tips3.webp',
    spec: 'Penetration Profile',
  },
  {
    id: 4,
    title: 'Trunnion Wheels & Girth Gears',
    category: 'Dryer',
    slug: 'dryer-components',
    alloy: 'Forged Alloy Steel 50 HRC',
    image: '/images/trunnion-wheels.webp',
    spec: 'Thermal Expandable Hub',
  },
  {
    id: 5,
    title: 'Continuous Chain Drive Sprockets',
    category: 'Conveyors',
    slug: 'bucket-elevators-drag-conveyors',
    alloy: 'Hardfaced Induction Tooth',
    image: '/images/drive-sprockets.webp',
    spec: 'Anti-Slip Sprocket Teeth',
  },
  {
    id: 6,
    title: 'High-Capacity Elevator Buckets',
    category: 'Elevators',
    slug: 'bucket-elevators-drag-conveyors',
    alloy: 'WearGuard P450 Lip',
    image: '/images/elevator-buckets.webp',
    spec: 'Deep-Well Discharge',
  },
]

export const industries = [
  ['Asphalt', 'Wear protection for asphalt mixing, drying, conveying and material handling.', '/images/asphalt-plant-hero.png', 'asphalt'],
  ['Cement', 'Solutions for abrasive and high-impact cement applications.', '/images/rpm-10.png', 'cement'],
  ['Mining', 'High-wear components engineered for demanding mining environments.', '/images/rpm-12.png', 'mining'],
  ['Steel', 'Solutions for extreme wear, impact and high-temperature conditions.', '/images/rpm-8.png', 'steel'],
  ['Recycling', 'Specialized solutions for extreme abrasive and erosive wear.', '/images/outlast-the-mix-image-.webp', 'recycling'],
  ['Aggregate & Material Handling', 'Components for conveying, loading, transfer and processing systems.', '/images/earth-moving-bucket-tips-2.webp', 'material-handling'],
]

export const steps = [
  'SEND YOUR PART / DRAWING',
  'UNDERSTAND THE APPLICATION',
  'ANALYZE WEAR CONDITIONS',
  'SELECT MATERIAL',
  'ENGINEER THE COMPONENT',
  'MANUFACTURE',
  'QUALITY CHECK',
  'DELIVER',
  'PERFORMANCE SUPPORT',
]

export function getCategory(slug: string): CategoryDetail | undefined {
  return categories.find((category) => category.slug === slug)
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wearguard.example.com'
}
