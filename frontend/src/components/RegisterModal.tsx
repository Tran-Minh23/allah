'use client';

import { LockIcon } from "@/icons/LockIcon";
import { MailIcon } from "@/icons/MailIcon";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function RegisterModal(props: any) {
    const { isOpen, handleOpenChange, setIsOpenRegister } = props;

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      mode: "onBlur",
      defaultValues: {
        name: "",
      },
    });

    const [nameValue, setNameValue] = useState("");
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const onSubmit = (event: any) => {
      console.log(errors);
      
      setIsSubmit(true);

      console.log(event);
      console.log(usernameValue);
      console.log(passwordValue);
    }

    const checkName = useMemo(() => {
      return nameValue;
    }, [nameValue]);
    // const checkName = (): boolean => isSubmit && !nameValue;

    return(
        <Modal backdrop="opaque" isOpen={isOpen} onOpenChange={handleOpenChange} classNames={{
            backdrop: "bg-[#03121A]/50 backdrop-opacity-50"
        }}>
        <ModalContent>
          {(onClose) => (
            <form>
              <ModalHeader className="flex flex-col gap-1 bg-white rounded-tl rounded-tr">Log in</ModalHeader>
              <ModalBody className="bg-white">
                <Input
                  autoComplete="on"
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  variant="bordered"
                  label="Name"
                  placeholder="Enter your name"
                  // classNames={{ label: "mb-6", input: ["placeholder:mt-2"], inputWrapper: "border-2 rounded" }}
                  // className="max-w-xs"
                  color={"danger"}
                  isInvalid={errors?.hasOwnProperty('name')}
                  errorMessage={errors['name'] && "Email is required"}
                  defaultValue="cc"
                  {...register("name", { required: 'required'})}
                />

                <Input
                  autoComplete="on"
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Username"
                  placeholder="Enter your username"
                  variant="bordered"
                  classNames={{ label: "mb-6", input: ["placeholder:mt-2"], inputWrapper: "border-2 rounded" }}
                  value={nameValue}
                  onValueChange={setNameValue}
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
                  value={passwordValue}
                  onValueChange={setPasswordValue}
                />
              </ModalBody>
              <ModalFooter className="bg-white rounded-bl rounded-br">
                <Button 
                    className="border-2 py-2 px-3 rounded-full font-medium hover:bg-travel-grey" 
                    color="danger" variant="light" 
                    onPress={() => {onClose(); setIsOpenRegister(false);}}>
                        Close
                </Button>
                <Button 
                    className="py-2 px-3 rounded-full font-medium bg-travel-blue text-white hover:bg-travel-blue-ho" 
                    color="primary"
                    type="submit" 
                    // onPress={() => {onClose(); setIsOpenRegister(false);}}>
                    onClick={handleSubmit(onSubmit)}>
                        Register
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    )
  }