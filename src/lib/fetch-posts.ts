export const fetchPosts = async (count: number) => {
  // We don't *need* to use a number, but this solution contains a discussion
  // for what we do with the fact that input[type="number"] gives us strings.
  if (isNaN(count)) return [];
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};
