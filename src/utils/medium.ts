export interface MediumPost {
  title: string;
  link: string;
  content: string;
  pubDate: string;
  categories: string[];
  thumbnail?: string;
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const response = await fetch("/api/medium");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
