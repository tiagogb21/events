import fs from "fs";
import path from "path";
import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { app } from "@/app";

const validUserPath = path.join(__dirname, "../_mocha/", "user-response");
const userResponsePath = path.join(__dirname, "../_mocha/", "valid-user");

const validUser = JSON.parse(fs.readFileSync(validUserPath, "utf-8"));
const userResponse = JSON.parse(fs.readFileSync(userResponsePath, "utf-8"));

describe("Authenticate (e2e)", () => {
    beforeAll(async () => {
        await app.ready();
    });

    afterAll(async () => {
        await app.close();
    });

    it("should be able to authenticate", async () => {
        await request(app.server).post("/users").send(validUser);

        const response = await request(app.server)
            .post("/sessions")
            .send(userResponse);

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({
            token: expect.any(String),
        });
    });
});
