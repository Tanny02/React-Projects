import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Overview from "./Overview";
import View from "./View";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    totalIncome,
    setTotalIncome,
    totalExpense,
    setTotalExpense,
    transactions,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "income") {
        income += parseFloat(transaction.amount);
      } else {
        expense += parseFloat(transaction.amount);
      }
    });

    setTotalIncome(income);
    setTotalExpense(expense);
  }, [transactions]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.400"} color={"black"} ml={"4"}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Overview
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <View
          data={transactions.filter((item) => item.type === "income")}
          type={"income"}
        />
        <View
          data={transactions.filter((item) => item.type === "expense")}
          type={"expense"}
        />
      </Flex>
    </Flex>
  );
};

export default Index;
