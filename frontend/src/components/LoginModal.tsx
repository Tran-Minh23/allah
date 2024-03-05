import { LockIcon } from "@/icons/LockIcon";
import { MailIcon } from "@/icons/MailIcon";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";

export default function LoginModal(props: any) {
    const { isOpen, handleOpenChange, setIsOpenLogin } = props;

    return(
        <Modal backdrop="opaque" isOpen={isOpen} onOpenChange={handleOpenChange} classNames={{
            backdrop: "bg-[#03121A]/50 backdrop-opacity-50"
          }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 bg-white rounded-tl rounded-tr">Log in</ModalHeader>
              <ModalBody className="bg-white">
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Username"
                  placeholder="Enter your username"
                  variant="bordered"
                  classNames={{ label: "mb-6", input: ["placeholder:mt-2"], inputWrapper: "border-2 rounded" }}
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  classNames={{ label: "mb-6", input: ["placeholder:mt-2"], inputWrapper: "border-2 rounded" }}
                />
              </ModalBody>
              <ModalFooter className="bg-white rounded-bl rounded-br">
                <Button 
                    className="border-2 py-2 px-3 rounded-full font-medium hover:bg-travel-grey" 
                    color="danger" variant="light" 
                    onPress={() => {onClose(); setIsOpenLogin(false);}}>
                        Close
                </Button>
                <Button 
                    className="py-2 px-3 rounded-full font-medium bg-travel-blue text-white hover:bg-travel-blue-ho" 
                    color="primary" 
                    onPress={() => {onClose(); setIsOpenLogin(false);}}>
                        Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    )
  }