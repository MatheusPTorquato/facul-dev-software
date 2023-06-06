const HEAD = (
  <div
    style={{
      width: "20px",
      height: "20px",
      borderRadius: "100%",
      border: "4px solid black",
      position: "absolute",
      top: "20px",
      right: "-10px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "4px",
      height: "70px",
      backgroundColor: "black",
      position: "absolute",
      top: "48px",
      right: "1px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "70px",
      height: "4px",
      background: "black",
      position: "absolute",
      top: "70px",
      right: "-68px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "70px",
      height: "4px",
      background: "black",
      position: "absolute",
      top: "70px",
      right: "3px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "70px",
      height: "4px",
      background: "black",
      position: "absolute",
      top: "112px",
      right: "-65px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "70px",
      height: "4px",
      background: "black",
      position: "absolute",
      top: "112px",
      right: "1px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
        {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "5px",
          width: "125px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "210px",
          width: "5px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "5px", width: "250px", background: "black" }} />
    </div>
  );
}
