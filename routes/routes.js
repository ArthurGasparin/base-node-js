export default function routes(app) {

    app.get("/api/hello", (_req, res) => {
        res.json({ message: `Olá` });
    })
}