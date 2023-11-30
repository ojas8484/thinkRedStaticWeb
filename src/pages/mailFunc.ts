export async function GET(context) {
  const runtime = "hello this is test api"

  return new Response(JSON.stringify(runtime), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}