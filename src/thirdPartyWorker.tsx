import React, { useState } from "react";
import { RemoteRoot } from "@remote-ui/core";
import { render } from "@remote-ui/react";
import { Card, DataTable, TextField, Button } from "./RemoteComponents";

// const Card = 'Card' as any;
(self as any).addRenderCallback((remoteRoot: RemoteRoot) => {
  render(<Extension></Extension>, remoteRoot);
});

const rows = [
  ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
  ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
  [
    "Navy Merino Wool Blazer with khaki chinos and yellow belt",
    "$445.00",
    124518,
    32,
    "$14,240.00"
  ]
];

function Extension() {
  const [text, setText] = useState("");
  const [matchedRows, setMatchedRows] = useState(rows);

  return (
    <Card>
      <TextField
        label="Type to filter"
        value={text}
        onChange={value => {
          setText(value);

          if (value.length === 0) {
            setMatchedRows(rows);
            return;
          }

          setMatchedRows(
            rows.filter(row => {
              return (row[0] as string)
                .toLowerCase()
                .includes(value.toLowerCase());
            })
          );
        }}
      ></TextField>

      <DataTable
        columnContentTypes={[
          "text",
          "numeric",
          "numeric",
          "numeric",
          "numeric"
        ]}
        headings={[
          "Product",
          "Price",
          "SKU Number",
          "Net quantity",
          "Net sales"
        ]}
        rows={matchedRows}
      />
      {/* <Button onClick={() => {}}></Button> */}
    </Card>
  );
}
