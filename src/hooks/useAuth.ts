import { useCallback, useState } from "react"
import axios from "axios"


import { User } from "../types/api/user";
import { useNavigate } from "react-router";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { showMessage } = useMessage();

  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          showMessage({
            title: "ログインしました",
            status: "success",
          });
          navigate("/home");
        } else {
          showMessage({
            title: "userが見つかりませんでした",
            status: "error",
          });
        }
      }).catch(() => {
        
        alert("ログインできませんでした")
      }).finally(() => {
        setLoading(false);
      });
  }, [navigate, showMessage]);

  return { login, loading };
};