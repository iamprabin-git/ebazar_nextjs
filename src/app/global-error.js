"use client";

function GlobalErrorBoundary() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-center items-center">
          <h1>Something went wrong</h1>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      </body>
    </html>
  );
}

export default GlobalErrorBoundary;
