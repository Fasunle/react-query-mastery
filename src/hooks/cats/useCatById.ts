import { useQuery } from "@tanstack/react-query";
import http from "../../api";
import { AxiosError, AxiosResponse } from "axios";

interface ICat {
  name: string;
  url: string;
  id: number;
}

export function useCatById(id: string) {
  const { isLoading, isError, error, data } = useQuery<
    AxiosResponse<ICat>,
    AxiosError<{ message: string }>
  >({
    queryKey: [`cat-${id}`],
    queryFn: () => http.get(`/images/${id}`),
  });

  return { isLoading, isError, error, data: data?.data };
}
