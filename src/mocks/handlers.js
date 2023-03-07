import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post("https://mockworker.com/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        authentication: "bGjSkeMxKxRp5mfKSLgH0g7UOJYFlwvI",
        isAdmin: true,
      })
    );
  }),
];
