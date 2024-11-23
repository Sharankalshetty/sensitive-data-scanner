const request = require("supertest");
const app = require("../app");

describe("Scan API Tests", () => {
  it("should upload a file and classify data", async () => {
    const response = await request(app)
      .post("/api/scans/upload")
      .send({ filename: "test.txt", fileContent: "Test PAN: ABCDE1234F" });

    expect(response.status).toBe(200);
    expect(response.body.results.PAN).toContain("ABCDE1234F");
  });
});