import React from "react";
import { Button } from "antd";

const Modal = ({ message }) => {
  return (
    <div className="h-screen w-screen bg-[#00000050%]">
      <div className="w-full bg-white rounded-2xl">{message}</div>
      <Button
        className="bg-golden sm:w-1/3 w-full rounded-full"
        type="primary"
        htmlType="submit"
      >
        Okay
      </Button>
    </div>
  );
};

export default Modal;
