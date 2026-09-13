import { describe, expect, it } from "@jest/globals";
import * as XLSX from "xlsx";

describe("spreadsheet runtime", () => {
  it("round-trips the broker export shape with the supported SheetJS build", () => {
    const source = [
      {
        type: "BID",
        commodity: "WHEAT",
        volume: "1,000 MT",
        price: "225 USD/MT",
      },
    ];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(source), "Sea Brokerage Feed");

    const bytes = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
    const restored = XLSX.read(bytes, { type: "buffer" });
    const rows = XLSX.utils.sheet_to_json(restored.Sheets["Sea Brokerage Feed"], {
      defval: "",
      raw: false,
    });

    expect(rows).toEqual(source);
    expect(XLSX.version).toBe("0.20.3");
  });
});
