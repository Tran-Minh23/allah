'use client';

import hotelService from '@/services/hotel';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import { useDisclosure } from '@nextui-org/react';
import CalendarModal from '@/components/CalendarModal';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  height: '500px',
};

export default function Page({ params }: Readonly<{ params: { id: number } }>) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [detail, setDetail] = useState<any>();
  const [isOpenCal, setIsOpenCal] = useState(false);

  const onShowCalendar = () => {
    setIsOpenCal(true);
    onOpen();
  };

  const handleOpenChange = (e: boolean) => {
    setIsOpenCal(e);
    onOpenChange();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await hotelService.getHotelDetail(params.id);

        response.data.images = JSON.parse(response.data.images);

        setDetail(response.data);
      } catch (error: any) {
        console.log(error);
        if (error.response) {
          toast.error(error.response.data.message);
        }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container px-4 py-1 mt-[50px]">
      <p className="text-4xl font-bold">{detail?.name}</p>
      <p className="text-xl font-semibold py-3">{detail?.address}</p>

      {detail?.images?.length > 0 && (
        <Slide>
          {detail.images.map((slideImage: string, index: number) => (
            <div key={index}>
              <div
                style={{ ...divStyle, backgroundImage: `url(${slideImage})` }}
              ></div>
            </div>
          ))}
        </Slide>
      )}

      {detail?.rooms?.length > 0 &&
        detail.rooms.map((room: any) => (
          <div key={room.room_id} className="p-3 shadow-lg rounded-md mt-3">
            <p className="font-bold text-2xl ">{room.room_type}</p>

            <div className="grid grid-cols-12 mt-5 p-2">
              <div className="col-span-4">
                <Image
                  alt=""
                  width={296}
                  height={222}
                  src="https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10015739-b3783d1577ba396ff83246d65d5037df.jpeg"
                  className="rounded-md"
                ></Image>
              </div>

              <div className="col-span-4"></div>

              <div className="col-span-4 flex justify-center items-center">
                <button
                  onClick={onShowCalendar}
                  className="px-7 py-3 rounded-md bg-[#FF5E1F] text-white font-bold"
                >
                  Chon
                </button>

                <CalendarModal
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  setIsOpenCal={setIsOpenCal}
                  handleOpenChange={handleOpenChange}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
