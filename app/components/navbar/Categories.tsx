'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool, TbTrees, TbHomeLink, TbHomeDollar } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiHummingbird, 
  GiWoodCabin, 
  GiForestCamp, 
  GiIsland,
  GiSloth
} from 'react-icons/gi';
import { FcLandscape } from "react-icons/fc";
import { IoDiamond } from 'react-icons/io5';
import { BsHouses, BsBuildings  } from "react-icons/bs";
import { MdOutlineVilla, MdOutlineRealEstateAgent } from 'react-icons/md';
import { HiOutlineHomeModern } from "react-icons/hi2";
import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Properties for Sale',
    icon: TbHomeDollar,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Long term rent',
    icon: MdOutlineRealEstateAgent,
    description: 'This property is in the desert!'
  },
  {
    label: 'Commercial',
    icon: BsBuildings,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Apartments',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Suburban',
    icon: BsHouses,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Rainforest',
    icon: FcLandscape,
    description: 'This property is has rainforest landscapes used to be windmill for reference!',
  },
  {
    label: 'Caribbean',
    icon: GiIsland,
    description: 'This property is on an island!'
  },
  {
    label: 'Volcano View',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Fishing',
    icon: GiBoatFishing,
    description: 'This property is near a lake!'
  },
  {
    label: 'Forest',
    icon: TbTrees,
    description: 'This property has Forest and hiking (skiing) activies!'
  },
  {
    label: 'Wildlife',
    icon: GiSloth,
    description: 'This property is near wildlife(castle) tours like corcovado!'
  },
  {
    label: 'Birding',
    icon: GiHummingbird,
    description: 'This property is near birding activities!'
  },
  {
    label: 'Cabins',
    icon: GiWoodCabin,
    description: 'This property is in cold(artic) environment!'
  },
  {
    label: 'Shared rooms',
    icon: TbHomeLink,
    description: 'This property is in a barn!'
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;