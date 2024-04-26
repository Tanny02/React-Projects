import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../Context";

const Transactions = ({ onClose, isOpen }) => {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Add New Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Enter Description</FormLabel>
                <Input
                  placeholder="Enter the description"
                  name="description"
                  type="text"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Enter Amount</FormLabel>
                <Input
                  placeholder="Enter the amount"
                  name="amount"
                  type="number"
                  onChange={handleChange}
                />
              </FormControl>
              <RadioGroup mt={"5"} value={value} onChange={setValue}>
                <Radio
                  checked={formData.type === "income"}
                  colorScheme="blue"
                  value="income"
                  name="type"
                  onChange={handleChange}
                >
                  Income
                </Radio>
                <Radio
                  checked={formData.type === "expense"}
                  colorScheme="red"
                  value="expense"
                  name="type"
                  onChange={handleChange}
                >
                  Expense
                </Radio>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button mr={"4"} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onClose} type="submit">
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </form>
    </Modal>
  );
};

export default Transactions;
