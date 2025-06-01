import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-full bg-white p-8 rounded-lg border border-[#dadada]">
      <div className="mb-8">
        <div className="text-container w-[307px] h-[40px]">
<h2 className="text-[14px] font-semibold text-[#4d4d4d] mb-4">
          გახდით რეპორტიორი Intermedia.ge-ს დახმარებით!
        </h2>

        </div>
        <p className="text-[#424242] font-sans text-base leading-relaxed gap-y-8 mb-8 w-[313px]">
          ყველაზე მასშტაბური და პოპულარული ქართული პლატფორმა სამოქალაქო ჟურნალისტიკისთვის
        </p>

        {/* Features List */}
      <div className="space-y-[10px] mb-3">
  <div className="flex items-center space-x-4">
    <img src="/images/img_group_27567.svg" alt="icon" className="w-6 h-6" />
    <span className="text-[#4d4d4d] text-base">გახდი ავტორი</span>
  </div>
  <div className="flex items-center space-x-4">
    <img src="/images/img_group_27567.svg" alt="icon" className="w-6 h-6" />
    <span className="text-[#4d4d4d] text-base font-light">დაწერე სტატია</span>
  </div>
  <div className="flex items-center space-x-4">
    <img src="/images/img_group_27567.svg" alt="icon" className="w-6 h-6" />
    <span className="text-[#4d4d4d] text-base font-light">გამოიმუშავე ფული</span>
  </div>
</div>

        <button className="flex h-6 min-w-[20px] py-[6.5px] px-[8.5px] justify-center items-center rounded border-[0.5px] border-[#4A4A4A] bg-white">
          დაწერე სტატია
</button>

        
      </div>

      {/* <div className="absolute right-0 top-0 space-y-2">
        <div className="w-[102px] h-1 bg-black"></div>
        <div className="w-[102px] h-1 bg-black"></div>
        <div className="w-[102px] h-1 bg-black"></div>
        <div className="w-[102px] h-1 bg-black"></div>
      </div> */}
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-20 right-12">
        <div className="w-[165px] h-1 bg-black rounded-sm"></div>
      </div>
      <div className="absolute bottom-16 right-8">
        <div className="w-[127px] h-1 bg-black rounded-sm"></div>
      </div>
    </aside>
  );
};

export default Sidebar;