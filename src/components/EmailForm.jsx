import Input from "./custom/Input";
import React from "react";
import { RiAddLine } from "react-icons/ri";

const inputClassName =
  "w-full p-2 ml-1 appearance-none rounded-sm bg-gray-100/10 shadow-sm outline outline-[1.5px] outline-gray-200 text-gray-400";
const EmailForm = () => {
  return (
    <form className="p-2">
      <div className="flex w-full items-center justify-between p-1">
        <Input
          label="Subject"
          name="subject"
          type="text"
          className="flex flex-col gap-2 p-1 w-[45%]"
          labelClassName="font-medium p-1"
          inputClassName={inputClassName}
          placeholder="Input Text"
          isTextArea={false}
        />
        <Input
          label="Add People"
          name="addPeople"
          type="text"
          className="flex flex-col gap-2 p-1 w-[45%]"
          labelClassName="font-medium p-1"
          inputClassName={inputClassName}
          placeholder="Input Text"
          isTextArea={false}
        />
      </div>
      <div className="flex w-full items-center justify-between p-1">
        <Input
          label="Due Date"
          name="dueDate"
          type="date"
          className="flex flex-col gap-2 p-1 w-[45%]"
          labelClassName="font-medium p-1"
          inputClassName={inputClassName}
          isTextArea={false}
        />
        <Input
          label="Time"
          name="time"
          type="time"
          className="flex flex-col gap-2 p-1 w-[45%]"
          labelClassName="font-medium p-1"
          inputClassName={inputClassName}
          isTextArea={false}
        />
      </div>
      <div className="flex w-full items-center justify-between p-1">
        <Input
          label="Description"
          name="description"
          className="flex flex-col gap-2 p-1 w-full"
          labelClassName="font-medium p-1"
          placeholder="Input Text"
          textareaClassName={inputClassName}
          isTextArea={true}
        />
      </div>
      <div className="flex items-center justify-between p-2">
        <button className="flex items-center gap-1 text-black/50 hover:text-black/90 font-normal">
          <span className="text-3xl text-blue-950">
            <RiAddLine />
          </span>
          Add Team Member
        </button>
        <button className="p-2 px-4 bg-blue-950 text-white rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
