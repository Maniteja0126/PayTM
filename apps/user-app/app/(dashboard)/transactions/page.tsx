import { getServerSession } from "next-auth";
import { P2PTransactions } from "../../../components/P2PTransactions";
import prisma from "@repo/db/client";
import { authOptions } from "../../lib/auth";



async function p2pTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    time: t.timestamp,
    amount: t.amount,
  }));
}

export default async function () {
  const transactions = await p2pTransactions();

    return (
      <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
          Transactions
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div className="pt-4">
              <P2PTransactions transactions={transactions} />
            </div>
        </div>
      </div>
    );
}
