const BASE_URL = "https://jsonplaceholder.typicode.com";

//Fetch and render the first five posts with userId on each card
async function displayFirstFivePosts() {
  try {
    // You can also limit via query param (?_limit=5), but slicing demonstrates
    // client-side subsetting directly on the array.
    const response = await fetch(`${BASE_URL}/posts`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} (${response.statusText})`);
    }

    const posts = await response.json();
    const firstFive = posts.slice(0, 5);

    console.group("Task 1 & 2: First 5 Posts (Cards)");
    firstFive.forEach((post) => {
      console.log(
        `%c┌────────────────────────────────────────────────────────┐\n` +
        `│ [Card] Post ID: ${String(post.id).padEnd(4)} | User ID: ${String(post.userId).padEnd(25)}│\n` +
        `├────────────────────────────────────────────────────────┤\n` +
        `│ Title: ${post.title.slice(0, 48).padEnd(48)}│\n` +
        `│ Body:  ${post.body.replace(/\n/g, " ").slice(0, 48).padEnd(48)}│\n` +
        `└────────────────────────────────────────────────────────┘`,
        "color: #4CAF50; font-family: monospace;"
      );
    });
    console.groupEnd();

    // Render to DOM if an element with id="posts-container" exists
    const container = document.getElementById("posts-container");
    if (container) {
      container.innerHTML = firstFive
        .map(
          (post) => `
          <article class="post-card" style="border: 1px solid #ddd; padding: 12px; margin-bottom: 10px; border-radius: 6px;">
            <header style="font-size: 0.85rem; color: #666; margin-bottom: 6px;">
              <span>Post #${post.id}</span> • <strong>User ID: ${post.userId}</strong>
            </header>
            <h3 style="margin: 0 0 8px 0;">${post.title}</h3>
            <p style="margin: 0; color: #333;">${post.body}</p>
          </article>
        `
        )
        .join("");
    }
  } catch (error) {
    console.error("Failed to load posts:", error.message);
  }
}

//Request one specific post by ID
async function getPostById(postId) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Unable to retrieve post #${postId}`);
    }

    const post = await response.json();
    console.group(`Task 3: Post Details for ID #${postId}`);
    console.log(`User ID: ${post.userId}`);
    console.log(`Title:   ${post.title}`);
    console.log(`Body:    ${post.body}`);
    console.groupEnd();
    return post;
  } catch (error) {
    console.error(`Error requesting post #${postId}:`, error.message);
  }
}


//Try an invalid URL and inspect the error

async function triggerInvalidUrl() {
  console.group("Task 4: Testing Invalid URLs");

  // Scenario A: Valid domain, non-existent endpoint (Yields HTTP 404 Error)
  try {
    console.log("--> Requesting non-existent endpoint: /this-route-does-not-exist");
    const response = await fetch(`${BASE_URL}/this-route-does-not-exist`);

    console.log("Fetch promise resolved! Response inspection:");
    console.log(`- response.ok:     ${response.ok}`);       // false
    console.log(`- response.status: ${response.status}`);   // 404
    console.log(`- response.statusText: "${response.statusText}"`);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
  } catch (err) {
    console.warn("Caught expected 404 response handler:", err.message);
  }

  // Scenario B: Non-existent domain / DNS failure (Yields Network Error / TypeError)
  try {
    console.log("--> Requesting unreachable host: https://invalid-domain-xyz-12345.com");
    await fetch("https://invalid-domain-xyz-12345.com/data");
  } catch (err) {
    console.error("Caught true Network Error (Promise Rejected):", {
      name: err.name,       // "TypeError" in browser environments
      message: err.message  // e.g., "Failed to fetch"
    });
  }

  console.groupEnd();
}

// Execute demonstrations
(async function runAll() {
  await displayFirstFivePosts();
  await getPostById(42);
  await triggerInvalidUrl();
})();