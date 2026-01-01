import { useMutation } from "@tanstack/react-query";

export function useSaveText() {
  return useMutation({
    mutationFn: async (text: string) => {
      // Simulated API call
      await new Promise(res => setTimeout(res, 300));
      return text;
    },
  });
}
