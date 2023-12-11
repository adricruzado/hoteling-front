import { HotelStructure } from "../store/features/hotels/types";
import { mockWithNewHotel } from "./mockWithNewHotel";

export const mockWithHotelModified: HotelStructure[] = [
  mockWithNewHotel[0],
  mockWithNewHotel[1],
  {
    _id: "626492220f2c29b159453185",
    name: "Hesperia Hotel",
    country: "Spain",
    city: "Barcelona",
    rating: 9.8,
    price: 1200,
    isFavourite: false,
    picture: "https://i.ibb.co/9bnjWw0/hesperia-hotel-final.webp",
    description:
      "The Hesperia Hotel in Barcelona is an icon of luxury and sophistication. It offers luxurious rooms with stunning views, impeccable service, and an ideal location in the heart of Manhattan, close to the city's iconic landmarks.",
  },
];
