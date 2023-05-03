import cuid from "cuid";
export type Flight = {
  id: string;
  airline: string;
  take_off: string ;
  land: string;
  seats: number;
  origin: string;
  dest: string;
  price: number;
};
export const domestic: Flight[] = [
  {
    id: cuid(),
    airline: "قشم ایر",
    take_off: "8:00",
    land: "9:30",
    seats: 10,
    origin: "تهران",
    dest: "مشهد",
    price: 9000000,
  },
  {
    id: cuid(),

    airline: "ایران ایر",
    take_off: "10:00",
    land: "11:30",
    seats: 8,
    origin: "تهران",
    dest: "شیراز",
    price: 9500000,
  },
  {
    id: cuid(),

    airline: "ماهان",
    take_off: "14:00",
    land: "15:30",
    seats: 8,
    origin: "تهران",
    dest: "اصفهان",
    price: 5500000,
  },
  {
    id: cuid(),

    airline: "ایران ایر",
    take_off: "10:00",
    land: "12:30",
    seats: 3,
    origin: "تهران",
    dest: "کیش",
    price: 10000000,
  },
  {
    id: cuid(),

    airline: "قشم ایر",
    take_off: "11:00",
    land: "13:30",
    seats: 2,
    origin: "تهران",
    dest: "بوشهر",
    price: 9000000,
  },
  {
    id: cuid(),

    airline: "ساها",
    take_off: "10:00",
    land: "12:30",
    seats: 6,
    origin: "مشهد",
    dest: "کیش",
    price: 10000000,
  },
  {
    id: cuid(),

    airline: "ساها",
    take_off: "10:00",
    land: "12:30",
    seats: 6,
    origin: "مشهد",
    dest: "کیش",
    price: 10000000,
  },
  {
    id: cuid(),

    airline: "ماهان",
    take_off: "11:00",
    land: "13:30",
    seats: 16,
    origin: "مشهد",
    dest: "تهران",
    price: 6500000,
  },
  {
    id: cuid(),

    airline: "ساها",
    take_off: "11:00",
    land: "12:30",
    seats: 7,
    origin: "شیراز",
    dest: "تهران",
    price: 7300000,
  },
  {
    id: cuid(),

    airline: "قشم ایر",
    take_off: "16:00",
    land: "17:30",
    seats: 12,
    origin: "شیراز",
    dest: "قشم",
    price: 5200000,
  },
  {
    id: cuid(),

    airline: "ماهان",
    take_off: "17:00",
    land: "18:30",
    seats: 12,
    origin: "اصفهان",
    dest: "شیراز",
    price: 7200000,
  },
  {
    id: cuid(),

    airline: "ایران ایر",
    take_off: "13:00",
    land: "14:30",
    seats: 2,
    origin: "شیراز",
    dest: "کیش",
    price: 6400000,
  },
  {
    id: cuid(),

    airline: "کیش ایر",
    take_off: "13:00",
    land: "14:30",
    seats: 10,
    origin: "شیراز",
    dest: "مشهد",
    price: 5400000,
  },
  {
    id: cuid(),

    airline: "ایران ایر",
    take_off: "13:00",
    land: "14:30",
    seats: 2,
    origin: "شیراز",
    dest: "اصفهان",
    price: 6400000,
  },
  {
    id: cuid(),

    airline: "آسمان",
    take_off: "13:00",
    land: "14:30",
    seats: 5,
    origin: "تهران",
    dest: "ساری",
    price: 6900000,
  },
];
export const international: Flight[] = [
  {
    id: cuid(),

    airline: "Qatar Airways",
    take_off: "8:00",
    land: "11:30",
    seats: 23,
    origin: "تهران",
    dest: "دبی",
    price: 6000000,
  },
  {
    id: cuid(),

    airline: "Qatar Airways",
    take_off: "14:00",
    land: "16:30",
    seats: 3,
    origin: "تهران",
    dest: "دبی",
    price: 35000000,
  },
  {
    id: cuid(),

    airline: "ماهان",
    take_off: "14:00",
    land: "15:30",
    seats: 8,
    origin: "تهران",
    dest: "آنکارا",
    price: 34000000,
  },
  {
    id: cuid(),

    airline: "ایران ایر",
    take_off: "10:00",
    land: "12:30",
    seats: 3,
    origin: "تهران",
    dest: "استانبول",
    price: 30000000,
  },
  {
    id: cuid(),

    airline: "flydubai",
    take_off: "13:00",
    land: "15:30",
    seats: 12,
    origin: "تهران",
    dest: "ابوظبی",
    price: 30000000,
  },
  {
    id: cuid(),

    airline: "Qatar Airways",
    take_off: "14:00",
    land: "16:30",
    seats: 6,
    origin: "تهران",
    dest: "دوحه",
    price: 40000000,
  },
  {
    id: cuid(),

    airline: "قشم ایر",
    take_off: "16:00",
    land: "18:30",
    seats: 6,
    origin: "تهران",
    dest: "ازمیر",
    price: 40000000,
  },
  {
    id: cuid(),

    airline: "ماهان",
    take_off: "11:00",
    land: "13:30",
    seats: 16,
    origin: "تهران",
    dest: "دبی",
    price: 40000000,
  },
  {
    id: cuid(),

    airline: "flydubai",
    take_off: "11:00",
    land: "12:30",
    seats: 7,
    origin: "تهران",
    dest: "ابوظبی",
    price: 45000000,
  },
  {
    id: cuid(),

    airline: "Qatar Airways",
    take_off: "14:00",
    land: "16:30",
    seats: 12,
    origin: "شیراز",
    dest: "قشم",
    price: 52000000,
  },
  {
    id: cuid(),

    airline: "ماهان",
    take_off: "17:00",
    land: "18:30",
    seats: 12,
    origin: "تهران",
    dest: "دوحه",
    price: 42000000,
  },
  {
    id: cuid(),

    airline: "ایران ایر",
    take_off: "13:00",
    land: "14:30",
    seats: 2,
    origin: "تهران",
    dest: "دوحه",
    price: 42000000,
  },
  {
    id: cuid(),

    airline: "Qatar Airways",
    take_off: "13:00",
    land: "22:30",
    seats: 10,
    origin: "تهران",
    dest: "لندن",
    price: 540000000,
  },
  {
    id: cuid(),

    airline: "ایران ایر",
    take_off: "15:00",
    land: "17:30",
    seats: 2,
    origin: "تهران",
    dest: "دوحه",
    price: 64000000,
  },
  {
    id: cuid(),

    airline: "flydubai",
    take_off: "18:00",
    land: "20:30",
    seats: 5,
    origin: "تهران",
    dest: "دبی",
    price: 69000000,
  },
];
