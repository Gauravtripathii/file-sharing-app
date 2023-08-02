import { Circles } from "react-loader-spinner";

const Loading = ({ clicks }) => {
  return (
    <div className="loader">
      {clicks > 0 ? (
        <Circles
        height="80"
        width="80"
        color="hotpink"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      ) : (
        <p>you will get a sharable link here</p>
      )}
    </div>
  );
};

export default Loading;
