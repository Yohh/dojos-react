import React, { useEffect } from "react";

// interface Props {
//   name: string;
//   image: string;
//   quote: string;
// }

// export const QuoteDisplay = (props: Props) => {
//   return (
//     <div>
//       <div className={props.name}></div>
//       <div className={props.image}></div>
//       <div className={props.quote}></div>
//     </div>
//   );
// };

export const QuoteDisplay = (props: {
  name: string | undefined;
  image: string | undefined;
  quote: string | undefined;
  handleClick: () => void;
  setQuotes: React.Dispatch<
    React.SetStateAction<
      | {
          character: string;
          image: string;
          quote: string;
        }
      | undefined
    >
  >;
}) => {
  useEffect(() => {
    return props.setQuotes(undefined);
  }, []);

  return (
    <div>
      <button type="button" onClick={() => props.handleClick()}>
        search quote
      </button>
      <div>{props.name}</div>
      <img src={props.image} alt="" />
      <div>{props.quote}</div>
    </div>
  );
};
