import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Index(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial",
        fontSize: "3rem",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        {props.password}
        <br />
        <CopyToClipboard text={props.password}>
          <button style={{ margin: "5px", fontSize: "2rem" }}>Copy</button>
        </CopyToClipboard>
        <a href="/"><button style={{ margin: "5px", fontSize: "2rem"}}>New</button></a>
      </div>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  var ENDPOINT= "https://slu-random-server.sikalabs.io/v1/slu_random_password";
  const res = await fetch(ENDPOINT);
  const data = await res.text();
  return {
    props: {
      password: data,
    },
  };
}
