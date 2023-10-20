export default function Container(props) {
  return (
    <div className="@container-normal w-[378px] h-[458px] relative">
      <div class="w-full h-full left-0 top-0 absolute bg-yellow rounded-sm"></div>
      <div class="w-13 h-110 left-[8px] justify-center top-[49px] absolute bg-white border-4 border-orange"></div>
      <div class="w-14 h-8 left-[52px] top-[8px] absolute bg-white border-4 border-orange"></div>
      <div class="w-9 h-100 left-[8px] top-[8px] absolute bg-white border-4 border-orange"></div>{" "}
      {props.children}
    </div>
  );
}
