'use client';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { toast } from 'react-toastify';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarModal(props: any) {
  const { isOpen, handleOpenChange, setIsOpenCal, setIsLogin, setName } = props;

  const onSubmit = async (event: any) => {
    try {
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      classNames={{
        backdrop: 'bg-[#03121A]/50 backdrop-opacity-50',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <form>
            <ModalHeader className="flex flex-col gap-1 bg-white rounded-tl rounded-tr">
              Pick your date
            </ModalHeader>

            <ModalBody className="bg-white">
              <Calendar className="ms-6" selectRange={true} />
            </ModalBody>

            <ModalFooter className="bg-white rounded-bl rounded-br">
              <Button
                className="border-2 py-2 px-3 rounded-full font-medium hover:bg-travel-grey"
                color="danger"
                variant="light"
                onPress={() => {
                  onClose();
                  setIsOpenCal(false);
                }}
              >
                Close
              </Button>
              <Button
                className="py-2 px-3 rounded-full font-medium bg-travel-blue text-white hover:bg-travel-blue-ho"
                color="primary"
                onClick={onSubmit}
              >
                Confirm
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
