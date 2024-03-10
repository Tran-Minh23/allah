'use client';

import Image from 'next/image';
import LoginModal from './LoginModal';
import { useDisclosure } from '@nextui-org/react';
import RegisterModal from './RegisterModal';
import { useEffect, useState } from 'react';
import { checkCookie, getCookie } from '@/app/actions';
import { parseJwt } from '@/services/helper';

export default function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState(false);

  const onClickLogin = (e: any) => {
    setIsOpenLogin(true);
    onOpen();
  };

  const onClickRegister = (e: any) => {
    setIsOpenRegister(true);
    onOpen();
  };

  const handleOpenChange = (e: boolean) => {
    setIsOpenLogin(e);
    setIsOpenRegister(e);
    onOpenChange();
  };

  useEffect(() => {
    const fetchData = async () => {
      const cookie = await getCookie('token');

      if (cookie) {
        setIsLogin(true);

        const parsedToken = parseJwt(cookie);

        setName(parsedToken.username);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sticky top-0 z-[999] shadow-md bg-white">
      <div className="container px-4 py-1">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <a>
              <Image
                alt=""
                width={185}
                height={53}
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg"
              ></Image>
            </a>
          </div>

          <div className="col-span-9 flex justify-end mt-1 items-center">
            {isLogin && <p>{name}</p>}

            {!isLogin && (
              <div>
                <button
                  onClick={onClickLogin}
                  className="border-2 py-2 px-4 rounded-md border-travel-blue font-medium hover:bg-travel-grey"
                >
                  Log In
                </button>

                {isOpenLogin && (
                  <LoginModal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    setIsOpenLogin={setIsOpenLogin}
                    setIsLogin={setIsLogin}
                    setName={setName}
                    handleOpenChange={handleOpenChange}
                  />
                )}
              </div>
            )}

            {!isLogin && (
              <div className="pl-2">
                <button
                  onClick={onClickRegister}
                  className="border-2 py-2 px-3 rounded-md font-medium bg-travel-blue text-white hover:bg-travel-blue-ho"
                >
                  Register
                </button>

                {isOpenRegister && (
                  <RegisterModal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    setIsOpenRegister={setIsOpenRegister}
                    handleOpenChange={handleOpenChange}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
