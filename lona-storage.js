// lona-storage.js
// Drop this in your project folder and include it in every page.
// It reads the saved avatar + name from localStorage and updates the nav avatar.
// Also provides shared post storage so Stream posts appear on the Profile page.

(function () {
  function applyNavProfile() {
    try {
      const raw = localStorage.getItem('lonaProfile');
      if (!raw) return;
      const data = JSON.parse(raw);

      document.querySelectorAll('#navAvatar').forEach(el => {
        if (data.avatar) {
          el.innerHTML = `<img src="${data.avatar}"
            style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
        } else if (data.name) {
          el.textContent = data.name.charAt(0).toUpperCase();
        }
      });
    } catch (e) { /* silently ignore */ }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyNavProfile);
  } else {
    applyNavProfile();
  }
})();

// ── Shared Post Storage API ──────────────────────────────────────────────────
// Usage:
//   LonaPostsDB.getAll()           → array of post objects (newest first)
//   LonaPostsDB.save(post)         → saves a post object { id, text, likes, timestamp }
//   LonaPostsDB.update(id, fields) → merges fields into an existing post
//   LonaPostsDB.remove(id)         → deletes a post by id
//   LonaPostsDB.nextId()           → returns a unique numeric id string

window.LonaPostsDB = (function () {
  const KEY = 'lonaPosts';

  function getAll() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch (e) { return []; }
  }

  function saveAll(posts) {
    localStorage.setItem(KEY, JSON.stringify(posts));
  }

  function save(post) {
    const posts = getAll();
    posts.unshift(post); // newest first
    saveAll(posts);
  }

  function update(id, fields) {
    const posts = getAll().map(p => p.id === id ? Object.assign({}, p, fields) : p);
    saveAll(posts);
  }

  function remove(id) {
    saveAll(getAll().filter(p => p.id !== id));
  }

  function nextId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  return { getAll, save, update, remove, nextId };
})();