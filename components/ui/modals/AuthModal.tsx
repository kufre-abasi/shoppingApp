"use client";
import React, { useState } from "react";
import Modal from "~/components/ui/modals/Modal"; // Example: Use your modal library or create a custom one
import Other from "~/components/Auth/Signup/Other";
import Login from "~/components/Auth/Signup/Login";
import Verification from "~/components/Auth/Signup/Verification";
import Congratulations from "~/components/Auth/Congratulations";


const AuthModal = ({
  isOpen,
  onClose,
  isOpenLogin
}: {
  isOpen: boolean;
  onClose: () => void;
  isOpenLogin : ()=> void
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSuccess, setIsSuccess] = useState(false); // New state for tracking form submission success

  const handleNextStep = () => {
    if (step === 3) {
      setIsSuccess(true); // Set form submission success to true on the last step
    } else {
      setStep(step + 1);
    }
  };

  const handleCloseModal = () => {
    onClose(); // Invoke the onClose function passed via props
    setIsSuccess(false); // Reset form submission success on modal close
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleFormDataChange = (data: any) => {
    setFormData({ ...formData, ...data });
  };

  // Render modal content based on the current step
  let modalContent;
  if (isSuccess) {
    modalContent = (
      <Congratulations
        hooray={"Hooray! You have officially joined the Hivvy Clan!"}
        buttonText={"Proceed"}
        onClose={isOpenLogin}
      />
    );
  } else {
    switch (step) {
      case 1:
        modalContent = (
          <Login
            onNext={handleNextStep}
            handleCloseModal={handleCloseModal}
            onChange={handleFormDataChange}
          />
        );
        break;
      case 2:
        modalContent = (
          <Verification
            onNext={handleNextStep}
            handleCloseModal={handleCloseModal}
            onPrev={handlePrevStep}
            onChange={handleFormDataChange}
          />
        );
        break;
      case 3:
        modalContent = (
          <Other
            onNext={handleNextStep}
            onPrev={handlePrevStep}
            handleCloseModal={handleCloseModal}
            onChange={handleFormDataChange}
          />
        );
        break;
      default:
        modalContent = null;
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      {modalContent}
    </Modal>
  );
};

export default AuthModal;
