import axios from "axios";
import { useQuery } from "@tanstack/react-query";
export function useGetPulpQuery(id) {
    return useQuery({
      queryKey: ["getTask"],
      queryFn: async () => {
        return (await axios.get());
      }
    });
  }