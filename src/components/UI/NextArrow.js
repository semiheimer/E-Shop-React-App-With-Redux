import { BsChevronRight } from "react-icons/bs";
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div>
      <BsChevronRight
        className={className}
        onClick={onClick}
        style={{
          color: "gray",
          zIndex: "1",
          background: "transparent",
          width: "33px",
          height: "33px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "1px 2px 10px -1px rgb(0 0 0 / 30%)",
          opacity: "1",
          borderRadius: "15px",
        }}
      />
    </div>
  );
};

export default NextArrow;
