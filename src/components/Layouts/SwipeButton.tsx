import { motion } from "framer-motion";
import { useState } from "react";

interface SwipeButtonProps {
  onSwipe?: () => void;
}

const SwipeButton: React.FC<SwipeButtonProps> = ({ onSwipe }) => {
  const [isSwiped, setIsSwiped] = useState<boolean>(false);

  return (
    <div className="relative w-64 h-14  rounded-full flex items-center p-1 " style={isSwiped ?{backgroundColor:"green"} :{ backgroundColor:"gray"} }>
      <motion.div
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer"
        drag="x" // Enable horizontal dragging
        dragConstraints={{ left: 0, right: 200 }} // Constrain dragging within the parent div
        dragElastic={0} // Prevent dragging beyond constraints
        onDragEnd={(event, info) => {
          if (info.point.x > 150) {
            setIsSwiped(true);
            onSwipe && onSwipe(); // Call the function when swiped
          } else {
            setIsSwiped(false); // Reset if not swiped far enough
          }
        }}
      >
        ▶
      </motion.div>
      {!isSwiped ? (
        <p className="absolute left-16 text-white">Swipe to Confirm</p>
      ) : (
        <p className="absolute left-16 text-white font-semibold">Confirmed!</p>
      )}
    </div>
  );
};

export default SwipeButton;