import Profile from "@/src/ui/Components/atoms/Modal/Profile";
import BlueBox from "@/src/ui/Components/home/BlueCardBox";

const childAccounts = [
  {
    accountNumber: "3333-0073-0030-03",
    balance: 300000,
    name: "강현우",
    state: "active",
    designType: "WEBEE",
  },
  {
    accountNumber: "3333-0073-0030-04",
    balance: 450000,
    name: "이준호",
    state: "inactive",
    designType: "WEBEE",
  },
  {
    accountNumber: "3333-0073-0030-05",
    balance: 120000,
    name: "김민수",
    state: "active",
    designType: "WEBEE",
  },
];

export default function MainHome() {
  return (
    <div className={`flex flex-col justify-center items-center h-full `}>
      <Profile/>
      <BlueBox />
    </div>
  );
}
