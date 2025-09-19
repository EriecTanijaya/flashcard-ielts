import { type Server, serve } from "bun";
import os from "os";
import dashboard from "../../frontend/public/dashboard.html";

export async function bootstrapBackend() {
	const server = serve({
		routes: {
			"/": dashboard,
			"/api/questions": {
				async GET() {
					return Response.json({
						questionAndAnswers: [
							{
								question: "comprehensive",
								answers: [
									"incomplete",
									"complete",
									"comprehensive",
									"complete",
								],
							},
						],
					});
				},
			},
		},
		development: {
			console: true,
			hmr: true,
		},
	});

	console.log(`Listening to ${getNetworkAddress(server)}`);
}

function getNetworkAddress(server: Server): string | null {
	if (process.env.NODE_ENV === "production") {
		return server.url.origin;
	}

	const networkInterfaces = os.networkInterfaces();

	for (const interfaceName in networkInterfaces) {
		const interfaces = networkInterfaces[interfaceName];

		if (!interfaces) {
			continue;
		}

		for (const iface of interfaces) {
			if (iface.family === "IPv4" && !iface.internal) {
				return `http://${iface.address}:${server.port}`;
			}
		}
	}

	return null; // Return null if no suitable interface is found
}
