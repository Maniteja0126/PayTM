import Image from "next/image";
import SendMoney from "../../../components/SendMoney";



export default function () {
   

  return (
    <div className="w-screen">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold"></div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <div>
          <Image src="/send-money.webp" width={500} height={500} alt="" />
        </div>

        <div className="flex justify-center flex-col ">
          <div>
            <div className="text-5xl text-[#001c64] font-bold ">Settle up</div>
            <div className="text-5xl flex items-center text-[#001c64] font-bold ">
              with friends ,
            </div>
            <div className="text-5xl text-[#0070e0] font-bold ">
              fast and safe
            </div>
          </div>
          <div className="flex justify-start">
            <p className="mt-2 text-2xl">
              At the table or across the globe, it's the fast, secure way to get
              cash to your friends and family.
            </p>
          </div>
          <div >
          <SendMoney href={"/transfer"}/>
          </div>
        </div>
      </div>
    </div>
  );
}
