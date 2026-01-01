import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledTextarea, StyledOutput } from "../styles/KeyboardInput.styles";
import { mapKey } from "../mapKey";
import { useSaveText } from "../hooks/useSaveText";

type FormValues = {
  inputText: string; // QWERTY input
};

export function KeyboardInput() {
  const { register, setValue, watch } = useForm<FormValues>({
    defaultValues: { inputText: "" },
  });

  const inputText = watch("inputText");           // QWERTY input
  const [outputText, setOutputText] = useState(""); // DVORAK output

  const saveText = useSaveText(); // React Query for saving output

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    // Backspace
    if (e.key === "Backspace") {
      setValue("inputText", inputText.slice(0, -1));
      setOutputText(prev => prev.slice(0, -1));
      return;
    }

    // Enter
    if (e.key === "Enter") {
      setValue("inputText", inputText + "\n");
      setOutputText(prev => prev + "\n");
      return;
    }

    // Ignore modifier-only keys
    if (e.key.length > 1) return;

    // Append QWERTY input
    setValue("inputText", inputText + e.key);

    // Map to DVORAK and append
    const mapped = mapKey(e.nativeEvent);
    if (mapped !== null) {
      const newOutput = outputText + mapped;
      setOutputText(newOutput);
      saveText.mutate(newOutput); // persist via React Query
    }
  };

  return (
    <div>
      <h2>Input (QWERTY)</h2>
      <StyledTextarea
        {...register("inputText")}
        value={inputText}
        onKeyDown={handleKeyDown}
        placeholder="Type here (QWERTY)"
      />

      <h2>Output (DVORAK)</h2>
      <StyledOutput>{outputText}</StyledOutput>
    </div>
  );
}
