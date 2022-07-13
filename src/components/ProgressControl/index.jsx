import React from "react";
import "./progressControl.css";

export default function ProgressControl() {
  return (
    <section className="border-top pt-4 d-flex justify-content-between">
      <button type="button" className="btn btn-progress-prev">
        &larr;　上一步
      </button>
      <button type="button" className="btn btn-progress-next">
        下一步　&rarr;
      </button>
    </section>
  );
}
