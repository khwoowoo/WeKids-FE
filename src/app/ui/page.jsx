import CustomButton from "@/src/ui/components/atoms/CustomButton";
import React from "react";

const Page = () => {
  return (
    <>
      {/* large */}
      <div>
        <div className="bg-white w-full flex flex-col items-center justify-center py-5 border-b-2 border-black">
          <div className="text-2xl">Large</div>
          <CustomButton className="my-2">main</CustomButton>
          <CustomButton color="sub" className="my-2">
            sub
          </CustomButton>
          <CustomButton color="gray" className="my-2">
            gray
          </CustomButton>
        </div>
        <div className="w-full flex flex-col items-center justify-center py-5 border-b-2 border-black">
          <div className="text-2xl">Large Opacity</div>
          <CustomButton color="black10" className="my-2">
            black10
          </CustomButton>
          <CustomButton color="black40" className="my-2">
            black40
          </CustomButton>
          <CustomButton color="black80" className="my-2">
            black80
          </CustomButton>
        </div>
      </div>

      {/* medium */}
      <div className="flex">
        <div className="bg-white w-full flex flex-col items-center justify-center p-5 border-b-2 border-r-2 border-black">
          <div className="text-md">Medium</div>
          <CustomButton size="medium" className="my-2">
            main
          </CustomButton>
          <CustomButton color="sub" size="medium" className="my-2">
            sub
          </CustomButton>
          <CustomButton color="gray" size="medium" className="my-2">
            gray
          </CustomButton>
        </div>
        <div className="w-full flex flex-col items-center justify-center p-5 border-b-2 border-black">
          <div className="text-md">Medium Opacity</div>
          <CustomButton color="black10" size="medium" className="my-2">
            black10
          </CustomButton>
          <CustomButton color="black40" size="medium" className="my-2">
            black40
          </CustomButton>
          <CustomButton color="black80" size="medium" className="my-2">
            black80
          </CustomButton>
        </div>
      </div>

      {/* medium rounded*/}
      <div className="flex">
        <div className="bg-white w-full flex flex-col items-center justify-center p-5 border-b-2 border-r-2 border-black">
          <div className="text-md">Medium Rounded</div>
          <CustomButton size="medium" rounded={true} className="my-2">
            main
          </CustomButton>
          <CustomButton color="sub" size="medium" rounded={true} className="my-2">
            sub
          </CustomButton>
          <CustomButton color="gray" size="medium" rounded={true} className="my-2">
            gray
          </CustomButton>
        </div>
        <div className="w-full flex flex-col items-center justify-center p-5 border-b-2 border-black">
          <div className="text-md">Medium Opacity Rounded</div>
          <CustomButton color="black10" size="medium" rounded={true} className="my-2">
            black10
          </CustomButton>
          <CustomButton color="black40" size="medium" rounded={true} className="my-2">
            black40
          </CustomButton>
          <CustomButton color="black80" size="medium" rounded={true} className="my-2">
            black80
          </CustomButton>
        </div>
      </div>

      {/* small */}
      <div className="flex">
        <div className="bg-white w-full flex flex-col items-center justify-center p-5 border-b-2 border-r-2 border-black">
          <div className="text-md">Small Rounded</div>
          <CustomButton size="small" className="my-2">
            main
          </CustomButton>
          <CustomButton color="sub" size="small" className="my-2">
            sub
          </CustomButton>
          <CustomButton color="gray" size="small" className="my-2">
            gray
          </CustomButton>
        </div>
        <div className="w-full flex flex-col items-center justify-center p-5 border-b-2 border-black">
          <div className="text-md">Small Opacity Rounded</div>
          <CustomButton color="black10" size="small" className="my-2">
            black10
          </CustomButton>
          <CustomButton color="black40" size="small" className="my-2">
            black40
          </CustomButton>
          <CustomButton color="black80" size="small" className="my-2">
            black80
          </CustomButton>
        </div>
      </div>

      {/* small rounded */}
      <div className="flex">
        <div className="bg-white w-full flex flex-col items-center justify-center p-5 border-b-2 border-r-2 border-black">
          <div className="text-md">Small Rounded</div>
          <CustomButton size="small" rounded={true} className="my-2">
            main
          </CustomButton>
          <CustomButton color="sub" size="small" rounded={true} className="my-2">
            sub
          </CustomButton>
          <CustomButton color="gray" size="small" rounded={true} className="my-2">
            gray
          </CustomButton>
        </div>
        <div className="w-full flex flex-col items-center justify-center p-5 border-b-2 border-black">
          <div className="text-md">Small Opacity</div>
          <CustomButton color="black10" size="small" rounded={true} className="my-2">
            black10
          </CustomButton>
          <CustomButton color="black40" size="small" rounded={true} className="my-2">
            black40
          </CustomButton>
          <CustomButton color="black80" size="small" rounded={true} className="my-2">
            black80
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default Page;
