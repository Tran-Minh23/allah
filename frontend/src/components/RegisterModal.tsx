// 'use client';

import { LockIcon } from "@/icons/LockIcon";
import { MailIcon } from "@/icons/MailIcon";
import authService from "@/services/auth";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const defaultValue = {
  name: "",
  username: "",
  password: ""
}

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
        ...defaultValue
      },
    });

    const onSubmit = async (event: any) => {  
      try {
        const result = await authService.register(event);
        console.log(result);

        reset({ ...defaultValue });
        handleOpenChange(false);
        toast.success('Successful!');
      }
      catch (error: any) {
        console.log(error);
        if (error.response) {
          toast.error(error.response.data.message);
        }
      }
    }

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
                  isInvalid={errors?.hasOwnProperty('name')}
                  errorMessage={errors['name'] && "Email is required"}
                  {...register("name", { required: 'required'})}
                />

                <Input
                  autoComplete="on"
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  variant="bordered"
                  label="Username"
                  placeholder="Enter your username"
                  isInvalid={errors?.hasOwnProperty('username')}
                  errorMessage={errors['username'] && "Username is required"}
                  {...register("username", { required: 'required'})}
                />

                <Input
                  autoComplete="on"
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  variant="bordered"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  isInvalid={errors?.hasOwnProperty('password')}
                  errorMessage={errors['password'] && "Password is required"}
                  {...register("password", { required: 'required'})}
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