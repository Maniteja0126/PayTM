"use client"

import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
const SendMoney = ({href} :{href : string}) => {
  const router = useRouter();
  
  return (
    <div className="mt-2">

    <Button
      onClick={() => {
        router.push(href);
      }}
    >
      Send Money
    </Button>
    </div>

  );
};

export default SendMoney;
