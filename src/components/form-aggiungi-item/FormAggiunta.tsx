import React from "react";
interface Props {
  value: string;
  setValue: (value: string) => void;
  handlePaste: (event: React.ClipboardEvent<HTMLTextAreaElement>) => void;
  insertItem: () => void;
}
const FormAggiunta = ({ value, setValue, handlePaste, insertItem }: Props) => {
  return (
    <div className=" text-area-box  row">
      <textarea
        className="my-text-area col"
        value={value}
        id="your-textarea-id"
        placeholder="Scrivi, vai a capo o Incolla a, b, c"
        onChange={(e) => {
          setValue(e.target.value);
          e.target.rows = e.target.value.split("\n").length || 1;
        }}
        onPaste={handlePaste}
        rows={value.split("\n").length || 1}
      ></textarea>
      <button
        className="my-button metti-button col-3"
        id="save"
        onClick={insertItem}
      >
        Metti
      </button>
    </div>
  );
};

export default FormAggiunta;
