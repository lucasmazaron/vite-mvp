import { useEffect, useState } from "react";

export interface User {
  id: string;
  name: string;
  status: string;
}

export function useUserList() {
  const url = `${import.meta.env.VITE_BACKEND_BASE_URL}/users`;
  const [ users, setUsers ] = useState<User[]>();

  useEffect(()=> {
    fetch(url).then(res => {
      if(res.ok) {
        return res.json();
      }

      throw res;
    }).then(data => {
      setUsers(data);
    }).catch((e) => { 
      console.error(e);
    });
  }, [])

  return [users]
}
