import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

const sample = [
  {
    _id: "63401492556e722aa55ccde7",
    ross_id: 391237,
    link: "https://www.rossmann.pl/Produkt/Szampony-suche/Miya-Cosmetics-superHAIRday-suchy-szampon-puder-do-stylizacji-wlosow-2w1-10-g,391237,8658",
    name: "MIYA COSMETICS superHAIRday suchy szampon puder do stylizacji włosów, 2w1",
    brand: "MIYA COSMETICS",
    category: "Włosy-Pielęgnacja-Szampony suche",
    picture:
      "//www.ros.net.pl/GalleryImages/product_photos/1280_720/343063_391237_1280_720.png",
    inci: "Oryza Sativa Starch*, Magnesium Carbonate*, Diatomaceous Earth*, Silica Silylate, Betaine*, Inulin*, Centella Asiatica Extract*, Moringa Oleifera Leaf Extract*, Glycerin*, Parfum, Aqua*, Sodium Benzoate, Potassium Sorbate, Benzyl Salicylate, Citronellol, Coumarin, Hexyl Cinnamal, Limonene, Linalool, Alpha-Isomethyl Ionone, CI 77492*, CI 77491*, CI 77499*.* składnik pochodzenia naturalnego",
    createdAt: "2022-10-07T11:59:14.244+0000",
    updatedAt: "2022-10-07T11:59:14.244+0000",
    __v: 0,
  },
  {
    _id: "63401494556e722aa55ccde9",
    ross_id: 340541,
    link: "https://www.rossmann.pl/Produkt/Szampony-suche/TRESemme-Day2-suchy-szampon-do-wlosow-nadajacy-objetosc-250ml,340541,8658",
    name: "TRESEMMÉ Day2 suchy szampon do włosów nadający objętość",
    brand: "TRESEMMÉ",
    category: "Włosy-Pielęgnacja-Szampony suche",
    picture:
      "//www.ros.net.pl/GalleryImages/product_photos/1280_720/251094_340541_1280_720_81234.png",
    inci: "Butane, Isobutane, Propane, Alcohol Denat., Tapioca Starch, Aqua, Isopropyl Myristate, Parfum, Silica, Alpha-Isomethyl Ionone, Benzyl Alcohol, Citronellol, Geraniol, Hexyl Cinnamal, Hydroxycitronellal, Linalool.",
    createdAt: "2022-10-07T11:59:16.977+0000",
    updatedAt: "2022-10-07T11:59:16.977+0000",
    __v: 0,
  },
  {
    _id: "63401499556e722aa55ccdeb",
    ross_id: 390987,
    link: "https://www.rossmann.pl/Produkt/Szampony-suche/Batiste-suchy-szampon-overnight-do-wlosow-suchych-i-odwodnionych-200-ml,390987,8658",
    name: "BATISTE  suchy szampon overnight do włosów suchych i odwodnionych",
    brand: "BATISTE",
    category: "Włosy-Pielęgnacja-Szampony suche",
    picture:
      "//www.ros.net.pl/GalleryImages/product_photos/1280_720/342845_390987_1280_720.png",
    inci: "Butane, Isobutane, Propane, Alkohol Denat., Oryza Sativa (Rice)Starch, Parfum (Fragrance), C-13-15 Alkane, Cocoyl Hydrolyzed Keratin, Sodium Bicarabonate, Charcoal Powder, Cetrimonium Chloride, Distearyldimonium Chloride,  Citronellol, Hexyl Cinnamal, Linalool, Benzyl Slicylate, Limonene.",
    createdAt: "2022-10-07T11:59:21.170+0000",
    updatedAt: "2022-10-07T11:59:21.170+0000",
    __v: 0,
  },
  {
    _id: "6340149d556e722aa55ccded",
    ross_id: 379233,
    link: "https://www.rossmann.pl/Produkt/Szampony-suche/LOreal-Paris-Elseve-Dream-Long-szampon-do-wlosow-zwiekszajacy-objetosc-200-ml,379233,8658",
    name: "L'ORÉAL PARIS ELSEVE Dream Long szampon do włosów, zwiększający objętość",
    brand: "L'ORÉAL PARIS ELSEVE",
    category: "Włosy-Pielęgnacja-Szampony suche",
    picture:
      "//www.ros.net.pl/GalleryImages/product_photos/1280_720/332061_379233_1280_720.png",
    inci: "Butane, Alcohol Denat., Oryza Sativa Starch / Rice Starch, Isopropyl Myristate, Niacinamide, Ricinus Communis Seed Oil / Castor Seed Oil, Hydroxycitronellal, Stearalkonium Hectorite, Calcium Carbonate, Limonene, Benzyl Salicylate, Linalool, Benzyl Alcohol, Propylene Carbonate, Alpha-Isomethyl Ionone, Geraniol, Cetrimonium Chloride, Citronellol, Coumarin, Hexyl Cinnamal, Parfum / Fragrance.",
    createdAt: "2022-10-07T11:59:25.016+0000",
    updatedAt: "2022-10-07T11:59:25.016+0000",
    __v: 0,
  },
  {
    _id: "634014a3556e722aa55ccdef",
    ross_id: 390988,
    link: "https://www.rossmann.pl/Produkt/Szampony-suche/Batiste-suchy-szampon-overnight-do-wlosow-przetluszczajacych-sie-200-ml,390988,8658",
    name: "BATISTE  suchy szampon overnight do włosów przetłuszczających się",
    brand: "BATISTE",
    category: "Włosy-Pielęgnacja-Szampony suche",
    picture:
      "//www.ros.net.pl/GalleryImages/product_photos/1280_720/342847_390988_1280_720.png",
    inci: "Butane, Isobutane, Propane, Alkohol Denat., Oryza Sativa (Rice)Starch, Sodium Bicarbonate, Charcoal Powder, Parfum (Fragrance), Cetrimonium Chloride, Distearyldimonium Chloride, C13-15 Alkane, Cocoyl Hydrolysed Keratin, Citronellol, Hexyl Cinnamal, Linallol, Benzyl Salicylate, Limonone.",
    createdAt: "2022-10-07T11:59:31.212+0000",
    updatedAt: "2022-10-07T11:59:31.212+0000",
    __v: 0,
  },
  {
    _id: "634014a9556e722aa55ccdf1",
    ross_id: 256378,
    link: "https://www.rossmann.pl/Produkt/Szampony-suche/Schwarzkopf-Got2b-Extra-Volume-Ocean-Vibes-suchy-szampon-do-wlosow-200ml,256378,8658",
    name: "SCHWARZKOPF GOT2B Extra Volume Ocean Vibes suchy szampon do włosów",
    brand: "SCHWARZKOPF GOT2B",
    category: "Włosy-Pielęgnacja-Szampony suche",
    picture:
      "//www.ros.net.pl/GalleryImages/product_photos/1280_720/259054_256378_1280_720_85216.png",
    inci: "Butane*Propane*Alcohol denat.*Oryza Sativa (Rice) Starch*Isobutane*Silica Dimethyl Silylate*Parfum (Fragrance)*Limonene*Aqua (Water, Eau)*Linalool*Cetrimonium Chloride*Benzyl Alcohol",
    createdAt: "2022-10-07T11:59:37.597+0000",
    updatedAt: "2022-10-07T11:59:37.597+0000",
    __v: 0,
  },
  {
    _id: "634014ac556e722aa55ccdf3",
    ross_id: 339840,
    link: "https://www.rossmann.pl/Produkt/Szampony-suche/Alterra-suchy-szampon-do-wlosow-20-g,339840,8658",
    name: "ALTERRA  suchy szampon do włosów",
    brand: "ALTERRA",
    category: "Włosy-Pielęgnacja-Szampony suche",
    picture:
      "//www.ros.net.pl/GalleryImages/product_photos/1280_720/355177_339840_1280_720.png",
    inci: "Zea Mays Starch, Talc, Aqua, Silica, Lauroyl Lysine, Glycerin, Illite, Parfum, Kaolin, Montmorillonite, Calcite, Limonene, Benzyl Salicylate, Geraniol, Linalool, Cymbopogon, Citratus Extract, Mentha Suaveolens Leaf Extract.",
    createdAt: "2022-10-07T11:59:40.530+0000",
    updatedAt: "2022-10-07T11:59:40.530+0000",
    __v: 0,
  },
];

export default function Content() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          lgxl: "repeat(4, 1fr)",
        },
        gridTemplateRows: "auto",
        justifyItems: "center",
        alignItems: "center",
        gap: "1rem 1rem",
        p: "1rem",
      }}
    >
      {sample.map((element, index) => (
        <ProductCard
          key={index}
          data={{
            link: element.link,
            name: element.name,
            brand: element.brand,
            category: element.category,
            picture: element.picture,
            inci: element.inci,
          }}
          sx={{}}
        />
      ))}
    </Box>
  );
}
