import React from "react";

function Entry(dict) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {dict.emoji}
        </span>

        <span>{dict.name}</span>
      </dt>
      <dd>{dict.meaning}</dd>
    </div>
  );
}

export default Entry;
