export default function routes(app) {
    app.get("/api/v1/hello", (_req, res) => {
        res.json({ message: `${process.env.APP_ENV}` });
    });
}