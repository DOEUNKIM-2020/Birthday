import React from "react";
import useTimer from "../hooks/useTimer";

const Timer = () => {
  const { day, hours, minutes, seconds } = useTimer();
  const onClick = () => {
    if (day === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      alert("대학원 시작! 하고 싶은 연구 말해보세요😎");
    } else {
      alert("아직 학부 안끝났다.. 화이팅..");
    }
  };
  return (
    <div className="flex flex-col items-center space-y-4 py-8 bg-purple1 shadow-md rounded-lg w-[70%] ">
      <span className="font-kangwon-bold text-xl text-white">~ 새로운 연구까지 ~</span>
      <span className="font-kangwon-bold text-3xl text-white">
        {day}일 {hours}시간 {minutes}분 {seconds}초
      </span>
      <button
        onClick={onClick}
        className="w-[40%] py-2 bg-purple2 text-white rounded-full shadow-md font-kangwon-bold"
      >
        전's 페이보릿 받으러 가기
      </button>
    </div>
  );
};

export default Timer;
