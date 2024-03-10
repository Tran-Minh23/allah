'use client';

import { Hotel } from '@/entities/hotelEntity';
import hotelService from '@/services/hotel';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { checkCookie } from '../actions';

export default function Dashboard() {
  const router = useRouter();
  const [listHotel, setListHotel] = useState([]);

  const getImageBg = (data: string) => {
    const array = JSON.parse(data);

    return array[0];
  };

  const clickCardHandler = async (hotel: Hotel) => {
    const isLogin = await checkCookie('token');

    if (!isLogin) {
      toast.error('You must login first');
      return;
    }

    router.push(`/hotel/${hotel.hotel_id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await hotelService.getAll();

        setListHotel(response.data);
      } catch (error: any) {
        console.log(error);
        if (error.response) {
          toast.error(error.response.data.message);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container px-4 py-1 mt-[100px]">
      <div className="grid grid-cols-3 gap-4 gap-y-8">
        {listHotel.length > 0 &&
          listHotel.map((hotel: Hotel) => (
            <button
              key={hotel.hotel_id}
              onClick={() => {
                clickCardHandler(hotel);
              }}
            >
              {/* <Link href={`/hotel/${hotel.hotel_id}`}> */}
              <Card className="max-w-[400px] cursor-pointer">
                <CardHeader className="p-0">
                  <div className="absolute top-0 px-3 bg-travel-blue rounded-br-md text-white font-medium">
                    Alobook
                  </div>

                  <Image
                    alt="hotel"
                    src={getImageBg(hotel.bg_image)}
                    height={250}
                    width={400}
                    className="h-[250px] w-[400px]"
                  />
                </CardHeader>

                <Divider />

                <CardBody>
                  <p className="font-medium">{hotel.name}</p>
                </CardBody>

                <Divider />
                <CardFooter>
                  <p className="font-medium text-[#F96D01]">666.666 VND</p>
                </CardFooter>
              </Card>
              {/* </Link> */}
            </button>
          ))}
      </div>
    </div>
  );
}
