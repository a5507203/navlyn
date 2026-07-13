import { assetPath } from '../utils/base';

export type ProductKey = 'titan' | 'commander' | 'scout' | 'seal';
export type HomeProductKey = ProductKey | 'arc' | 'counterUas';

export type ProductSpecKey =
  | 'aircraftDimensions'
  | 'maximumTakeoffWeight'
  | 'maximumPayload'
  | 'cruiseSpeed'
  | 'maximumSpeed'
  | 'maximumFlightTime'
  | 'maximumRange'
  | 'windResistance'
  | 'maximumTakeoffAltitude'
  | 'standardRange'
  | 'quickAssembly'
  | 'vesselDimensions'
  | 'weight'
  | 'speed'
  | 'towingCapacity'
  | 'remoteControlDistance'
  | 'vesselWaterproofRating'
  | 'remoteWaterproofRating';

export interface ProductSpec {
  key: ProductSpecKey;
  value: string;
}

export interface ProductCatalogItem {
  key: ProductKey;
  image: string;
  imagePosition: string;
  specs: ProductSpec[];
}

export interface HomeProductSlide {
  key: HomeProductKey;
  image: string;
  imagePosition: string;
  to: string;
}

export const productManualPath = assetPath('/media/july-update/navlyn-product-manual-zh.pdf');

/**
 * Public specifications transcribed from the uploaded Chinese Navlyn product
 * manual. Values intentionally retain the units and precision printed there.
 */
export const airProducts: ProductCatalogItem[] = [
  {
    key: 'titan',
    image: assetPath('/media/july-update/titan.jpg'),
    imagePosition: 'center 68%',
    specs: [
      { key: 'aircraftDimensions', value: '415 (L) × 195 (W) × 75 (H) cm' },
      { key: 'maximumTakeoffWeight', value: '36 kg' },
      { key: 'maximumPayload', value: '9 kg' },
      { key: 'cruiseSpeed', value: '24–29 m/s (86–104 km/h)' },
      { key: 'maximumFlightTime', value: '150 min' },
      { key: 'maximumRange', value: '220 km' },
      { key: 'windResistance', value: '15 m/s (54 km/h)' },
      { key: 'maximumTakeoffAltitude', value: '4,000 m' },
    ],
  },
  {
    key: 'commander',
    image: assetPath('/media/scout-s1.png'),
    imagePosition: 'center 50%',
    specs: [
      { key: 'aircraftDimensions', value: '338 (L) × 150 (W) × 50 (H) cm' },
      { key: 'maximumTakeoffWeight', value: '18 kg' },
      { key: 'maximumPayload', value: '3 kg' },
      { key: 'cruiseSpeed', value: '20–23 m/s (72–82 km/h)' },
      { key: 'maximumFlightTime', value: '150 min' },
      { key: 'maximumRange', value: '220 km' },
      { key: 'windResistance', value: '14 m/s (50 km/h)' },
      { key: 'maximumTakeoffAltitude', value: '4,000 m' },
    ],
  },
  {
    key: 'scout',
    image: assetPath('/media/july-update/scout.png'),
    imagePosition: 'center 52%',
    specs: [
      { key: 'aircraftDimensions', value: '175 (L) × 120 (W) × 25 (H) cm' },
      { key: 'maximumTakeoffWeight', value: '4.3 kg' },
      { key: 'maximumPayload', value: '1 kg' },
      { key: 'standardRange', value: '20 km, dual-frequency' },
      { key: 'cruiseSpeed', value: '15–18 m/s (54–65 km/h)' },
      { key: 'maximumSpeed', value: '25 m/s (90 km/h)' },
      { key: 'maximumFlightTime', value: '2 h (120 min)' },
      { key: 'windResistance', value: 'Level 5' },
      { key: 'maximumTakeoffAltitude', value: '4,500 m' },
      { key: 'quickAssembly', value: '< 3 min' },
    ],
  },
];

export const seaProducts: ProductCatalogItem[] = [
  {
    key: 'seal',
    image: assetPath('/media/july-update/seal.jpg'),
    imagePosition: 'center 48%',
    specs: [
      { key: 'vesselDimensions', value: '1,000 (L) × 700 (W) × 248 (H) mm' },
      { key: 'weight', value: '15.9 kg' },
      { key: 'speed', value: '7 m/s' },
      { key: 'towingCapacity', value: '1,000 kg' },
      { key: 'remoteControlDistance', value: '1,403 m' },
      { key: 'vesselWaterproofRating', value: 'IP67' },
      { key: 'remoteWaterproofRating', value: 'IP67' },
    ],
  },
];

export const homeProductSlides: HomeProductSlide[] = [
  {
    key: 'titan',
    image: assetPath('/media/july-update/titan.jpg'),
    imagePosition: 'center 68%',
    to: '/air',
  },
  {
    key: 'commander',
    image: assetPath('/media/scout-s1.png'),
    imagePosition: 'center 50%',
    to: '/air',
  },
  {
    key: 'scout',
    image: assetPath('/media/navlyn-x1.png'),
    imagePosition: 'center 52%',
    to: '/air',
  },
  {
    key: 'seal',
    image: assetPath('/media/july-update/seal.jpg'),
    imagePosition: 'center 48%',
    to: '/sea',
  },
  {
    key: 'arc',
    image: assetPath('/media/july-update/arc.jpg'),
    imagePosition: 'center 50%',
    to: '/arc-os',
  },
  {
    key: 'counterUas',
    image: '',
    imagePosition: 'center 50%',
    to: '',
  },
];
