export async function GET(context) {
  const runtime = context.locals.runtime;

  return new Response(JSON.stringify(runtime), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}